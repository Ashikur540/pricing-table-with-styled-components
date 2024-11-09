import { useRef, useState } from "react";
import PropTypes from 'prop-types';
import { TooltipBoxContainer, TooltipBox, TooltipTarget, TooltipWrapper } from "../styles/ui-element-styles/tooltip.styles";


export function Tooltip({ position, tooltipContent, children, background, styleMe}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const targetRef = useRef(null);
    const showTooltip =  isHovered || isFocused;
  
    const handleClick = (e) => {
      e.preventDefault();
      if (targetRef.current) {
        targetRef.current.blur();
      }
    };
  
    return (
      <TooltipWrapper>
        <TooltipTarget
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onClick={handleClick}
          ref={targetRef}
          styleMe={styleMe}
          showOnFocus={isFocused}
        >
          {children}
        </TooltipTarget>
        {showTooltip && (
          <TooltipBoxContainer position={position}>
            <TooltipBox background={background} position={position}>
              {tooltipContent}
            </TooltipBox>
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
