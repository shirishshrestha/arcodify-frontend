"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu, ShoppingCart, User, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={"/"}
            className="flex-shrink-0 flex items-center space-x-2"
          >
            <Image
              src="/arcodify-icon.webp"
              alt="arcodify"
              height={40}
              width={40}
              className="rounded-lg"
            />
            <h1 className="text-2xl font-bold text-primary">Arcodify</h1>
          </Link>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/products"
              className="text-foreground hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Deals
            </Link>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
          </nav>

          {/* Cart and Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>

            <Link href={"/login"}>
              <User className="h-5 w-5 stroke-1" />
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-4">
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/products"
                  className="text-foreground hover:text-primary transition-colors py-2"
                >
                  Products
                </Link>
                <a
                  href="#"
                  className="text-foreground hover:text-primary transition-colors py-2"
                >
                  Deals
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-primary transition-colors py-2"
                >
                  About
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
