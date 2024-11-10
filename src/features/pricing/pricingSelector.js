//  here we format the json data to be used in the BillingTab component

import { createSelector } from '@reduxjs/toolkit';


export const selectPlanVariants = createSelector(
  state => state.pricing.plans,
  (plans) => {
    // Group plans by name with their visitors count to match dropdown variants later
    return plans.reduce((acc, plan) => {
      if (!acc[plan.name]) {
        acc[plan.name] = [];
      }
      const visitorCount = plan.title.match(/\d+(?:,\d+)*/)[0];
      // console.log("✨ ~ file: pricingSelector.js:15 ~ returnplans.reduce ~ visitorCount:", visitorCount)
      acc[plan.name].push({
        visitorCount,
        title: plan.title,
        plan
      });
      return acc;
    }, {});
  }
);


export const selectUniquePlans = createSelector(
  state => state.pricing.plans,
  state => state.pricing.features,
  state => state.pricing.selectedBilling,
  state => state.pricing.selectedPlanVariants,
  selectPlanVariants,
  (plans, features, selectedBilling, selectedPlanVariants, planVariants) => {
   
    const billingKey = selectedBilling === "Billed monthly" ? "1_year" : "2_year";
    
    // unique plan names
    const uniquePlanNames = [...(new Set(plans.map(plan => plan.name)))];
    
    return uniquePlanNames.map(planName => {
      const variants = planVariants[planName];
      const hasVariants = variants.length > 1;
      
      // Get the correct plan based on selected variant or default to first
      let selectedPlan;
      if (hasVariants) {
        const selectedVariant = selectedPlanVariants[planName];
        selectedPlan = variants.find(v => v.visitorCount === selectedVariant)?.plan || variants[0].plan;
      } else {
        selectedPlan = variants[0].plan;
      }
      console.log("✨ ~ file: pricingSelector.js:48 ~ selectedPlan:", selectedPlan)
      
      // format data according to my need 
      return {
        plan: {
          ...selectedPlan,
          price: selectedPlan.details[billingKey].price,
          pricePostfix: selectedPlan.details[billingKey].price_postfix,
          hasVariants,
          variants: hasVariants ? variants : null,
          // add salePrice to show line through text when billing annually
          ...(billingKey === "2_year" && planName !== "Free" ? { salePrice: selectedPlan.details["1_year"].price } : {})
        },
        //  filter features out from free plan
        features: planName === 'Free'
          ? features.filter(feature => feature.is_pro === "0")
          : features.filter(feature => feature.is_pro !== "0")
      };
    });
  }
);

