import { useParams, Link } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { getQuoteById, quotes } from "../data/quotes";
import { CategoryBadge } from "../components/qoutes/CategoryBadge";
import { QuoteCard } from "../components/qoutes/QuoteCard";
import { Button } from "../components/ui/button";
import { Copy, Share2, ArrowLeft, Twitter } from "lucide-react";
import { toast } from "sonner";

const QuoteDetail = () => {
  const { id } = useParams();
  const quote = getQuoteById(id || "");

  if (!quote) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-3xl mb-4">Quote not found</h1>
          <Button asChild>
            <Link to="/quotes">Back to Quotes</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`"${quote.text}" — ${quote.author}`);
    toast.success("Quote copied to clipboard!");
  };

  const shareToTwitter = () => {
    const text = encodeURIComponent(`"${quote.text}" — ${quote.author}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
  };

  const shareQuote = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Soulful Words Quote",
          text: `"${quote.text}" — ${quote.author}`,
          url: window.location.href,
        });
      } catch {
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  // Get related quotes (same category, excluding current)
  const relatedQuotes = quotes
    .filter((q) => q.category === quote.category && q.id !== quote.id)
    .slice(0, 3);

  return (
    <Layout>
      <div className="container py-8 sm:py-12 md:py-20">
        {/* Back Button */}
        <Link
          to="/quotes"
          className="inline-flex items-center text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors mb-6 sm:mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Quotes
        </Link>

        {/* Main Quote */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 px-2">
          <CategoryBadge category={quote.category} size="md" />

          <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic leading-relaxed mt-6 sm:mt-8 mb-6 sm:mb-8 text-balance">
            "{quote.text}"
          </blockquote>

          <p className="quote-author text-base sm:text-lg">— {quote.author}</p>

          {/* Share Actions */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
            <Button
              variant="outline"
              size="sm"
              onClick={copyToClipboard}
              className="text-xs sm:text-sm"
            >
              <Copy className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
              Copy
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={shareToTwitter}
              className="text-xs sm:text-sm"
            >
              <Twitter className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
              Tweet
            </Button>
            <Button
              size="sm"
              onClick={shareQuote}
              className="text-xs sm:text-sm"
            >
              <Share2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Related Quotes */}
        {relatedQuotes.length > 0 && (
          <div className="border-t border-border pt-10 sm:pt-16">
            <h2 className="font-display text-xl sm:text-2xl font-medium text-center mb-6 sm:mb-8">
              More {quote.category} quotes
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {relatedQuotes.map((q) => (
                <QuoteCard key={q.id} quote={q} variant="compact" />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default QuoteDetail;
