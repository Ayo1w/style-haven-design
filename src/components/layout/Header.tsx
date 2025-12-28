import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Wellness", href: "#wellness" },
  { name: "Fitness", href: "#fitness" },
  { name: "Beauty", href: "#beauty" },
  { name: "Home & Décor", href: "#home" },
  { name: "Tech", href: "#tech" },
  { name: "Food", href: "#food" },
  { name: "Pets", href: "#pets" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      {/* Top bar */}
      <div className="container flex h-16 items-center justify-between">
        <button
          className="lg:hidden p-2 -ml-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <a href="/" className="flex items-center mx-auto lg:mx-0">
          <span className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            Maven<span className="text-primary">.</span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Search className="h-5 w-5" />
          </Button>
          <Button className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
            Subscribe
          </Button>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="hidden lg:block bg-primary text-primary-foreground">
        <div className="container flex items-center justify-center h-12 gap-8">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="text-sm font-medium hover:text-primary-foreground/80 transition-colors"
            >
              {category.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg animate-fade-in">
          <nav className="container py-4">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="block py-3 text-foreground hover:text-primary transition-colors border-b border-border last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;