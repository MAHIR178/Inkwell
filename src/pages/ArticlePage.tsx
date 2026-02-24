import { useParams, Link } from "react-router-dom";
import { articles } from "@/data/articles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
//m
const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-serif font-bold mb-4">Article not found</h1>
          <Link to="/" className="text-primary hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 py-10 animate-fade-in">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <header className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mt-3 mb-5">
            {article.title}
          </h1>
          <div className="flex items-center gap-4">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-11 h-11 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-sm">{article.author.name}</p>
              <p className="text-muted-foreground text-sm">
                {article.publishedAt} · {article.readTime} min read
              </p>
            </div>
          </div>
        </header>

        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-10"
        />

        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="bg-secondary text-secondary-foreground text-sm px-4 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Author bio */}
        <div className="mt-10 p-6 bg-card rounded-lg border border-border flex items-start gap-4">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-14 h-14 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <p className="font-serif font-bold text-lg">{article.author.name}</p>
            <p className="text-muted-foreground text-sm mt-1">{article.author.bio}</p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ArticlePage;
