// src/components/BillingTab.js
import React, { useState } from 'react';
import plansData from '../../public/data.json';
import { SaveTag, TabContainer, TabOption } from './styles/Elements.styles';



const BillingTab = () => {
    const [billingType, setBillingType] = useState('Billed monthly');

    return (
        <TabContainer>
            {Object.values(plansData.plansInfo).map((plan) => (
                <React.Fragment key={plan.title}>
                    <TabOption
                        active={billingType === plan.title}
                        onClick={() => setBillingType(plan.title)}
                    >
                        {plan.title}
                    </TabOption>
                    {plan.title === 'Billed monthly' && <span>|</span>}
                </React.Fragment>
            ))}
            {Object.values(plansData.plansInfo).find((plan) => plan.discount.length > 0) && (
                <SaveTag>
                    {Object.values(plansData.plansInfo).find((plan) => plan.discount.length).discount}
                </SaveTag>
            )}
        </TabContainer>
    );
};

export default BillingTab;
