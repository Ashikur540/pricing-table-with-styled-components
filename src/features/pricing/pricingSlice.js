import { createSlice } from '@reduxjs/toolkit';

import pricingData from "../../assets/data.json";


const initialState = {
    plans: pricingData.plans,
    features: pricingData.features,
    plansInfo: pricingData.plansInfo,
    selectedBilling: 'Billed monthly',
    selectedPlanVariants: {} // value from dropdown for plans with multiple variants
}

export const pricingSlice = createSlice({
    name: 'pricing',
    initialState,
    reducers: {
        setBilling: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            state.selectedBilling = action.payload;
        },
        setPlanVariant: (state, action) => {
            const { planName, visitorCount } = action.payload;
            state.selectedPlanVariants[planName] = visitorCount;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setBilling, setPlanVariant } = pricingSlice.actions

export default pricingSlice.reducer