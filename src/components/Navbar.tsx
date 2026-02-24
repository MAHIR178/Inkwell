import { Link, useNavigate } from "react-router-dom";
import { BookOpen, Search, PenLine } from "lucide-react";
import { useMemo, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { useAuth } from "@/pages/AuthPage";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [tab, setTab] = useState<"login" | "signup">("login");

  const navigate = useNavigate();
  const { user, login, signup } = useAuth();

  // login form
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // signup form
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupPassword2, setSignupPassword2] = useState("");

  // client-side "valid email" check (context has the stricter one too)
  const quickEmailOk = (email: string) => /^\S+@\S+\.\S+$/.test(email.trim());

  const loginEmailOk = useMemo(() => quickEmailOk(loginEmail), [loginEmail]);
  const signupEmailOk = useMemo(() => quickEmailOk(signupEmail), [signupEmail]);

  const handleWriteClick = () => {
    if (user) navigate("/write");
    else {
      setTab("login");
      setAuthOpen(true);
    }
  };

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

          <button
            onClick={handleWriteClick}
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary-foreground bg-primary px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            <PenLine className="h-4 w-4" />
            Write
          </button>
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

      <Dialog open={authOpen} onOpenChange={setAuthOpen}>
        <DialogContent className="sm:max-w-[480px]">
          <DialogHeader>
            <DialogTitle>Sign in to write</DialogTitle>
            <DialogDescription>
              You must log in or create an account to publish on Inkwell.
            </DialogDescription>
          </DialogHeader>

          <Tabs value={tab} onValueChange={(v) => setTab(v as "login" | "signup")} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Log in</TabsTrigger>
              <TabsTrigger value="signup">Create account</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="mt-5">
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  try {
                    login(loginEmail, loginPassword); // STRICT validation happens in context
                    setAuthOpen(false);
                    toast({ title: "Logged in", description: "Welcome back!" });
                    navigate("/write");
                  } catch (err: any) {
                    toast({ title: "Login failed", description: err?.message || "Try again." });
                  }
                }}
              >
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="you@example.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    autoComplete="email"
                  />
                  {!loginEmailOk && loginEmail.trim().length > 0 && (
                    <p className="text-xs text-destructive">Enter a valid email address.</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={!loginEmailOk || !loginPassword.trim()}
                  title={!loginEmailOk ? "Enter a valid email to continue" : undefined}
                >
                  Continue
                </Button>

                <p className="text-xs text-muted-foreground">
                  Demo auth: requires a real-looking email and an account created in “Create account”.
                </p>
              </form>
            </TabsContent>

            <TabsContent value="signup" className="mt-5">
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (signupPassword !== signupPassword2) {
                    toast({ title: "Passwords don’t match", description: "Please retype your password." });
                    return;
                  }
                  try {
                    signup(signupEmail, signupPassword); // STRICT validation happens in context
                    setAuthOpen(false);
                    toast({ title: "Account created", description: "You’re in — start writing." });
                    navigate("/write");
                  } catch (err: any) {
                    toast({ title: "Sign up failed", description: err?.message || "Try again." });
                  }
                }}
              >
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="you@example.com"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    autoComplete="email"
                  />
                  {!signupEmailOk && signupEmail.trim().length > 0 && (
                    <p className="text-xs text-destructive">Enter a valid email address.</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-password-2">Confirm password</Label>
                  <Input
                    id="signup-password-2"
                    type="password"
                    placeholder="••••••••"
                    value={signupPassword2}
                    onChange={(e) => setSignupPassword2(e.target.value)}
                    autoComplete="new-password"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={!signupEmailOk || !signupPassword.trim() || signupPassword !== signupPassword2}
                >
                  Create account
                </Button>

                <p className="text-xs text-muted-foreground">
                  Demo only: stores email/password locally for validation.
                </p>
              </form>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;