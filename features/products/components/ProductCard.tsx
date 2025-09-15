import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import { Product } from "../types/Products";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300 group">
      <CardContent className="p-4">
        <Link href={`/products/${product.id}`}>
          <div className="aspect-square relative mb-4 overflow-hidden rounded-lg bg-secondary/50">
            <Image
              width={300}
              height={300}
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
              {product.category}
            </Badge>
          </div>
        </Link>

        <div className="space-y-3">
          <Link href={`/products/${product.id}`}>
            <h3 className="font-semibold text-card-foreground line-clamp-2 text-sm hover:text-primary transition-colors">
              {product.title}
            </h3>
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="text-sm text-muted-foreground ml-1">
                {product.rating.rate} ({product.rating.count})
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              ${product.price}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 space-x-2">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
            <Link href={`/products/${product.id}`} className="w-full">
              <Button className="w-full bg-gray-200 hover:bg-gray-300/90 text-black border border-gray-500">
                More Info
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
