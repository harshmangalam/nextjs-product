import Link from "next/link";
import { CurrencyConverter } from "./currency-converter";

async function getCurrency() {
  try {
    const resp = await fetch(
      `https://openexchangerates.org/api/latest.json?app_id=af417d0cf35c488cb259242a3040c1ed&base=USD&symbols=EUR,GBP,JPY,USD`
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
