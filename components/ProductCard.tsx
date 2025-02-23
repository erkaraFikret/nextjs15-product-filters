import Image from "next/image";
import { Product } from "./shared/types";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./ui/badge";

interface productCardProps {
  product: Product;
}

const ProductCard = ({ product }: productCardProps) => {
  const imageUrl = product.images[0].startsWith("http")
    ? product.images[0]
    : `https://i.imgur.com/${product.images[0]}`;

  return (
    <Card key={product.id} className="flex flex-col justify-between ">
      <CardHeader className="p-0 relative">
        <Badge className="absolute top-3 left-3">{product.category.name}</Badge>
        <Image
          src={imageUrl}
          alt={product.title}
          width={300}
          height={300}
          className="w-full object-cover rounded-t-lg"
        />
        <div className="p-6">
          <CardTitle>{product.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p>${product.price}</p>
        <CardDescription>
          {product.description.slice(0, 100)}...
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>
          <ShoppingCartIcon className="size-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
