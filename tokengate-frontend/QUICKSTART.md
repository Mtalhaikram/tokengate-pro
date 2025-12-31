# 🚀 Quick Start Guide - TokenGate Pro

## Get Up and Running in 5 Minutes

### Prerequisites
- Node.js 18+ installed
- A Web3 wallet (MetaMask recommended)
- Sepolia testnet ETH (get from [Sepolia Faucet](https://sepoliafaucet.com/))

### Step 1: Install Dependencies
```bash
cd tokengate-frontend
npm install
```

### Step 2: Configure Environment
Create a `.env.local` file in the `tokengate-frontend` directory:

```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
```

Get your WalletConnect Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/)

### Step 3: Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 4: Connect Your Wallet
1. Click the "Connect Wallet" button
2. Select your wallet (MetaMask, WalletConnect, etc.)
3. Approve the connection

### Step 5: Test Access
- **Without NFT**: You'll see the "Access Denied" screen
- **With NFT**: You'll see the full premium dashboard

## 🎨 Customization Guide

### Change Colors
Edit `app/globals.css`:

```css
:root {
  --primary: #6366f1;      /* Change primary color */
  --secondary: #8b5cf6;    /* Change secondary color */
  --accent: #ec4899;       /* Change accent color */
}
```

### Update Contract Address
Edit `src/lib/contract.ts`:

```typescript
export const TOKEN_GATE_ADDRESS = "0xYourContractAddress";
```

### Modify Content
- **Landing Page**: Edit `app/page.tsx`
- **Dashboard**: Edit `app/dashboard/page.tsx`
- **Header**: Edit `app/components/Header.tsx`

## 🧩 Component Usage

### Card Component
```tsx
import { Card } from './components/ui/Card';

<Card hover>
  <h2>Title</h2>
  <p>Content goes here</p>
</Card>
```

### Button Component
```tsx
import { Button } from './components/ui/Button';

<Button variant="gradient" size="lg">
  Click Me
</Button>
```

### Stat Card
```tsx
import { StatCard } from './components/ui/Card';

<StatCard 
  icon="🎯"
  label="Total Users"
  value="1,234"
  trend={{ value: 12, isPositive: true }}
/>
```

## 🔧 Common Tasks

### Add a New Page
1. Create `app/newpage/page.tsx`
2. Add navigation link in `app/components/Header.tsx`

### Add a New Component
1. Create `app/components/YourComponent.tsx`
2. Export from `app/components/ui/index.ts` if it's a UI component

### Update Styling
- Global styles: `app/globals.css`
- Component styles: Use Tailwind classes inline

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deploy

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms
- **Netlify**: Works with Next.js
- **Railway**: Supports Next.js
- **AWS/GCP**: Use Docker or serverless

## 🐛 Troubleshooting

### Wallet Won't Connect
- Check that you're on Sepolia testnet
- Clear browser cache
- Try a different wallet

### NFT Balance Not Showing
- Verify contract address is correct
- Check network (should be Sepolia)
- Ensure wallet has NFTs

### Styling Issues
- Clear `.next` cache: `rm -rf .next`
- Restart dev server
- Check Tailwind configuration

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Wagmi Documentation](https://wagmi.sh/)
- [RainbowKit Documentation](https://www.rainbowkit.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## 🎯 Next Steps

1. ✅ Get the app running locally
2. ✅ Connect your wallet
3. ✅ Test the token gate functionality
4. ✅ Customize the design
5. ✅ Deploy to production
6. ✅ Share with the world!

## 💡 Tips

- Use the browser console to debug Web3 interactions
- Test on multiple devices for responsive design
- Check dark mode by changing system preferences
- Use React DevTools to inspect component state

## 🆘 Need Help?

- Check the [FEATURES.md](./FEATURES.md) for detailed documentation
- Review [UI_IMPROVEMENTS.md](./UI_IMPROVEMENTS.md) for UI details
- Open an issue on GitHub
- Check the main [README.md](../README.md)

---

**Happy Building! 🚀**

