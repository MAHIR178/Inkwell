import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useAuth } from "@/pages/AuthPage";

export default function Write() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!user) {
      toast({ title: "Please log in", description: "You need an account to write." });
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  if (!user) return null;

  const handlePublish = () => {
    const t = title.trim();
    const c = content.trim();

    if (t.length < 5) {
      toast({ title: "Title too short", description: "Title must be at least 5 characters." });
      return;
    }
    if (c.length < 50) {
      toast({ title: "Content too short", description: "Write at least 50 characters." });
      return;
    }

    toast({
      title: "Published (demo)",
      description: "This is a demo. Connect a database to save posts.",
    });

    // optional: reset or redirect
    setTitle("");
    setContent("");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <h1 className="text-3xl font-serif font-bold">Write a story</h1>
          <p className="text-muted-foreground mt-2">
            Logged in as <span className="font-medium">{user.email}</span>
          </p>

          <div className="mt-8 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Title</label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Your story title…"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Content</label>
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Start writing…"
                className="min-h-[260px]"
              />
            </div>

            <div className="flex justify-end">
              <Button onClick={handlePublish}>Publish</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}