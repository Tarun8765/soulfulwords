import { Layout } from "../components/layout/Layout";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <div className="container py-20 md:py-32">
        <div className="max-w-lg mx-auto text-center">
          <div className="font-display text-8xl font-medium text-primary/20 mb-4">
            404
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-medium mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            The words you're looking for seem to have wandered off. Let's guide
            you back home.
          </p>
          <Button asChild size="lg">
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
