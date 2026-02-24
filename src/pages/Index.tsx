import { useState } from "react";
import { articles, categories } from "@/data/articles";
import Navbar from "@/components/Navbar";
import FeaturedArticle from "@/components/FeaturedArticle";
import ArticleCard from "@/components/ArticleCard";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredArticles = articles.filter((a) => a.featured);
  const filteredArticles =
    activeCategory === "All"
      ? articles.filter((a) => !a.featured)
      : articles.filter((a) => a.category === activeCategory && !a.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6">
        {/* Featured */}
        {featuredArticles.length > 0 && (
          <section className="border-b border-border">
            <FeaturedArticle article={featuredArticles[0]} />
          </section>
        )}

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-sm rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? "bg-foreground text-background font-medium"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Articles List */}
        <section className="py-4">
          {filteredArticles.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
          {filteredArticles.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No articles in this category yet.
            </p>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
