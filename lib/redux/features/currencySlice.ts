import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CurrencyState = {
  base: string;
  rates: Record<string, number>;
};

const initialState = {
  base: "EUR",
  rates: {},
} as CurrencyState;

export const currency = createSlice({
  name: "currency",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<CurrencyState>) => {
      (state.base = action.payload.base), (state.rates = action.payload.rates);
    },
    updateBase: (state, action: PayloadAction<string>) => {
      state.base = action.payload;
    },
  },
});

export const { set, updateBase } = currency.actions;
