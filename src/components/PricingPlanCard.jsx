
import { Tooltip } from './ui/Tooltip';
import { TooltipTarget } from './styles/ui-element-styles/tooltip.styles';
import IconInfo from './icons/Iconinfo';
import Dropdown from './ui/Dropdown';
import { extractPricingString } from '../lib/helper';

// eslint-disable-next-line react/prop-types
const PricingPlanCard = ({ planInfo }) => {
    const { plan, features } = planInfo ?? {}
    return (
        <div className="card">
            <div className="plan-info-wrapper">
                <div className="plan-info">
                    <h4 className='plan-info-name'>{plan?.name}</h4>
                    <h2 className='amount'>{plan?.price}</h2>
                </div>
                {plan?.name !== "Growth" ?
                    <div className="plan-info-visitors">
                        <span>{extractPricingString(plan?.title)}</span>
                        <Tooltip
                            tooltipContent={plan?.text}
                            position="top"
                            background="fff">
                            <TooltipTarget><IconInfo /></TooltipTarget>
                        </Tooltip>
                    </div>
                    : (
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '8px' }}>
                            <Dropdown />
                            <Tooltip
                                tooltipContent={plan?.text}
                                position="top"
                                background="fff">
                                <TooltipTarget><IconInfo style={{ color: "#a67bc3" }} /></TooltipTarget>
                            </Tooltip>
                        </div>
                    )
                }
            </div>
            <div className='features'>
                <p className="feature-title">
                    Free includes:
                </p>

                {
                    features?.map((feature, index) => (
                        <Tooltip key={index} tooltipContent={feature?.feature_desc} position="top" background={"fff"}>
                            <TooltipTarget>
                                <p key={index}>
                                    {feature?.feature_title}
                                </p>
                            </TooltipTarget>
                        </Tooltip>
                    ))
                }
            </div>
            <button className="primary-btn">Select Plan</button>
        </div>
    )

};

export default PricingPlanCard;