import { Button } from "@/components/ui/button";
import { FeaturedProducts } from "@/features/products";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="relative bg-gradient-to-r from-secondary to-card py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                Discover Amazing Products
                <span className="text-primary block">At Unbeatable Prices</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Shop from our curated collection of high-quality products. From
                electronics to fashion, find everything you need in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={"/products"}>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Shop Now
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  View Categories
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
        </section>

        <FeaturedProducts />
      </main>
    </div>
  );
}
