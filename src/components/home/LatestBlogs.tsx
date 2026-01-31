import { Link } from "react-router-dom";
import { getLatestBlogs } from "../../data/blogs";
import { BlogCard } from "../../components/blogs/BlogCard";
import { ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/button";

export function LatestBlogs() {
  const blogs = getLatestBlogs(3);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-12">
          <div className="text-center sm:text-left">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium mb-1 sm:mb-2">
              Latest Articles
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Thoughtful explorations of life's deepest themes
            </p>
          </div>
          <Button asChild variant="ghost" className="hidden sm:flex group">
            <Link to="/blogs">
              View all
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        <div className="mt-6 sm:mt-8 text-center sm:hidden">
          <Button asChild variant="outline">
            <Link to="/blogs">
              View all articles
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
