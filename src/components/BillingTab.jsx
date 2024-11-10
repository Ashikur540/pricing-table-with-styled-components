import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SaveTag, TabContainer, TabOption } from './styles/Elements.styles';
import { setBilling } from '../features/pricing/pricingSlice';


const BillingTab = () => {
    const dispatch = useDispatch();
    const plansInfo = useSelector(state => state.pricing.plansInfo);
    const selectedBilling = useSelector(state => state.pricing.selectedBilling);

    return (
        <TabContainer>
            {Object.values(plansInfo).map((plan) => (
                <React.Fragment key={plan.title}>
                    <TabOption
                        active={selectedBilling === plan.title}
                        onClick={() => dispatch(setBilling(plan.title))}
                    >
                        {plan.title}
                    </TabOption>
                    {plan.title === 'Billed monthly' && <span>|</span>}
                </React.Fragment>
            ))}
            {Object.values(plansInfo).find((plan) => plan.discount.length > 0) && (
                <SaveTag>
                    {Object.values(plansInfo).find((plan) => plan.discount.length).discount}
                </SaveTag>
            )}
        </TabContainer>
    );
};


export default BillingTab;
