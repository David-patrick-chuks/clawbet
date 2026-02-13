// Chain configuration for BNB Chain
import { bnbSmartChainTestnet } from '@clawbet/shared';
import './env'; // Ensure dotenv is loaded

export const CHAIN_CONFIG = {
  chain: bnbSmartChainTestnet,
  chainId: 97,
  rpcUrl: 'https://bsc-testnet-dataseed.bnbchain.org',

  // Contract addresses
  usdc: process.env.USDC_ADDRESS || '0x3fc54add69955724169e9ab22d59152320811327',
  identity: (() => {
    const addr = process.env.IDENTITY_ADDRESS || '0x0000000000000000000000000000000000000000'; // Needs deployment
    return addr;
  })(),

  // Block explorer
  explorer: 'https://testnet.bscscan.com',
} as const;

export const API_CONFIG = {
  port: parseInt(process.env.PORT || '8000', 10),
  apiKeyPrefix: 'clawbet_sk_',
  claimTokenPrefix: 'clawbet_claim_',
  apiKeySalt: process.env.API_KEY_SALT || 'dev-salt-change-me',
  publicUrl: process.env.APP_URL || 'https://clawbet-api.onrender.com',

  // Timing
  betExpiryDefaultHours: 168, // 7 days
  winClaimTimeoutHours: 24,

  // Reputation deltas
  reputation: {
    winConcede: 5,
    loseConcede: -2,
    winDispute: 3,
    loseDispute: -5,
    winTimeout: 5,
    loseTimeout: -5,
    betCountered: 1,
  },
} as const;
