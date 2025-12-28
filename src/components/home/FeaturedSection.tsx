import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const featuredArticles: Article[] = [
  {
    id: 1,
    title: "10 Morning Rituals That Actually Boost Your Energy All Day",
    excerpt: "Simple, science-backed habits that transform your mornings without requiring you to wake up at 5 AM.",
    category: "Wellness",
    categoryColor: "bg-wellness text-white",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",
    featured: true,
  },
  {
    id: 2,
    title: "The Only 5 Skincare Products You Really Need",
    excerpt: "Cut through the clutter with this dermatologist-approved routine.",
    category: "Beauty",
    categoryColor: "bg-beauty text-white",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Quick & Easy Meal Prep Ideas for Busy Weeknights",
    excerpt: "Spend less time cooking and more time enjoying.",
    category: "Food",
    categoryColor: "bg-food text-white",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Small Space, Big Style: Apartment Decorating Tips",
    excerpt: "Transform any room with these designer-approved tricks.",
    category: "Home",
    categoryColor: "bg-home text-white",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=60",
  },
];

export const FeaturedSection = () => {
  const mainArticle = featuredArticles[0];
  const sideArticles = featuredArticles.slice(1);

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Featured Today
          </h2>
          <Button variant="ghost" className="text-primary hover:text-primary/80 hidden sm:inline-flex">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Main featured article */}
          <a
            href="#"
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-auto lg:row-span-2"
          >
            <img
              src={mainArticle.image}
              alt={mainArticle.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-background">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${mainArticle.categoryColor} w-fit mb-4`}>
                {mainArticle.category}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium mb-3 group-hover:text-primary transition-colors">
                {mainArticle.title}
              </h3>
              <p className="text-background/80 mb-4 max-w-lg hidden md:block">
                {mainArticle.excerpt}
              </p>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <Clock className="h-4 w-4" />
                <span>{mainArticle.readTime}</span>
              </div>
            </div>
          </a>

          {/* Side articles */}
          <div className="space-y-6">
            {sideArticles.map((article) => (
              <a
                key={article.id}
                href="#"
                className="group flex gap-4 md:gap-6 p-4 rounded-xl bg-card hover:bg-muted/50 transition-colors border border-border"
              >
                <div className="relative shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${article.categoryColor} w-fit mb-2`}>
                    {article.category}
                  </span>
                  <h3 className="font-serif text-base md:text-lg font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;