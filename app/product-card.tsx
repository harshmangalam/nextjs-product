import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export const ProductCard = (props: ProductCardProps) => {
  const { category, id, image, price, rating, title } = props;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image src={image} width={500} height={500} alt={title} />
        <div className="mt-3">{price}</div>
        <div className="flex items-center gap-2">
          <Badge>{category}</Badge>
          <Badge>{rating.rate}</Badge>
          <Badge>{rating.count}</Badge>
        </div>
      </CardContent>
    </Card>
  );
};
