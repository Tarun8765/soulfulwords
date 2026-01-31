import { QuoteCategory } from "../../data/quotes";
import { cn } from "../../lib/utils";

interface CategoryBadgeProps {
  category: QuoteCategory;
  size?: "sm" | "md";
}

export function CategoryBadge({ category, size = "sm" }: CategoryBadgeProps) {
  return (
    <span
      className={cn(
        "category-badge",
        `category-${category}`,
        size === "md" && "px-4 py-1.5 text-sm",
      )}
    >
      {category}
    </span>
  );
}
