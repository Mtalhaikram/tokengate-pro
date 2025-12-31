interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  style?: React.CSSProperties;
}

export function Card({ children, className = "", hover = false, gradient = false, style }: CardProps) {
  return (
    <div
      className={`
        bg-[var(--card-bg)] rounded-xl shadow-lg border border-[var(--border)]
        p-6 transition-all duration-300
        ${hover ? "hover:shadow-xl hover:scale-105 hover:border-[var(--primary)] cursor-pointer" : ""}
        ${gradient ? "gradient-bg text-white border-none" : ""}
        ${className}
      `}
      style={style}
    >
      {children}
    </div>
  );
}

interface StatCardProps {
  icon: string;
  label: string;
  value: string | number;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  loading?: boolean;
}

export function StatCard({ icon, label, value, trend, loading = false }: StatCardProps) {
  if (loading) {
    return (
      <Card>
        <div className="space-y-3">
          <div className="skeleton h-8 w-8 rounded-lg"></div>
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-8 w-24"></div>
        </div>
      </Card>
    );
  }

  return (
    <Card hover className="animate-fade-in">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="text-3xl">{icon}</div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
          <p className="text-2xl font-bold">{value}</p>
          {trend && (
            <div className={`text-sm font-medium flex items-center gap-1 ${
              trend.isPositive ? "text-green-600" : "text-red-600"
            }`}>
              <span>{trend.isPositive ? "↑" : "↓"}</span>
              <span>{Math.abs(trend.value)}%</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

