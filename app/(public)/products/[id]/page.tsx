"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useGetSingleProduct } from "@/features/products/hooks";

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;

  const { data: product, isLoading, error } = useGetSingleProduct(productId);

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-destructive mb-4">
              Product Not Found
            </h1>
            <p className="text-muted-foreground mb-4">
              The product you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/products">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <Link
          href="/products"
          className="inline-flex items-center text-primary hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        {isLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="aspect-square bg-muted rounded-lg animate-pulse"></div>
            <div className="space-y-4">
              <div className="h-8 bg-muted rounded animate-pulse"></div>
              <div className="h-4 bg-muted rounded w-1/3 animate-pulse"></div>
              <div className="h-6 bg-muted rounded w-1/4 animate-pulse"></div>
              <div className="h-20 bg-muted rounded animate-pulse"></div>
              <div className="h-12 bg-muted rounded animate-pulse"></div>
            </div>
          </div>
        ) : product ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="aspect-square relative bg-secondary/50 rounded-lg overflow-hidden">
                  <Image
                    width={400}
                    height={400}
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-2 bg-accent text-accent-foreground">
                  {product.category}
                </Badge>
                <h1 className="text-3xl font-bold text-foreground mb-4 text-balance">
                  {product.title}
                </h1>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 fill-accent text-accent" />
                    <span className="ml-1 font-medium">
                      {product.rating.rate}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      ({product.rating.count} reviews)
                    </span>
                  </div>
                </div>

                <div className="text-4xl font-bold text-primary mb-6">
                  ${product.price}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Description</h2>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {product.description}
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-transparent"
                >
                  Add to Wishlist
                </Button>
              </div>

              <Card className="bg-secondary/50 border-border">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Product Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category:</span>
                      <span className="capitalize">{product.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rating:</span>
                      <span>{product.rating.rate}/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Reviews:</span>
                      <span>{product.rating.count}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}
