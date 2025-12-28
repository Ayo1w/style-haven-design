import { Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewsletterCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl" />
      </div>

      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="h-7 w-7" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Never Miss a Tip
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Join thousands of women getting weekly inspiration, product picks, and lifestyle tips delivered to their inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="h-12 bg-background border-border focus-visible:ring-primary"
            />
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-6">
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </form>

          <p className="text-muted-foreground text-sm mt-4">
            Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;