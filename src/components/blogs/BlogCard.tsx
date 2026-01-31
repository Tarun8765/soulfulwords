import { Link } from "react-router-dom";
import { Blog } from "../../data/blogs";
import { CategoryBadge } from "../../components/qoutes/CategoryBadge";
import { Clock, ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

interface BlogCardProps {
  blog: Blog;
  variant?: "default" | "featured" | "horizontal";
}

export function BlogCard({ blog, variant = "default" }: BlogCardProps) {
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (variant === "horizontal") {
    return (
      <Link
        to={`/blog/${blog.id}`}
        className="group flex flex-col gap-4 sm:gap-6 bg-card rounded-xl p-4 sm:p-6 shadow-soft border border-border/50 hover:shadow-elevated hover:border-primary/20 transition-all duration-300"
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <CategoryBadge category={blog.category} />
            <span className="flex items-center text-xs text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              {blog.readTime} min read
            </span>
          </div>
          <h3 className="font-display text-lg sm:text-xl font-medium mb-2 group-hover:text-primary transition-colors">
            {blog.title}
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">
            {blog.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {formattedDate}
            </span>
            <span className="text-primary text-xs sm:text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Read more <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${blog.id}`}
      className={cn(
        "group block bg-card rounded-xl overflow-hidden shadow-soft border border-border/50",
        "hover:shadow-elevated hover:border-primary/20 transition-all duration-300",
      )}
    >
      <div className="p-4 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <CategoryBadge category={blog.category} />
          <span className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            {blog.readTime} min read
          </span>
        </div>
        <h3 className="font-display text-lg sm:text-xl font-medium mb-2 sm:mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
          {blog.excerpt}
        </p>
        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border/50">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-medium">
              {blog.author}
            </span>
          </div>
          <span className="text-xs text-muted-foreground">{formattedDate}</span>
        </div>
      </div>
    </Link>
  );
}
