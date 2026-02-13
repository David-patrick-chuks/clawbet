import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts';

const privateKey = generatePrivateKey();
const account = privateKeyToAccount(privateKey);

console.log('━━━━━━━━━━━━━━━━━━━━━━');
console.log('🆕 NEW DEVELOPMENT WALLET');
console.log('━━━━━━━━━━━━━━━━━━━━━━');
console.log(`ADDRESS:     ${account.address}`);
console.log(`PRIVATE_KEY: ${privateKey}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━');
console.log('⚠️  IMPORTANT: Save this private key in your .env file.');
console.log('⚠️  DO NOT share this key with anyone or commit it to GitHub.');
console.log('━━━━━━━━━━━━━━━━━━━━━━');
