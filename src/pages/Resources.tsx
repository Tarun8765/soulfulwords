import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { books, references } from "../data/resources";
import {
  BookOpen,
  Headphones,
  Video,
  Globe,
  FileText,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
import { useIsMobile } from "../hooks/use-mobile";

const typeIcons = {
  article: FileText,
  podcast: Headphones,
  video: Video,
  website: Globe,
};

const Resources = () => {
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = useState(1);

  const booksPerPage = isMobile ? 4 : 9;
  const totalPages = Math.ceil(books.length / booksPerPage);

  const paginatedBooks = useMemo(() => {
    const startIndex = (currentPage - 1) * booksPerPage;
    return books.slice(startIndex, startIndex + booksPerPage);
  }, [currentPage, booksPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <div className="container py-8 sm:py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Resources
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Curated books and references to deepen your journey of
            self-discovery and personal growth.
          </p>
        </div>

        {/* Books Section */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <BookOpen className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
            <h2 className="font-display text-2xl sm:text-3xl font-semibold">
              Recommended Books
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {paginatedBooks.map((book) => (
              <Link key={book.id} to={`/book/${book.id}`}>
                <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={book.imageUrl}
                      alt={book.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {book.category}
                      </Badge>
                      <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-1">
                        {book.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        by {book.author}
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-5">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {book.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() =>
                        currentPage > 1 && handlePageChange(currentPage - 1)
                      }
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => handlePageChange(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ),
                  )}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        currentPage < totalPages &&
                        handlePageChange(currentPage + 1)
                      }
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </section>

        {/* References Section */}
        <section>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <Globe className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
            <h2 className="font-display text-2xl sm:text-3xl font-semibold">
              References & Links
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {references.map((ref) => {
              const Icon = typeIcons[ref.type];
              return (
                <Card
                  key={ref.id}
                  className="group hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-display text-base sm:text-lg font-semibold">
                            {ref.title}
                          </h3>
                          <Badge
                            variant="outline"
                            className="shrink-0 text-xs capitalize"
                          >
                            {ref.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
                          {ref.description}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-0 h-auto text-primary hover:text-primary/80"
                          asChild
                        >
                          <a
                            href={ref.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit Resource
                            <ExternalLink className="ml-2 h-3.5 w-3.5" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Resources;
