import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export const ProductCard = (props: ProductCardProps) => {
  const { category, description, id, image, price, rating, title } = props;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={image} width={500} height={500} alt={title} />
        <div className="mt-3">{price}</div>
        <div className="flex items-center gap-2"></div>
      </CardContent>
    </Card>
  );
};
