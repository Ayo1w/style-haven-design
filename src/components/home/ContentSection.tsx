import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
}

interface ContentSectionProps {
  id: string;
  title: string;
  categoryColor: string;
  articles: Article[];
}

export const ContentSection = ({ id, title, categoryColor, articles }: ContentSectionProps) => {
  return (
    <section id={id} className="py-16 md:py-20 bg-background border-t border-border">
      <div className="container">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <div className={`w-1 h-8 rounded-full ${categoryColor}`} />
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">
              {title}
            </h2>
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary/80 hidden sm:inline-flex">
            See All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <a
              key={article.id}
              href="#"
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                <span>{article.readTime}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;