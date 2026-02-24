import { Link } from "react-router-dom";
import { Article } from "@/types/blog";

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle = ({ article }: FeaturedArticleProps) => {
  return (
    <Link
      to={`/article/${article.id}`}
      className="group grid md:grid-cols-2 gap-8 items-center py-10 animate-fade-in"
    >
      <div className="space-y-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          {article.category}
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight group-hover:text-primary transition-colors">
          {article.title}
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-3 pt-2">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium">{article.author.name}</span>
          <span className="text-muted-foreground text-sm">·</span>
          <span className="text-sm text-muted-foreground">{article.publishedAt}</span>
          <span className="text-muted-foreground text-sm">·</span>
          <span className="text-sm text-muted-foreground">{article.readTime} min read</span>
        </div>
      </div>
      <div className="overflow-hidden rounded-lg">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </Link>
  );
};

export default FeaturedArticle;
