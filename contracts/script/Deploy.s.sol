// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/ClawbetIdentityRegistry.sol";
// import "../src/ClawbetEscrow.sol";

/**
 * @title Deploy
 * @notice Deployment script for Clawbet contracts
 *
 * Usage:
 *   forge script script/Deploy.s.sol:Deploy \
 *     --rpc-url $BSC_TESTNET_RPC \
 *     --broadcast \
 *     --verify
 */
contract Deploy is Script {
    address constant USDC = 0x3Fc54ADd69955724169E9aB22D59152320811327;

    function run() external {
        // Get deployer private key (using FACILITATOR_PRIVATE_KEY from .env)
        uint256 deployerPrivateKey = vm.envUint("FACILITATOR_PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        // Deploy Identity contract
        ClawbetIdentityRegistry identity = new ClawbetIdentityRegistry();
        console.log("ClawbetIdentityRegistry deployed to:", address(identity));

        vm.stopBroadcast();

        // Output for .env
        console.log("\n--- Add to .env ---");
        console.log("IDENTITY_ADDRESS=", address(identity));
    }
}
