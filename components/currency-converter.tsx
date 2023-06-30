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

export const CurrencyConverter = () => {
  async function handleCurrency(currency: string) {
    // try {
    //   const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.NEXT_EXCHANGERATES_API_KEY}&base=USD&symbols=EUR,GBP,JPY`;
    //   const resp = await fetch(url);
    //   if (!resp.ok) {
    //     throw new Error("Currency converter api request failed");
    //   }
    //   const data = await resp.json();
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
  }
  return (
    <Select name="currency" onValueChange={handleCurrency}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Currency" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Currency</SelectLabel>
          <SelectItem value="USD">USD</SelectItem>
          <SelectItem value="EUR">EUR</SelectItem>
          <SelectItem value="GBP">GBP</SelectItem>
          <SelectItem value="JPY">JPY</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
