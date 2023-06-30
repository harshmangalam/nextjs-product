import Link from "next/link";
import { CurrencyConverter } from "./currency-converter";

async function getCurrency() {
  try {
    const resp = await fetch(
      `http://api.exchangeratesapi.io/v1/latest?access_key=6205c2a2b5d7fa71971e9a8de056a73e&format=1&base=EUR&symbols=USD,GBP,JPY`
    );
    if (!resp.ok) {
      throw new Error("Error while fetching currency");
    }

    return resp.json();
  } catch (error) {
    console.log(error);
  }
}
export const Navbar = async () => {
  const currency = await getCurrency();
  console.log(currency);
  return (
    <header className="py-4 sticky top-0 z-40 backdrop-blur bg-background/90 border-b">
      <nav className="container mx-auto flex justify-between">
        <Link href={"/"}>
          <h1 className="text-xl font-medium">RHD JAPAN</h1>
        </Link>
        <CurrencyConverter base={currency.base} rates={currency.rates} />
      </nav>
    </header>
  );
};
