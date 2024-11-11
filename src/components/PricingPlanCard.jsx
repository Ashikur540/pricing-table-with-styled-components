import { useSelector } from 'react-redux';

import { Tooltip } from './ui/Tooltip';
import { TooltipTarget } from './styles/ui-element-styles/tooltip.styles';
import IconInfo from './icons/Iconinfo';
import Dropdown from './ui/Dropdown';
import { extractPricingString, getColor, hexToContrastColor, } from '../lib/helper';
import { Badge, DropDownWithIconWrapper, FeaturesListWrapper, FeatureTitle, LineTroughText, PlanCard, PlanInfoVisitorsBlock, PlanInfoWrapper, PlanName, PlanPrice, PrimaryButton } from './styles/Elements.styles';

// eslint-disable-next-line react/prop-types
const PricingPlanCard = ({ planInfo }) => {
    const { plan, features } = planInfo ?? {};
    const billingType = useSelector(state => state.pricing.selectedBilling);

    return (
        <PlanCard borderColor={getColor(plan?.name)}>
            {plan.name === "Pro" && <Badge color={getColor(plan?.name)}>Popular</Badge>}
            <PlanInfoWrapper>
                <>
                    <PlanName>{plan?.name}</PlanName>
                    <PlanPrice color={getColor(plan.name)}>
                        {plan?.price}
                        <span className='amount-postfix'>{plan?.pricePostfix}</span>
                        {billingType !== "Billed monthly" && plan.name !== "Free" &&
                            <LineTroughText>{plan.salePrice ?? 0}/Month</LineTroughText>}
                    </PlanPrice>
                </>

                {plan?.hasVariants ? (
                    <DropDownWithIconWrapper>
                        <Dropdown
                            planName={plan.name}
                            variants={plan.variants}
                        />
                        <Tooltip
                            tooltipContent={plan?.text}
                            position="top"
                            background="fff">
                            <TooltipTarget>
                                <IconInfo style={{ color: getColor(plan?.name) }} />
                            </TooltipTarget>
                        </Tooltip>
                    </DropDownWithIconWrapper>
                ) : (
                    <PlanInfoVisitorsBlock
                        color={getColor(plan?.name)}
                        bgColor={hexToContrastColor(getColor(plan?.name), "low")}
                    >
                        <span>{extractPricingString(plan?.title)}</span>
                        <Tooltip
                            tooltipContent={plan?.text}
                            position="top"
                            background="fff">
                            <TooltipTarget><IconInfo /></TooltipTarget>
                        </Tooltip>
                    </PlanInfoVisitorsBlock>
                )}
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
            <PrimaryButton color={getColor(plan?.name)} hoverColor={hexToContrastColor(getColor(plan?.name), "high")}>Select Plan</PrimaryButton>
        </PlanCard>
    )

};

export default PricingPlanCard;