import { StarIcon } from "@/components/icons/star";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
  };
}
export const ProductCard = (props: ProductCardProps) => {
  const { category, id, image, price, rating, title } = props;
  return (
    <Link href={`/${id}`}>
      <Card>
        <CardContent className="pt-6">
          <Image
            src={image}
            width={300}
            height={300}
            alt={title}
            className="w-full aspect-square"
          />
          <h2 className="text-xl mt-4 line-clamp-1">{title}</h2>
          <h4 className="text-xl font-semibold tracking-tight mt-2">
            ${price}
          </h4>
        </CardContent>
        <CardFooter>
          <div className="flex items-center gap-2">
            <Badge variant={"destructive"}>{category}</Badge>
            <Badge variant={"secondary"} className="flex items-center">
              <span className="mr-1">
                <StarIcon size={16} />
              </span>
              {rating.rate}
            </Badge>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
