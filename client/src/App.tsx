import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SkipLink from "./components/SkipLink";
import Home from "./pages/Home";
import Framework from "./pages/Framework";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Articles from "./pages/Articles";
import ArticleNotEitherOr from "./pages/ArticleNotEitherOr";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/framework"} component={Framework} />
      <Route path={"/about"} component={About} />
      <Route path={"/resources"} component={Resources} />
      <Route path={"/articles"} component={Articles} />
      <Route path={"/article/not-eitheror-but-bothand"} component={ArticleNotEitherOr} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// Editorial Minimalism Design: Light theme with warm ivory background
// Typography: Cormorant Garamond (display), Source Sans 3 (body), Archivo Narrow (accent)
// Color palette: Warm ivory, charcoal, teal accents

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="flex flex-col min-h-screen">
            <SkipLink />
            <Header />
            <main id="main-content" className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
