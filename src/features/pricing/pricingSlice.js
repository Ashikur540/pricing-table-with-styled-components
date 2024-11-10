import { createSlice } from '@reduxjs/toolkit';

import pricingData from "../../../public/data.json";



export const dropdownOptions = [
    "Up to 150,000 visitors/month",
    "Up to 300,000 visitors/month",
    "Up to 500,000 visitors/month",
    "Up to 1,000,000 visitors/month",
    "Up to 2,000,000 visitors/month",
  ];
  


const initialState = {
    plans: pricingData.plans,
    features: pricingData.features,
    plansInfo: pricingData.plansInfo,
    selectedBilling: 'Billed monthly',
    selectedGrowthVisitors: dropdownOptions[0]
}

export const pricingSlice = createSlice({
    name: 'pricing',
    initialState,
    reducers: {
        setBilling: (state,action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            state.selectedBilling = action.payload;
        },
        setVisitorsForGrowth: (state, action) => {
            state.selectedGrowthVisitors = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setBilling, setVisitorsForGrowth } = pricingSlice.actions

export default pricingSlice.reducer