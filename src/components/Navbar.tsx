import { Link } from "react-router-dom";
import { BookOpen, Search, PenLine } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <BookOpen className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
          <span className="text-xl font-serif font-bold tracking-tight">Inkwell</span>
        </Link>

        <div className="flex items-center gap-6">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>

          <Link
            to="/auth"
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary-foreground bg-primary px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            <PenLine className="h-4 w-4" />
            Write
          </Link>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-border px-6 py-3 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-secondary/50 rounded-full px-5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground"
              autoFocus
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
