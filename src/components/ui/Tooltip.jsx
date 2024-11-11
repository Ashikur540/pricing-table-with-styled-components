import { useMemo, useRef, useState } from "react";
import PropTypes from 'prop-types';

import { TooltipBoxContainer, TooltipBox, TooltipTarget, TooltipWrapper } from "../styles/ui-element-styles/tooltip.styles";


import DOMPurify from 'dompurify';

export function Tooltip({ position, tooltipContent, children, background}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const targetRef = useRef(null);
    const showTooltip = isHovered || isFocused;

    const sanitizedContent = useMemo(() => ({
        __html: DOMPurify.sanitize(tooltipContent)
    }), [tooltipContent]);

    return (
        <TooltipWrapper>
            <TooltipTarget
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onClick={(e) => {
                    e.preventDefault();
                    targetRef.current?.blur();
                }}
                ref={targetRef}
                showOnFocus={isFocused}
            >
                {children}
            </TooltipTarget>
            {showTooltip && (
                <TooltipBoxContainer position={position}>
                    <TooltipBox 
                        background={background} 
                        position={position}
                        dangerouslySetInnerHTML={sanitizedContent}
                    />
                </TooltipBoxContainer>
            )}
        </TooltipWrapper>
    );
}

  Tooltip.propTypes = {
    position: PropTypes.oneOf(['left', 'right', 'bottom', 'top']),
    tooltipContent: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    background: PropTypes.string,
    styleMe: PropTypes.bool,
  };
