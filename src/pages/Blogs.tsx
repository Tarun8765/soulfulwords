import { useState } from "react";
import { Layout } from "../components/layout/Layout";
import { BlogCard } from "../components/blogs/BlogCard";
import { blogs, getBlogsByCategory } from "../data/blogs";
import { categories, QuoteCategory } from "../data/quotes";
import { cn } from "../lib/utils";

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    QuoteCategory | "all"
  >("all");

  const filteredBlogs =
    selectedCategory === "all" ? blogs : getBlogsByCategory(selectedCategory);

  return (
    <Layout>
      <div className="container py-8 sm:py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium mb-3 sm:mb-4">
            The Journal
          </h1>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-xl mx-auto">
            Deep dives into the themes that shape our lives. Thoughtful
            explorations for the curious mind.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
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
              onClick={() => setSelectedCategory(category.id)}
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

        {/* Blogs List */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} variant="horizontal" />
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-muted-foreground text-sm sm:text-base">
              No articles found in this category.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Blogs;
