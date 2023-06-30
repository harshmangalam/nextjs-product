import { Navbar } from "@/components/navbar";
import "../styles/global.css";
import { Inter } from "next/font/google";
import { Providers } from "@/lib/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "List of products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main className="container mx-auto py-8">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
