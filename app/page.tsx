import "../styles/global.css";
import { ProductCard } from "./product-card";

async function getProducts() {
  const resp = await fetch("https://fakestoreapi.com/products?limit=10");
  if (!resp.ok) {
    throw new Error("Failed to fetch products");
  }

  return resp.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </div>
  );
}
