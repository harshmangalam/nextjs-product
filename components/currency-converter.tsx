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
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Currency" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Currency</SelectLabel>
          <SelectItem value="apple">USD</SelectItem>
          <SelectItem value="banana">EUR</SelectItem>
          <SelectItem value="blueberry">GBP</SelectItem>
          <SelectItem value="grapes">JPY</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
