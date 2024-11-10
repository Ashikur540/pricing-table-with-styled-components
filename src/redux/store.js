import { configureStore } from '@reduxjs/toolkit';
import pricingReducer from '../features/pricing/pricingSlice';

export const store = configureStore({
  reducer: {
    pricing: pricingReducer,
  },
});