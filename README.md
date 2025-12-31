## 🔐 TokenGate Pro – Web3 NFT Access Platform

A full-stack Web3 application demonstrating NFT-based access control in a production-style setup that provides exclusive content access based on ERC-721 NFT ownership. Built with modern Web3 technologies and featuring a polished, professional UI.

### 💡 Why TokenGate Pro?

TokenGate Pro demonstrates how Web3 can replace traditional role-based access control
with trustless, on-chain ownership verification. Instead of relying on centralized
databases or subscriptions, access is granted purely based on NFT ownership verified
directly from the blockchain.

### 🧠 What This Project Demonstrates

- Designing secure token-gated routes in a modern Next.js App Router setup
- Integrating wagmi + RainbowKit with server/client boundaries
- Writing and deploying an ERC-721 contract using OpenZeppelin
- Handling real-world Web3 edge cases (loading, access denial, hydration issues)
- Building UI that clearly communicates blockchain-based trust to users

### 🔒 Security Notice

**This repository is PUBLIC and safe for sharing:**
- ✅ All sensitive data (API keys, private keys) use environment variables
- ✅ `.env` files are in `.gitignore` and NOT committed
- ✅ `.env.example` files contain placeholder values only
- ✅ Contract address is public (deployed on Sepolia testnet)
- ✅ Security checks automated via GitHub Actions

**Before contributing, read:**
- [SECURITY.md](./SECURITY.md) - Full security documentation
- [SECURITY_CHECKLIST.md](./SECURITY_CHECKLIST.md) - Pre-commit checklist

**Run security check before pushing:**
```bash
bash scripts/check-security.sh
```

### ✨ Features

#### Core Functionality
- 🔗 **Wallet Authentication** - Seamless connection via RainbowKit (MetaMask, WalletConnect, etc.)
- ✅ **On-Chain Verification** - Real-time NFT ownership verification using wagmi
- 🔒 **Token-Gated Access** - Protected dashboard routes with elegant access control
- 📊 **Premium Dashboard** - Feature-rich dashboard for NFT holders
- ⚡ **Instant Access** - Sub-second verification with optimized smart contract calls

#### UI/UX Enhancements
- 🎨 **Modern Design System** - Beautiful gradient backgrounds, glass effects, and animations
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🌓 **Dark Mode Support** - Automatic theme switching based on system preferences
- ⚡ **Loading States** - Skeleton screens and smooth transitions
- 🎯 **Error Handling** - Comprehensive error states with helpful messages
- ♿ **Accessibility** - WCAG compliant with proper focus states

#### Production Features
- 🏗️ **Component Library** - Reusable UI components (Card, Button, Badge, etc.)
- 📐 **Type Safety** - Full TypeScript support
- 🎭 **Animations** - Smooth fade-in, slide-in, and pulse animations
- 🔍 **SEO Optimized** - Proper metadata and OpenGraph tags
- 📄 **Custom Pages** - 404 page and loading states

### 🛠️ Tech Stack

#### Smart Contracts
- **Solidity** - Smart contract development
- **OpenZeppelin** - Secure, audited contract libraries
- **Hardhat** - Development environment and testing

#### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **wagmi 2.x** - React hooks for Ethereum
- **RainbowKit** - Beautiful wallet connection UI
- **Viem** - TypeScript Ethereum library

### 📁 Project Structure

```
tokengate-pro/
├── contracts/              # Solidity smart contracts
│   └── TokenGateNFT.sol   # ERC-721 NFT contract
├── scripts/               # Deployment scripts
│   └── mint.js           # NFT minting script
└── tokengate-frontend/    # Next.js application
    ├── app/
    │   ├── components/    # React components
    │   │   ├── ui/       # Reusable UI components
    │   │   ├── Header.tsx
    │   │   └── TokenGate.tsx
    │   ├── dashboard/    # Protected dashboard
    │   ├── page.tsx      # Landing page
    │   ├── layout.tsx    # Root layout
    │   └── globals.css   # Global styles
    └── src/
        └── lib/
            └── contract.ts # Contract ABI and address
```

### 🚀 Getting Started

#### Prerequisites
- Node.js 18+ and npm
- MetaMask or another Web3 wallet
- Sepolia testnet ETH

#### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd tokengate-pro
```

2. **Install dependencies**
```bash
# Install contract dependencies
npm install

# Install frontend dependencies
cd tokengate-frontend
npm install
```

3. **Configure environment variables**
```bash
# In tokengate-frontend/.env.local
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
```

4. **Run the development server**
```bash
cd tokengate-frontend
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:3000`

### 📝 Smart Contract

**Contract Address (Sepolia):** `0xdE2c33c04Ea01364D56Fb6E700b26482b6A15c32`

**View on Etherscan:** [https://sepolia.etherscan.io/address/0xdE2c33c04Ea01364D56Fb6E700b26482b6A15c32](https://sepolia.etherscan.io/address/0xdE2c33c04Ea01364D56Fb6E700b26482b6A15c32)

### 🎨 UI Components

The application includes a comprehensive component library:

- **Card** - Flexible card component with hover effects and gradient variants
- **StatCard** - Dashboard statistics with trend indicators
- **Button** - Multiple variants (primary, secondary, outline, ghost, gradient)
- **Badge** - Status indicators with color variants
- **LoadingSkeleton** - Animated loading placeholders
- **Header** - Responsive navigation with wallet connection

### 🔒 How It Works

1. **User connects wallet** via RainbowKit
2. **Smart contract checks** NFT balance using `balanceOf()`
3. **Access is granted** if balance > 0
4. **Premium content** is displayed in the dashboard

### 🎯 Features Showcase

#### Landing Page
- Hero section with gradient effects
- Feature cards with hover animations
- How it works section
- Stats showcase
- Responsive design

#### Dashboard
- Welcome section with user info
- NFT balance and stats cards
- Exclusive content sections
- Member benefits list
- Activity feed
- Quick actions
- NFT details with Etherscan links

#### Token Gate Component
- Beautiful loading states
- Wallet connection prompt
- Access denied screen
- Error handling
- Smooth animations

### 🚢 Deployment

#### Frontend
Deploy to Vercel, Netlify, or any Next.js-compatible platform:

```bash
npm run build
npm start
```

#### Smart Contract
Already deployed to Sepolia testnet. To deploy to other networks:

```bash
npx hardhat run scripts/deploy.js --network <network-name>
```

### 📄 License

MIT License - feel free to use this project for learning or production!

### 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Built with ❤️ using Next.js, Wagmi, RainbowKit & Solidity**
