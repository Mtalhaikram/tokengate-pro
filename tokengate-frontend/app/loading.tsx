export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-6 gradient-bg rounded-3xl flex items-center justify-center text-4xl shadow-2xl animate-pulse">
          🔐
        </div>
        <div className="flex items-center gap-2 justify-center">
          <div className="w-3 h-3 bg-[var(--primary)] rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
          <div className="w-3 h-3 bg-[var(--secondary)] rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-3 h-3 bg-[var(--accent)] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
}

