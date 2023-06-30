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
import { set, updateBase } from "@/lib/redux/features/currencySlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import { useEffect } from "react";

export const CurrencyConverter = async ({
  base,
  rates,
}: {
  rates: Record<string, number>;
  base: string;
}) => {
  const dispatch = useAppDispatch();
  const handleChangeCurrency = (value: string) => {
    dispatch(updateBase(value));
  };

  useEffect(() => {
    if (base && rates) {
      dispatch(set({ base, rates }));
    }
  }, [base, rates]);
  return (
    <Select name="currency" onValueChange={handleChangeCurrency}>
      <SelectTrigger className="w-[180px]">
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
