import { getFeaturedQuote } from "../../data/quotes";
import { QuoteCard } from "../../components/qoutes/QuoteCard";
import { Sparkles } from "lucide-react";

export function FeaturedQuote() {
  const quote = getFeaturedQuote();

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
          <h2 className="font-display text-base sm:text-lg font-medium text-center">
            Quote of the Day
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <QuoteCard quote={quote} variant="featured" />
        </div>
      </div>
    </section>
  );
}
