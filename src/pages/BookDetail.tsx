import { useParams, Link } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { books } from "../data/resources";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ArrowLeft, ExternalLink, BookOpen, Sparkles } from "lucide-react";

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);

  // Get related books in the same category
  const relatedBooks = books
    .filter((b) => b.category === book?.category && b.id !== id)
    .slice(0, 3);

  if (!book) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">
            Book Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The book you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/resources">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8 sm:py-12 md:py-16">
        {/* Back Button */}
        <Link
          to="/resources"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6 sm:mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Resources
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 animate-fade-in">
          {/* Book Image */}
          <div className="relative group">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src={book.imageUrl}
                alt={book.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <div
              className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10 animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>

          {/* Book Details */}
          <div className="flex flex-col justify-center">
            <Badge
              variant="secondary"
              className="w-fit mb-4 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              {book.category}
            </Badge>

            <h1
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {book.title}
            </h1>

            <p
              className="text-lg sm:text-xl text-muted-foreground mb-6 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              by {book.author}
            </p>

            <div
              className="prose prose-lg max-w-none mb-8 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-foreground/80 leading-relaxed">
                {book.description}
              </p>
            </div>

            {/* Additional Info */}
            <div
              className="bg-muted/50 rounded-xl p-6 mb-8 animate-fade-in transition-all duration-300 hover:bg-muted/70 hover:shadow-lg"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="font-medium">Why Read This Book?</span>
              </div>
              <p className="text-sm text-muted-foreground">
                This book offers valuable insights into{" "}
                {book.category.toLowerCase()} that can help transform your
                perspective and enrich your life journey.
              </p>
            </div>

            {/* Buy Button */}
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              {book.link ? (
                <Button
                  size="lg"
                  className="w-full sm:w-auto group transition-all duration-300 hover:shadow-lg hover:scale-105"
                  asChild
                >
                  <a href={book.link} target="_blank" rel="noopener noreferrer">
                    Buy This Book
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
              ) : (
                <Button
                  size="lg"
                  className="w-full sm:w-auto group transition-all duration-300 hover:shadow-lg hover:scale-105"
                  asChild
                >
                  <a
                    href={`https://www.amazon.com/s?k=${encodeURIComponent(book.title + " " + book.author)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Find on Amazon
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Related Books Section */}
        {relatedBooks.length > 0 && (
          <section
            className="mt-16 sm:mt-20 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="h-6 w-6 text-primary" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold">
                More in {book.category}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBooks.map((relatedBook, index) => (
                <Link
                  key={relatedBook.id}
                  to={`/book/${relatedBook.id}`}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <Card className="h-full overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border-border/50 hover:border-primary/30">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={relatedBook.imageUrl}
                        alt={relatedBook.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {relatedBook.category}
                      </Badge>
                      <h3 className="font-display font-semibold text-lg mb-1 line-clamp-1 group-hover:text-primary transition-colors duration-300">
                        {relatedBook.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        by {relatedBook.author}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default BookDetail;
