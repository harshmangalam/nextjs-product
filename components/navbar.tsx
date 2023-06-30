import { CurrencyConverter } from "./currency-converter";

export const Navbar = () => {
  return (
    <header className="py-4 sticky top-0 z-40 backdrop-blur bg-background/60">
      <nav className="container mx-auto flex justify-between">
        <h1>RHD JAPAN</h1>
        <CurrencyConverter />
      </nav>
    </header>
  );
};
