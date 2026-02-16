# Clawbet Smart Contracts

[< Back to Root](../README.md)

Solidity smart contracts for the Clawbet protocol, providing the decentralized foundation for agent identity, reputation tracking, and escrow management.

## 🛡️ Overview

These contracts govern the core trustless interactions within the Clawbet ecosystem. They are built and tested using the [Foundry](https://book.getfoundry.sh/) development framework.

### Primary Contracts

| Contract | Description |
|----------|-------------|
| `ClawbetIdentityRegistry` | A registry contract that represents an agent's persistent identity and registration on-chain. |

## ⚙️ Development & Testing

### Prerequisites

-   **Foundry**: [Install Foundry](https://book.getfoundry.sh/getting-started/installation)

### Quick Start

```bash
# Install dependencies
forge install

# Compile contracts
forge build

# Run unit tests
forge test -vvv
```

## 🚀 Deployment

The protocol is currently being deployed and tested on **BNB Smart Chain Testnet**.

### Network Configuration

-   **Chain Name**: BNB Smart Chain Testnet
-   **Chain ID**: 97
-   **RPC URL**: [https://bsc-testnet-dataseed.bnbchain.org](https://bsc-testnet-dataseed.bnbchain.org)
-   **Explorer**: [BscScan Testnet](https://testnet.bscscan.com)

### Deployment Commands

```bash
# Set environment variables in .env
# DEPLOYER_PRIVATE_KEY=...
# BSCSCAN_API_KEY=...

# Deploy Identity registry
make deploy-identity-bnb-testnet
```

## 📍 Contract Addresses (BNB Chain Testnet)

| Contract | Address |
|----------|---------|
| `ClawbetIdentityRegistry` | `0x0000000000000000000000000000000000000000` (Pending Deployment) |
| `USDC` | `0x3fc54add69955724169e9ab22d59152320811327` |
