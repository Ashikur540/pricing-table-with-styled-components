//  here we format the json data to be used in the BillingTab component

import { createSelector } from '@reduxjs/toolkit';

export const selectUniquePlans = createSelector(
    state => state.pricing.plans,
    state => state.pricing.features,
    state => state.pricing.selectedVisitors,
    state => state.pricing.selectedBilling,
    (plans, features, selectedVisitors, selectedBilling) => {
        const isMonthly = selectedBilling === "Billed monthly";
        // find unique plan names
        const uniquePlanNames = [...new Set(plans.map(plan => plan.name))];
        // TODO: find duplicate plans to show a single plan with a dropdown with (visitors variants) if any plan has multiple variants
        const uniquePlans = uniquePlanNames.map(planName => {
            const plansOfType = plans.filter(plan => plan.name === planName);
            return {
                ...plansOfType[0],
                // TODO: set the price based on the selected billing and visitors counts for that plan if plan has multiple variants
                price: isMonthly ?
                    plansOfType[0].details["1_year"].price : plansOfType[0].details["2_year"].price,
                // we are including monthly bill when yearly selected to show the  price crossed out
                ...(!isMonthly && !plansOfType[0].name === "Free" && { salePrice: plansOfType[0].details["1_year"].price })
            };
        }).filter(Boolean);
        console.log("✨ ~ file: pricingSelector.js:11 ~ uniquePlans ~ uniquePlans:", uniquePlans)

        //  add relative features to each plan
        return uniquePlans.map(plan => ({
            plan,
            features: plan.name === 'Free'
                ? features.filter(f => f.is_pro === "0")
                : features.filter(f => f.is_pro !== "0")
        }));
    }
);

