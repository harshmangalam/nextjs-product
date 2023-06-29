import { StarIcon } from "@/components/icons/star";
import { UsersIcon } from "@/components/icons/users";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ProductDetails() {
  const product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

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