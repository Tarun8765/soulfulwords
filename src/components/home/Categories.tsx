import { Link } from "react-router-dom";
import { categories } from "../../data/quotes";
import {
  ArrowRight,
  Flame,
  Heart,
  Compass,
  Leaf,
  Trophy,
  Lightbulb,
} from "lucide-react";
import { cn } from "../../lib/utils";

const categoryIcons = {
  motivation: Flame,
  love: Heart,
  life: Compass,
  healing: Leaf,
  success: Trophy,
  wisdom: Lightbulb,
};

export function Categories() {
  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium mb-3 sm:mb-4">
            Explore by Theme
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
            Find the words that resonate with where you are in your journey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {categories.map((category) => {
            const Icon = categoryIcons[category.id];
            return (
              <Link
                key={category.id}
                to={`/quotes?category=${category.id}`}
                className={cn(
                  "group relative p-4 sm:p-6 md:p-8 rounded-xl border border-border/50 bg-card",
                  "hover:shadow-elevated hover:border-primary/20 transition-all duration-300",
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4",
                    `category-${category.id}`,
                  )}
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-medium mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                  {category.label}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-4 line-clamp-2">
                  {category.description}
                </p>
                <span className="inline-flex items-center text-xs sm:text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
