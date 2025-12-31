interface LoadingSkeletonProps {
  className?: string;
  count?: number;
  type?: "text" | "circle" | "rect";
}

export function LoadingSkeleton({ 
  className = "", 
  count = 1, 
  type = "rect" 
}: LoadingSkeletonProps) {
  const baseClass = "skeleton";
  
  const typeClasses = {
    text: "h-4 w-full rounded",
    circle: "h-12 w-12 rounded-full",
    rect: "h-32 w-full rounded-lg",
  };

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`${baseClass} ${typeClasses[type]} ${className}`}
        />
      ))}
    </>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Header */}
      <div className="skeleton h-12 w-64 rounded-lg"></div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-[var(--card-bg)] rounded-xl p-6 border border-[var(--border)]">
            <div className="skeleton h-8 w-8 rounded-lg mb-4"></div>
            <div className="skeleton h-4 w-20 mb-2"></div>
            <div className="skeleton h-8 w-24"></div>
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="skeleton h-64 w-full rounded-xl"></div>
    </div>
  );
}

