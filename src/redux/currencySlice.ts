import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    currencies: [{}],
    currentCurrency: {},
  },
  reducers: {
    updateCurrencies(state, action: PayloadAction<object[]>) {
      state.currencies = action.payload;
    },
    updateCurrentCurrency(state, action: PayloadAction<Object>) {
      state.currentCurrency = action.payload;
    },
  },
});

export const {
  updateCurrencies,
  updateCurrentCurrency,
} = currencySlice.actions;

export default currencySlice.reducer;
