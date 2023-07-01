"use client";

import { useAppSelector } from "@/lib/redux/hooks";

export const ProductPrice = ({ price }: { price: number }) => {
  const base = useAppSelector((state) => state.currencyReducer.base);
  const rates = useAppSelector((state) => state.currencyReducer.rates);
  return (
    <h3 className="text-xl font-semibold tracking-tight mt-2">
      {base} {rates[base] ? (price * rates[base]).toFixed(2) : null}
    </h3>
  );
};
