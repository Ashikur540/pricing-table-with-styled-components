//  here we format the json data to be used in the BillingTab component

import { createSelector } from '@reduxjs/toolkit';

export const selectUniquePlans = createSelector(
    state => state.pricing.plans,
    state => state.pricing.features,
    state => state.pricing.selectedGrowthVisitors,
    (plans, features, selectedGrowthVisitors) => {
        const uniquePlans = ['Free', 'Basic', 'Pro', 'Growth'].map(planName => {
            const plansOfType = plans.filter(plan => plan.name === planName);
            console.log("✨ ~ file: pricingSelector.js:12 ~ uniquePlans ~ plansOfType:", plansOfType)

            if (planName === 'Growth') {
                return plansOfType.find(plan => plan.title.includes(selectedGrowthVisitors)) || plansOfType[0];
            }

            return plansOfType[0];
        }).filter(Boolean);
        console.log("✨ ~ file: pricingSelector.js:11 ~ uniquePlans ~ uniquePlans:", uniquePlans)

        return uniquePlans.map(plan => ({
            plan,
            features: plan.name === 'Free'
                ? features.filter(f => f.is_pro === "0")
                : features.filter(f => f.is_pro !== "0")
        }));
    }
);
