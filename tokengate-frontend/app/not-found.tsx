import Link from "next/link";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-6">
      <Card className="max-w-md w-full text-center animate-fade-in">
        <div className="mb-6">
          <div className="text-8xl mb-4">🔍</div>
          <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <Link href="/">
          <Button variant="gradient" size="lg" className="w-full">
            ← Back to Home
          </Button>
        </Link>
      </Card>
    </div>
  );
}

