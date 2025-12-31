import "./globals.css";
import Providers from "./providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TokenGate Pro - Exclusive NFT-Gated Access",
  description: "Secure, decentralized content access powered by ERC-721 NFTs on Ethereum",
  keywords: ["Web3", "NFT", "Token Gating", "Ethereum", "ERC-721", "Blockchain"],
  authors: [{ name: "TokenGate Pro" }],
  openGraph: {
    title: "TokenGate Pro",
    description: "Exclusive content access powered by ERC-721 NFTs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
