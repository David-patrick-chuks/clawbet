# Deployment commands for clawbet contracts

.PHONY: deploy-identity-base-sepolia deploy-identity-bnb-testnet deploy-identity-bnb-mainnet

# Credentials (should be set in environment or passed to make)
# DEPLOYER_ACCOUNT is the name of the keystore account
ACCOUNT ?= main-deployer
ADDR ?= 0x9913931fF28eaCDAa7d2F8164fFeF7201C2633bB

deploy-identity-base-sepolia:
	forge create src/ClawbetIdentityRegistry.sol:ClawbetIdentityRegistry \
		--rpc-url base_sepolia \
		--account $(ACCOUNT) \
		--broadcast \
		--verify

deploy-identity-bnb-testnet:
	forge create src/ClawbetIdentityRegistry.sol:ClawbetIdentityRegistry \
		--rpc-url bsc_testnet \
		--account $(ACCOUNT) \
		--broadcast \
		--verify

deploy-identity-bnb-mainnet:
	forge create src/ClawbetIdentityRegistry.sol:ClawbetIdentityRegistry \
		--rpc-url bsc_mainnet \
		--account $(ACCOUNT) \
		--broadcast \
		--verify

deploy-identity-skale-testnet:
	forge create src/ClawbetIdentityRegistry.sol:ClawbetIdentityRegistry \
		--rpc-url skale_testnet \
		--account $(ACCOUNT) \
		--legacy \
		--broadcast \
		--verify \
		--verifier blockscout \
		--verifier-url https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/api

deploy-identity-skale-base-sepolia:
	forge create src/ClawbetIdentityRegistry.sol:ClawbetIdentityRegistry \
		--rpc-url skale_base_sepolia \
		--account $(ACCOUNT) \
		--legacy \
		--broadcast \


# Verification commands (useful if auto-verification fails)
verify-identity-bnb-testnet:
	forge verify-contract $(ADDR) \
		src/ClawbetIdentityRegistry.sol:ClawbetIdentityRegistry \
		--rpc-url bsc_testnet \
		--compiler-version v0.8.24+commit.e11b9ed9 \
		--num-of-optimizations 200
