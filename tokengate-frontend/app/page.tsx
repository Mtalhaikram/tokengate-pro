"use client";

import { useEffect, useState } from "react";
import { useAccount, useReadContract } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { TOKEN_GATE_ABI, TOKEN_GATE_ADDRESS } from "../src/lib/contract";
import Link from "next/link";
import { Card } from "./components/ui/Card";
import { Button } from "./components/ui/Button";
import { Header } from "./components/Header";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { address, isConnected } = useAccount();

  const { data, isLoading } = useReadContract({
    address: TOKEN_GATE_ADDRESS,
    abi: TOKEN_GATE_ABI,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    enabled: !!address,
  });

  if (!mounted) return null;

  const hasAccess = data && Number(data) > 0;
  const nftBalance = data ? Number(data) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <Header />
      
      <main className="container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <section className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="w-24 h-24 mx-auto gradient-bg rounded-3xl flex items-center justify-center text-5xl shadow-2xl animate-pulse">
              🔐
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            TokenGate Pro
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Exclusive content access powered by{" "}
            <span className="font-semibold text-[var(--primary)]">ERC-721 NFTs</span>
            <br />
            <span className="text-lg">Secure, decentralized, and seamless</span>
          </p>

          {/* Wallet Status Card */}
          <div className="max-w-md mx-auto mb-8">
            {isConnected ? (
              <Card className="animate-slide-in">
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Connected Wallet
                    </p>
                    <p className="font-mono text-xs break-all text-gray-700 dark:text-gray-300">
                      {address?.slice(0, 6)}...{address?.slice(-4)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      NFT Balance
                    </p>
                    <p className="text-2xl font-bold gradient-text">
                      {isLoading ? "..." : nftBalance}
                    </p>
                  </div>
                </div>
                
                {hasAccess && (
                  <div className="mt-4 pt-4 border-t border-[var(--border)]">
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                      <span className="text-xl">✓</span>
                      <span className="font-semibold">Premium Access Granted</span>
                    </div>
                  </div>
                )}
              </Card>
            ) : (
              <div className="animate-slide-in">
                <ConnectButton />
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/dashboard">
              <Button variant="gradient" size="lg">
                {hasAccess ? "Enter Dashboard →" : "View Dashboard"}
              </Button>
            </Link>
            
            <a
              href={`https://sepolia.etherscan.io/address/${TOKEN_GATE_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                View Contract 🔍
              </Button>
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
          <Card hover className="text-center animate-fade-in">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Exclusive Access</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Gate premium content behind NFT ownership for true digital exclusivity
            </p>
          </Card>

          <Card hover className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Instant Verification</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Real-time blockchain verification ensures seamless access control
            </p>
          </Card>

          <Card hover className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-2">Secure & Decentralized</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Built on Ethereum for trustless, transparent access management
            </p>
          </Card>
        </section>

        {/* How It Works Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            How It Works
          </h2>
          
          <div className="space-y-6">
            <Card className="flex items-start gap-4 animate-slide-in">
              <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Connect Your Wallet</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Use MetaMask, WalletConnect, or any supported wallet to authenticate
                </p>
              </div>
            </Card>

            <Card className="flex items-start gap-4 animate-slide-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Verify NFT Ownership</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The smart contract checks your wallet for TokenGate NFTs on Sepolia testnet
                </p>
              </div>
            </Card>

            <Card className="flex items-start gap-4 animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Access Premium Content</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Gain instant access to exclusive dashboard and premium features
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-20 max-w-4xl mx-auto">
          <Card gradient className="text-center text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-4xl font-bold mb-2">🔐</p>
                <p className="text-3xl font-bold mb-1">100%</p>
                <p className="opacity-90">Secure Access</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">⚡</p>
                <p className="text-3xl font-bold mb-1">&lt;1s</p>
                <p className="opacity-90">Verification Time</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">🌐</p>
                <p className="text-3xl font-bold mb-1">Web3</p>
                <p className="opacity-90">Decentralized</p>
              </div>
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8 text-center text-sm text-gray-600 dark:text-gray-400">
        <div className="container mx-auto px-4">
          <p>
            Built with Next.js, Wagmi, RainbowKit & Solidity
          </p>
          <p className="mt-2">
            Contract: <code className="text-xs">{TOKEN_GATE_ADDRESS}</code>
          </p>
        </div>
      </footer>
    </div>
  );
}
