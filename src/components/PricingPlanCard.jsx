
import { Tooltip } from './ui/Tooltip';
import { TooltipTarget } from './styles/ui-element-styles/tooltip.styles';
import IconInfo from './icons/Iconinfo';
import Dropdown from './ui/Dropdown';
import { extractPricingString, getColor, hexToLowOpacityColor } from '../lib/helper';
import { FeaturesListWrapper, FeatureTitle, PlanCard, PlanInfoVisitorsBlock, PlanInfoWrapper, PlanName, PlanPrice, PrimaryButton } from './styles/Elements.styles';

// eslint-disable-next-line react/prop-types
const PricingPlanCard = ({ planInfo }) => {
    const { plan, features } = planInfo ?? {}



    return (
        <PlanCard borderColor={getColor(plan?.name)}>
            <PlanInfoWrapper>
                <div className="plan-info">
                    <PlanName>{plan?.name}</PlanName>
                    <PlanPrice>{plan?.price}</PlanPrice>
                </div>
                {plan?.name !== "Growth" ?
                    <PlanInfoVisitorsBlock color={getColor(plan?.name)} bgColor={hexToLowOpacityColor(getColor(plan?.name))}>
                        <span>{extractPricingString(plan?.title)}</span>
                        <Tooltip
                            tooltipContent={plan?.text}
                            position="top"
                            background="fff">
                            <TooltipTarget><IconInfo /></TooltipTarget>
                        </Tooltip>
                    </PlanInfoVisitorsBlock>
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
            </PlanInfoWrapper>
            <FeaturesListWrapper>
                <FeatureTitle>Free includes:</FeatureTitle>
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
            </FeaturesListWrapper>
            <PrimaryButton color={getColor()} >Select Plan</PrimaryButton>
        </PlanCard>
    )

};

export default PricingPlanCard;