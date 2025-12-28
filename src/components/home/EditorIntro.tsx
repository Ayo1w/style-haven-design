import { Heart } from "lucide-react";

export const EditorIntro = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
            <Heart className="h-6 w-6" />
          </div>
          
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 leading-relaxed">
            Welcome to <span className="text-primary">Maven Daily Living</span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Where modern women come for smart tips, trusted recommendations, and feel-good inspiration that actually fits real life. Whether you're leveling up your wellness, refreshing your home, rebooting your fitness routine, or simply looking for something beautiful — we've got you covered, every single day.
          </p>

          <div className="mt-10 flex items-center justify-center gap-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Daily Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>Expert Picks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Real Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorIntro;