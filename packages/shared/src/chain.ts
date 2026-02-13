import { defineChain } from 'viem';

/**
 * BNB Smart Chain Testnet
 */
export const bnbSmartChainTestnet = defineChain({
  id: 97,
  name: 'BNB Smart Chain Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance Coin',
    symbol: 'tBNB',
  },
  rpcUrls: {
    default: {
      http: ['https://bsc-testnet-dataseed.bnbchain.org'],
    },
    public: {
      http: ['https://bsc-testnet-dataseed.bnbchain.org'],
    },
  },
  blockExplorers: {
    default: {
      name: 'BscScan',
      url: 'https://testnet.bscscan.com',
    },
  },
});

export const goatNetwork = bnbSmartChainTestnet; // Alias for backward compatibility during migration
export const bnbSmartChain = bnbSmartChainTestnet;
