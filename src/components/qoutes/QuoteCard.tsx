import { Link } from "react-router-dom";
import { Quote } from "../../data/quotes";
import { CategoryBadge } from "./CategoryBadge";
import { Copy, Share2 } from "lucide-react";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";
import { cn } from "../../lib/utils";

interface QuoteCardProps {
  quote: Quote;
  variant?: "default" | "featured" | "compact";
}

export function QuoteCard({ quote, variant = "default" }: QuoteCardProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`"${quote.text}" — ${quote.author}`);
    toast.success("Quote copied to clipboard!");
  };

  const shareQuote = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Soulful Words Quote",
          text: `"${quote.text}" — ${quote.author}`,
          url: window.location.origin + `/quote/${quote.id}`,
        });
      } catch (err) {
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  if (variant === "featured") {
    return (
      <div className="relative bg-card rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 shadow-soft border border-border/50 overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-xl sm:rounded-l-2xl" />
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8">
          <CategoryBadge category={quote.category} />
        </div>
        <div className="max-w-3xl mt-8 sm:mt-0">
          <blockquote className="quote-text text-foreground mb-4 sm:mb-6 text-balance text-lg sm:text-xl md:text-2xl font-display italic leading-relaxed">
            "{quote.text}"
          </blockquote>
          <p className="quote-author text-sm sm:text-base">— {quote.author}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 mt-6 sm:mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={copyToClipboard}
            className="text-xs sm:text-sm"
          >
            <Copy className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Copy
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={shareQuote}
            className="text-xs sm:text-sm"
          >
            <Share2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Share
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`/quote/${quote.id}`}
      className={cn(
        "group block bg-card rounded-xl p-4 sm:p-6 shadow-soft border border-border/50",
        "hover:shadow-elevated hover:border-primary/20 transition-all duration-300",
        variant === "compact" && "p-3 sm:p-4",
      )}
    >
      <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
        <CategoryBadge category={quote.category} />
      </div>
      <blockquote
        className={cn(
          "font-display italic text-foreground mb-3 sm:mb-4 leading-relaxed group-hover:text-primary transition-colors",
          variant === "compact" ? "text-base sm:text-lg" : "text-lg sm:text-xl",
        )}
      >
        "{quote.text}"
      </blockquote>
      <p className="quote-author text-xs sm:text-sm">— {quote.author}</p>
    </Link>
  );
}
