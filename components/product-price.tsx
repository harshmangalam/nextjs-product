"use client";

import { useAppSelector } from "@/lib/redux/hooks";

export const ProductPrice = ({ price }: { price: number }) => {
  const base = useAppSelector((state) => state.currencyReducer.base);
  const rates = useAppSelector((state) => state.currencyReducer.rates);
  return (
    <h4 className="text-xl font-semibold tracking-tight mt-2">
      {base} {(price * rates[base]).toFixed(2)}
    </h4>
  );
};
