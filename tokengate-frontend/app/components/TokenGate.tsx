"use client";

import { useAccount, useReadContract } from "wagmi";
import { TOKEN_GATE_ABI, TOKEN_GATE_ADDRESS } from "../../src/lib/contract";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { DashboardSkeleton } from "./ui/LoadingSkeleton";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function TokenGate({ children }: { children: React.ReactNode }) {
  const { address, isConnected } = useAccount();

  const { data, isLoading, error } = useReadContract({
    address: TOKEN_GATE_ADDRESS,
    abi: TOKEN_GATE_ABI,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    enabled: !!address,
  });

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black p-6">
        <div className="container mx-auto max-w-6xl">
          <DashboardSkeleton />
        </div>
      </div>
    );
  }

  // Not connected state
  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-6">
        <Card className="max-w-md w-full text-center animate-fade-in">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-4 gradient-bg rounded-full flex items-center justify-center text-4xl">
              🔐
            </div>
            <h2 className="text-2xl font-bold mb-2">Wallet Required</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Please connect your wallet to access this premium content
            </p>
          </div>
          <div className="flex justify-center">
            <ConnectButton />
          </div>
        </Card>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-red-900 p-6">
        <Card className="max-w-md w-full text-center animate-fade-in">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-4 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-4xl">
              ⚠️
            </div>
            <h2 className="text-2xl font-bold mb-2 text-red-600 dark:text-red-400">Error</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {error.message || "Failed to check NFT balance. Please try again."}
            </p>
          </div>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </Card>
      </div>
    );
  }

  // No access state
  if (!data || Number(data) === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-red-900 dark:to-pink-900 p-6">
        <Card className="max-w-md w-full text-center animate-fade-in">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-4xl animate-pulse">
              🔒
            </div>
            <h2 className="text-2xl font-bold mb-2">Access Denied</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              You need to own a TokenGate NFT to access this exclusive content
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Your wallet:</strong>
                <br />
                <code className="text-xs break-all">{address}</code>
              </p>
            </div>
          </div>
          <Button variant="gradient" onClick={() => window.location.href = "/"}>
            Learn More
          </Button>
        </Card>
      </div>
    );
  }

  // Access granted - render children
  return <div className="animate-fade-in">{children}</div>;
}
