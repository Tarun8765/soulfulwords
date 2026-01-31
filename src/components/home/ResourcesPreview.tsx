import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../../components/ui/button";

export function ResourcesPreview() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 sm:mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Curated for You</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Expand Your Mind
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Discover our handpicked collection of books, podcasts, and resources
            to fuel your personal growth journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <BookOpen className="h-5 w-5 text-primary" />
              <span>Recommended Books</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/50" />
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <BookOpen className="h-5 w-5 text-primary" />
              <span>Podcasts & Articles</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/50" />
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <BookOpen className="h-5 w-5 text-primary" />
              <span>Curated References</span>
            </div>
          </div>

          <Button asChild size="lg" className="group">
            <Link to="/resources">
              Explore Resources
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
