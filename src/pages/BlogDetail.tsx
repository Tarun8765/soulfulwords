import { useParams, Link } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { getBlogById, blogs } from "../data/blogs";
import { getQuotesByCategory } from "../data/quotes";
import { CategoryBadge } from "../components/qoutes/CategoryBadge";
import { QuoteCard } from "../components/qoutes/QuoteCard";
import { BlogCard } from "../components/blogs/BlogCard";
import { Button } from "../components/ui/button";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = getBlogById(id || "");

  if (!blog) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-3xl mb-4">Article not found</h1>
          <Button asChild>
            <Link to="/blogs">Back to Blogs</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Get related quotes and blogs
  const relatedQuotes = getQuotesByCategory(blog.category).slice(0, 2);
  const relatedBlogs = blogs
    .filter((b) => b.category === blog.category && b.id !== blog.id)
    .slice(0, 2);

  return (
    <Layout>
      <article className="container py-8 sm:py-12 md:py-20">
        {/* Back Button */}
        <Link
          to="/blogs"
          className="inline-flex items-center text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors mb-6 sm:mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Journal
        </Link>

        {/* Article Header */}
        <header className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 px-2">
          <CategoryBadge category={blog.category} size="md" />

          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mt-4 sm:mt-6 mb-4 sm:mb-6 text-balance">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5 sm:gap-2">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
              {blog.readTime} min read
            </span>
          </div>

          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-muted-foreground">
            By{" "}
            <span className="text-foreground font-medium">{blog.author}</span>
          </p>
        </header>

        {/* Article Content */}
        <div
          className="max-w-2xl mx-auto blog-content text-sm sm:text-base"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Related Content */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-20 pt-8 sm:pt-12 border-t border-border">
          {/* Related Quotes */}
          {relatedQuotes.length > 0 && (
            <div className="mb-10 sm:mb-16">
              <h2 className="font-display text-xl sm:text-2xl font-medium mb-4 sm:mb-6">
                Related Quotes
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {relatedQuotes.map((quote) => (
                  <QuoteCard key={quote.id} quote={quote} variant="compact" />
                ))}
              </div>
            </div>
          )}

          {/* Related Blogs */}
          {relatedBlogs.length > 0 && (
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-medium mb-4 sm:mb-6">
                Continue Reading
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {relatedBlogs.map((b) => (
                  <BlogCard key={b.id} blog={b} />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default BlogDetail;
