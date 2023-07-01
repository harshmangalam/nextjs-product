"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setRates, updateBase } from "@/lib/redux/features/currencySlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { useEffect } from "react";

export const CurrencyConverter = async ({
  rates,
}: {
  rates: Record<string, number>;
}) => {
  const dispatch = useAppDispatch();

  const handleChangeCurrency = (value: string) => {
    dispatch(updateBase(value));
  };

  useEffect(() => {
    if (rates) {
      dispatch(setRates(rates));
    }
  }, [rates]);
  return (
    <Select
      defaultValue="USD"
      name="currency"
      onValueChange={handleChangeCurrency}
    >
      <SelectTrigger aria-label="Select" className="w-[180px]">
        <SelectValue placeholder="Currency" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Currency</SelectLabel>
          {Object.keys(rates).map((rate) => (
            <SelectItem key={rate} value={rate}>
              {rate}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
