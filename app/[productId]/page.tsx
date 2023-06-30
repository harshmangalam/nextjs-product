import { StarIcon } from "@/components/icons/star";
import { UsersIcon } from "@/components/icons/users";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/lib/types/product";
import Image from "next/image";

async function getProduct(id: string) {
  try {
    console.log(process.env);
    const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!resp.ok) {
      return null;
    }
    return resp.json() as Promise<Product>;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getProduct(params.productId);

  if (!product) {
    return <div className="text-center">Product not found</div>;
  }
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={product.image}
            width={500}
            height={500}
            alt={product.title}
            className="aspect-square"
          />

          <section className="flex flex-col gap-y-4">
            <h2 className="text-xl">{product.title}</h2>
            <h4 className="text-xl font-semibold tracking-tight">
              ${product.price}
            </h4>
            <div className="flex items-center gap-2">
              <Badge className="h-8" variant={"destructive"}>
                {product.category}
              </Badge>
              <Badge variant={"secondary"} className="flex items-center h-8">
                <span className="mr-1 text-yellow-500">
                  <StarIcon size={18} />
                </span>
                {product.rating.rate}
              </Badge>

              <Badge variant={"outline"} className="flex items-center h-8">
                <span className="mr-1 text-blue-500">
                  <UsersIcon size={18} />
                </span>
                {product.rating.count}
              </Badge>
            </div>
            <p className="leading-7 [&:not(:first-child)]:mt-6 tracking-wider">
              {product.description}
            </p>
          </section>
        </div>
      </CardContent>
    </Card>
  );
}
