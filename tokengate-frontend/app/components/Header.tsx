"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-lg">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
            TG
          </div>
          <span className="text-xl font-bold gradient-text hidden sm:block">
            TokenGate Pro
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/"
            className={`
              text-sm font-medium transition-colors relative
              ${isActive("/") 
                ? "text-[var(--primary)]" 
                : "text-gray-600 dark:text-gray-400 hover:text-[var(--primary)]"
              }
            `}
          >
            Home
            {isActive("/") && (
              <span className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-[var(--primary)]"></span>
            )}
          </Link>
          
          <Link
            href="/dashboard"
            className={`
              text-sm font-medium transition-colors relative
              ${isActive("/dashboard") 
                ? "text-[var(--primary)]" 
                : "text-gray-600 dark:text-gray-400 hover:text-[var(--primary)]"
              }
            `}
          >
            Dashboard
            {isActive("/dashboard") && (
              <span className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-[var(--primary)]"></span>
            )}
          </Link>

          {/* Connect Button */}
          <div className="scale-90 sm:scale-100">
            <ConnectButton 
              showBalance={false}
              chainStatus="icon"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

