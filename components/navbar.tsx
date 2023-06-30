import Link from "next/link";
import { CurrencyConverter } from "./currency-converter";

export const Navbar = () => {
  return (
    <header className="py-4 sticky top-0 z-40 backdrop-blur bg-background/90 border-b">
      <nav className="container mx-auto flex justify-between">
        <Link href={"/"}>
          <h1 className="text-xl font-medium">RHD JAPAN</h1>
        </Link>
        <CurrencyConverter />
      </nav>
    </header>
  );
};
