import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'components/App'
import '@rainbow-me/rainbowkit/styles.css'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { createConfig, http, WagmiProvider } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum, sepolia } from 'wagmi/chains'
import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import {
  rainbowWallet,
  walletConnectWallet,
  safeWallet
} from '@rainbow-me/rainbowkit/wallets'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [rainbowWallet, walletConnectWallet, safeWallet]
    }
  ],
  {
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID'
  }
)
const config = createConfig({
  connectors,
  chains: [mainnet, polygon, optimism, arbitrum, sepolia],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [sepolia.id]: http()
  }
})

const queryClient = new QueryClient()

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
        <App />
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
)
