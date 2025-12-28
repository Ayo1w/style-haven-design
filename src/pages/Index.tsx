import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import EditorIntro from "@/components/home/EditorIntro";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedSection from "@/components/home/FeaturedSection";
import ContentSection from "@/components/home/ContentSection";
import NewsletterCTA from "@/components/home/NewsletterCTA";

// Sample article data for each section
const wellnessArticles = [
  {
    id: 1,
    title: "The 5-Minute Morning Meditation That Changes Everything",
    excerpt: "Start your day with clarity and calm using this simple practice.",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Sleep Better Tonight: 8 Expert-Approved Tips",
    excerpt: "Transform your sleep quality with these science-backed strategies.",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Stress Less: Natural Remedies That Actually Work",
    excerpt: "Discover calming techniques that fit into your busy lifestyle.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Building Healthy Habits That Stick",
    excerpt: "The psychology behind lasting change and how to make it work for you.",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=60",
  },
];

const fitnessArticles = [
  {
    id: 1,
    title: "15-Minute Workouts That Actually Deliver Results",
    excerpt: "No gym required. These quick routines fit any schedule.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Walking for Weight Loss: The Underrated Exercise",
    excerpt: "How a simple daily walk can transform your fitness journey.",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Strength Training for Beginners: Where to Start",
    excerpt: "Build confidence and muscle with this friendly guide.",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Post-Workout Recovery: What Your Body Really Needs",
    excerpt: "Maximize your results with proper recovery techniques.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&auto=format&fit=crop&q=60",
  },
];

const beautyArticles = [
  {
    id: 1,
    title: "The Glass Skin Routine: A Complete Guide",
    excerpt: "Achieve that coveted dewy, luminous complexion.",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Best Drugstore Dupes for High-End Products",
    excerpt: "Get luxury results without the luxury price tag.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Hair Care Mistakes You're Probably Making",
    excerpt: "Simple fixes for healthier, shinier locks.",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "5-Minute Makeup for Busy Mornings",
    excerpt: "Look polished in minutes with these quick tips.",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&auto=format&fit=crop&q=60",
  },
];

const homeArticles = [
  {
    id: 1,
    title: "Cozy Living Room Ideas for Any Budget",
    excerpt: "Transform your space into a warm, inviting retreat.",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "The Art of Decluttering: Room by Room Guide",
    excerpt: "Create calm spaces with intentional organization.",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Indoor Plants That Thrive on Neglect",
    excerpt: "Green your space even if you forget to water.",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Small Kitchen Organization Hacks",
    excerpt: "Maximize every inch of your cooking space.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&auto=format&fit=crop&q=60",
  },
];

const techArticles = [
  {
    id: 1,
    title: "Smart Home Gadgets Worth the Investment",
    excerpt: "Tech that actually makes daily life easier.",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Best Apps for Productivity and Wellness",
    excerpt: "Digital tools to streamline your routine.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Tech Gift Guide: Practical Picks She'll Love",
    excerpt: "Thoughtful gadgets for every budget.",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Protecting Your Privacy Online: Simple Steps",
    excerpt: "Stay safe without becoming a tech expert.",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&auto=format&fit=crop&q=60",
  },
];

const foodArticles = [
  {
    id: 1,
    title: "30-Minute Dinners for Weeknight Wins",
    excerpt: "Delicious meals ready before you can say 'takeout.'",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Meal Prep Sunday: A Beginner's Guide",
    excerpt: "Set yourself up for a week of easy eating.",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Healthy Snacks That Actually Satisfy",
    excerpt: "Beat the 3pm slump with these tasty options.",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Kitchen Tools That Save Time and Effort",
    excerpt: "Essential gadgets for efficient cooking.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&auto=format&fit=crop&q=60",
  },
];

const petsArticles = [
  {
    id: 1,
    title: "Keeping Your Dog Happy and Healthy",
    excerpt: "Essential care tips every pet parent should know.",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Cat Care 101: Beyond the Basics",
    excerpt: "Understanding what your feline friend really needs.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Best Pet Products We've Tested This Year",
    excerpt: "Honest reviews of top-rated pet essentials.",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Pet Wellness: Signs Your Pet Needs a Vet",
    excerpt: "Know when it's time for professional care.",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&auto=format&fit=crop&q=60",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <EditorIntro />
        <FeaturedSection />
        <CategoryGrid />
        
        <ContentSection
          id="wellness"
          title="Wellness Essentials"
          categoryColor="bg-wellness"
          articles={wellnessArticles}
        />
        
        <ContentSection
          id="fitness"
          title="Fitness & Weight Loss"
          categoryColor="bg-fitness"
          articles={fitnessArticles}
        />
        
        <ContentSection
          id="beauty"
          title="Beauty Breakdowns"
          categoryColor="bg-beauty"
          articles={beautyArticles}
        />
        
        <NewsletterCTA />
        
        <ContentSection
          id="home"
          title="Home & Décor Inspiration"
          categoryColor="bg-home"
          articles={homeArticles}
        />
        
        <ContentSection
          id="tech"
          title="Tech That Makes Life Easier"
          categoryColor="bg-tech"
          articles={techArticles}
        />
        
        <ContentSection
          id="food"
          title="Recipes & Kitchen Inspiration"
          categoryColor="bg-food"
          articles={foodArticles}
        />
        
        <ContentSection
          id="pets"
          title="For the Pets We Love"
          categoryColor="bg-pets"
          articles={petsArticles}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Index;