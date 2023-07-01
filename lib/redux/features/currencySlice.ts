import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CurrencyState = {
  base: string;
  rates: Record<string, number>;
};

const initialState = {
  base: "USD",
  rates: {},
} as CurrencyState;

export const currency = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setRates: (state, action: PayloadAction<Record<string, number>>) => {
      state.rates = action.payload;
    },
    updateBase: (state, action: PayloadAction<string>) => {
      state.base = action.payload;
    },
  },
});

export const { setRates, updateBase } = currency.actions;
export default currency.reducer;
