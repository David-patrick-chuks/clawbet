import { bnbSmartChainTestnet } from '@clawbet/shared';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

export const config = getDefaultConfig({
  appName: 'clawbet',
  projectId: 'a3fc1d584fab46948896cd59d5217eca',
  chains: [
    bnbSmartChainTestnet,
  ],
  ssr: true,
});
