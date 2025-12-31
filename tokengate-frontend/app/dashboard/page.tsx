"use client";

import { TokenGate } from "../components/TokenGate";
import { Header } from "../components/Header";
import { Card, StatCard } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { useAccount, useReadContract } from "wagmi";
import { TOKEN_GATE_ABI, TOKEN_GATE_ADDRESS } from "../../src/lib/contract";
import { useState, useEffect } from "react";

function DashboardContent() {
  const { address } = useAccount();
  const [mounted, setMounted] = useState(false);

  const { data: balance } = useReadContract({
    address: TOKEN_GATE_ADDRESS,
    abi: TOKEN_GATE_ABI,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    enabled: !!address,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const nftBalance = balance ? Number(balance) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-2xl">
              👋
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold gradient-text">
                Welcome Back!
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {address?.slice(0, 6)}...{address?.slice(-4)}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            icon="🎨"
            label="NFTs Owned"
            value={nftBalance}
            trend={{ value: 0, isPositive: true }}
          />
          
          <StatCard
            icon="⚡"
            label="Access Level"
            value="Premium"
          />
          
          <StatCard
            icon="🔥"
            label="Member Since"
            value="2024"
          />
        </div>

        {/* Premium Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Exclusive Content */}
          <Card className="animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-xl">
                🎯
              </div>
              <h2 className="text-2xl font-bold">Exclusive Content</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Access to premium resources, tutorials, and insider information available only to NFT holders.
            </p>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <p className="font-semibold text-green-800 dark:text-green-200">
                    Advanced Web3 Course
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    Unlocked
                  </p>
                </div>
              </div>
              
              <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg flex items-center gap-3">
                <span className="text-2xl">🎥</span>
                <div>
                  <p className="font-semibold text-purple-800 dark:text-purple-200">
                    Premium Workshops
                  </p>
                  <p className="text-sm text-purple-600 dark:text-purple-400">
                    Unlocked
                  </p>
                </div>
              </div>
              
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg flex items-center gap-3">
                <span className="text-2xl">💎</span>
                <div>
                  <p className="font-semibold text-blue-800 dark:text-blue-200">
                    Exclusive Community
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    Unlocked
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Member Benefits */}
          <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-xl">
                ⭐
              </div>
              <h2 className="text-2xl font-bold">Member Benefits</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Enjoy these exclusive perks as a TokenGate NFT holder.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Early access to new features
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Priority support & assistance
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Exclusive community events
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Voting rights on proposals
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  NFT holder badges & rewards
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Activity Feed */}
        <Card className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-xl">
                📊
              </div>
              <h2 className="text-2xl font-bold">Recent Activity</h2>
            </div>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                ✅
              </div>
              <div className="flex-1">
                <p className="font-semibold mb-1">Access Verified</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Your NFT balance was verified successfully
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Just now
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                🎉
              </div>
              <div className="flex-1">
                <p className="font-semibold mb-1">Welcome to Premium</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  You now have access to all premium features
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Today
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                🔔
              </div>
              <div className="flex-1">
                <p className="font-semibold mb-1">New Content Available</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Check out the latest exclusive tutorials
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  2 hours ago
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card gradient className="text-white animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="text-center py-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Dive into exclusive content, connect with the community, and make the most of your premium membership
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white text-[var(--primary)] border-white hover:bg-gray-100">
                Browse Content
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/20">
                Join Community
              </Button>
            </div>
          </div>
        </Card>

        {/* NFT Details Card */}
        <div className="mt-8">
          <Card className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-xl">
                🏷️
              </div>
              <h2 className="text-2xl font-bold">Your NFT Details</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Contract Address
                </p>
                <code className="text-xs break-all text-gray-700 dark:text-gray-300">
                  {TOKEN_GATE_ADDRESS}
                </code>
              </div>
              
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Your Wallet
                </p>
                <code className="text-xs break-all text-gray-700 dark:text-gray-300">
                  {address}
                </code>
              </div>
              
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Network
                </p>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Sepolia Testnet
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Token Standard
                </p>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  ERC-721
                </p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-[var(--border)]">
              <a
                href={`https://sepolia.etherscan.io/address/${TOKEN_GATE_ADDRESS}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">
                  View on Etherscan →
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default function Dashboard() {
  return (
    <TokenGate>
      <DashboardContent />
    </TokenGate>
  );
}
