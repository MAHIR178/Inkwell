import { Link } from "react-router-dom";
import { Article } from "@/types/blog";

interface ArticleCardProps {
  article: Article;
  index: number;
}

const ArticleCard = ({ article, index }: ArticleCardProps) => {
  return (
    <Link
      to={`/article/${article.id}`}
      className="group flex gap-6 py-6 border-b border-border last:border-0 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex-1 space-y-2 min-w-0">
        <div className="flex items-center gap-2">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-5 h-5 rounded-full object-cover"
          />
          <span className="text-sm font-medium">{article.author.name}</span>
        </div>
        <h3 className="text-lg md:text-xl font-serif font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 hidden sm:block">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-3 pt-1">
          <span className="text-xs text-muted-foreground">{article.publishedAt}</span>
          <span className="text-muted-foreground text-xs">·</span>
          <span className="text-xs text-muted-foreground">{article.readTime} min read</span>
          <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full">
            {article.category}
          </span>
        </div>
      </div>
      <div className="flex-shrink-0">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </Link>
  );
};

export default ArticleCard;
