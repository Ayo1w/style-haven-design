import { Sparkles, Dumbbell, Palette, Home, Cpu, UtensilsCrossed, PawPrint, ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Wellness",
    description: "Science-backed habits, self-care, mindset, and everyday wellness that fits real life.",
    icon: Sparkles,
    color: "bg-wellness/10 text-wellness hover:bg-wellness/20",
    href: "#wellness",
  },
  {
    name: "Fitness & Weight Loss",
    description: "Practical workouts, routines, and motivation without extremes.",
    icon: Dumbbell,
    color: "bg-fitness/10 text-fitness hover:bg-fitness/20",
    href: "#fitness",
  },
  {
    name: "Beauty",
    description: "Skincare, makeup, hair, and glow-up essentials with honest product breakdowns.",
    icon: Palette,
    color: "bg-beauty/10 text-beauty hover:bg-beauty/20",
    href: "#beauty",
  },
  {
    name: "Home & Décor",
    description: "Cozy, stylish, functional spaces with simple décor and organization ideas.",
    icon: Home,
    color: "bg-home/10 text-home hover:bg-home/20",
    href: "#home",
  },
  {
    name: "Gadgets & Tech",
    description: "Smart, everyday tech explained clearly and simply (no tech-speak).",
    icon: Cpu,
    color: "bg-tech/10 text-tech hover:bg-tech/20",
    href: "#tech",
  },
  {
    name: "Food & Recipes",
    description: "Easy, delicious meals and kitchen tips for busy women.",
    icon: UtensilsCrossed,
    color: "bg-food/10 text-food hover:bg-food/20",
    href: "#food",
  },
  {
    name: "Pets",
    description: "Care tips, wellness, and trusted picks for dogs and cats.",
    icon: PawPrint,
    color: "bg-pets/10 text-pets hover:bg-pets/20",
    href: "#pets",
  },
];

export const CategoryGrid = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Explore by Category
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Dive into the topics that matter most to you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <a
                key={category.name}
                href={category.href}
                className={`group relative p-6 rounded-xl ${category.color} transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-lg font-medium mb-2 flex items-center gap-2">
                      {category.name}
                      <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-sm opacity-80 leading-relaxed line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;