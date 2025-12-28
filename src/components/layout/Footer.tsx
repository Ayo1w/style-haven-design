import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = [
  { name: "Wellness", href: "#wellness" },
  { name: "Fitness & Weight Loss", href: "#fitness" },
  { name: "Beauty", href: "#beauty" },
  { name: "Home & Décor", href: "#home" },
  { name: "Gadgets & Tech", href: "#tech" },
  { name: "Food & Recipes", href: "#food" },
  { name: "Pets", href: "#pets" },
];

const quickLinks = [
  { name: "About Us", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Advertise", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter section */}
      <div className="border-b border-background/10">
        <div className="container py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl md:text-3xl mb-3">
              Stay Inspired Daily
            </h3>
            <p className="text-background/70 mb-6">
              Get our best tips, recommendations, and inspiration delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus-visible:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-semibold">
                Maven<span className="text-primary">.</span>
              </span>
            </a>
            <p className="text-background/70 text-sm mb-6">
              Smart living for every woman. Your daily destination for wellness, beauty, and inspiration.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Categories column */}
          <div>
            <h4 className="font-serif text-lg mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links column */}
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-serif text-lg mb-4">Get In Touch</h4>
            <p className="text-background/70 text-sm mb-4">
              Have questions or feedback? We'd love to hear from you.
            </p>
            <Button variant="outline" className="border-background/20 text-background hover:bg-background/10 hover:text-background">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>© 2024 Maven Daily Living. All rights reserved.</p>
          <p>Made with love for modern women everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;