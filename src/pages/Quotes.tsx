import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import { Layout } from "../components/layout/Layout";
import { QuoteCard } from "../components/qoutes/QuoteCard";
import { quotes, categories, QuoteCategory } from "../data/quotes";
import { cn } from "../lib/utils";
import { Input } from "../components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "../components/ui/pagination";

const QUOTES_PER_PAGE = 6;

const Quotes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") as QuoteCategory | null;
  const pageParam = searchParams.get("page");
  const searchParam = searchParams.get("search") || "";
  const [selectedCategory, setSelectedCategory] = useState<
    QuoteCategory | "all"
  >(categoryParam || "all");
  const [currentPage, setCurrentPage] = useState(
    pageParam ? parseInt(pageParam) : 1,
  );
  const [searchQuery, setSearchQuery] = useState(searchParam);

  const filteredQuotes = useMemo(() => {
    let result = quotes;

    if (selectedCategory !== "all") {
      result = result.filter((q) => q.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (q) =>
          q.text.toLowerCase().includes(query) ||
          q.author.toLowerCase().includes(query),
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredQuotes.length / QUOTES_PER_PAGE);

  const paginatedQuotes = useMemo(() => {
    const startIndex = (currentPage - 1) * QUOTES_PER_PAGE;
    return filteredQuotes.slice(startIndex, startIndex + QUOTES_PER_PAGE);
  }, [filteredQuotes, currentPage]);

  const updateSearchParams = (
    category: QuoteCategory | "all",
    page: number,
    search: string,
  ) => {
    const params: Record<string, string> = {};
    if (category !== "all") params.category = category;
    if (page > 1) params.page = page.toString();
    if (search.trim()) params.search = search.trim();
    setSearchParams(params);
  };

  const handleCategoryChange = (category: QuoteCategory | "all") => {
    setSelectedCategory(category);
    setCurrentPage(1);
    updateSearchParams(category, 1, searchQuery);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
    updateSearchParams(selectedCategory, 1, value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateSearchParams(selectedCategory, page, searchQuery);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getVisiblePages = () => {
    const pages: (number | "ellipsis")[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 3) pages.push("ellipsis");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("ellipsis");

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <Layout>
      <div className="container py-8 sm:py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium mb-3 sm:mb-4">
            Quotes Collection
          </h1>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-xl mx-auto">
            Words that have the power to change perspectives, heal hearts, and
            inspire action.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-6 sm:mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search quotes or authors..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 h-10 sm:h-11"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
          <button
            onClick={() => handleCategoryChange("all")}
            className={cn(
              "px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all",
              selectedCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80",
            )}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={cn(
                "px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all",
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Quotes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {paginatedQuotes.map((quote) => (
            <QuoteCard key={quote.id} quote={quote} />
          ))}
        </div>

        {filteredQuotes.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-muted-foreground text-sm sm:text-base">
              No quotes found in this category.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 sm:mt-12">
            <Pagination>
              <PaginationContent className="flex-wrap justify-center gap-1">
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() =>
                      currentPage > 1 && handlePageChange(currentPage - 1)
                    }
                    className={cn(
                      "cursor-pointer text-xs sm:text-sm",
                      currentPage === 1 && "pointer-events-none opacity-50",
                    )}
                  />
                </PaginationItem>

                {getVisiblePages().map((page, index) => (
                  <PaginationItem key={index}>
                    {page === "ellipsis" ? (
                      <PaginationEllipsis />
                    ) : (
                      <PaginationLink
                        onClick={() => handlePageChange(page)}
                        isActive={currentPage === page}
                        className="cursor-pointer text-xs sm:text-sm w-8 h-8 sm:w-9 sm:h-9"
                      >
                        {page}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      currentPage < totalPages &&
                      handlePageChange(currentPage + 1)
                    }
                    className={cn(
                      "cursor-pointer text-xs sm:text-sm",
                      currentPage === totalPages &&
                        "pointer-events-none opacity-50",
                    )}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>

            {/* Page info */}
            <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4">
              Showing {(currentPage - 1) * QUOTES_PER_PAGE + 1} -{" "}
              {Math.min(currentPage * QUOTES_PER_PAGE, filteredQuotes.length)}{" "}
              of {filteredQuotes.length} quotes
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Quotes;
