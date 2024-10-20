import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { mainnet, linea } from 'wagmi/chains'

// Your WalletConnect Cloud project ID
export const projectId = '54d296e60e62a829bdf7c397bb6b397b'

// Create a metadata object
const metadata = {
  name: 'dino_v3',
  description: 'AppKit Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create wagmiConfig
const chains = [mainnet, linea] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,

})
