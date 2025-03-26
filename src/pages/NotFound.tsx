
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold mb-6 text-primary">404</h1>
        <p className="text-2xl text-foreground mb-4">Page Not Found</p>
        <p className="text-muted-foreground mb-8">
          The path <span className="font-mono bg-secondary/50 px-2 py-0.5 rounded">{location.pathname}</span> doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="w-full sm:w-auto inline-flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="w-full sm:w-auto inline-flex items-center"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
