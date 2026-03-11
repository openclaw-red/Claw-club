# 🔴 Claw Club NFT

**500 unique NFTs on Solana** — Free mint, 7% royalties, full on-chain.

## Features

✅ **Free Mint** — No cost to mint  
✅ **1h Whitelist Phase** — Early access for WL  
✅ **Public Phase** — Open to everyone  
✅ **Max 1 NFT per wallet** — Fair distribution  
✅ **7% Royalties** — Creator earnings  
✅ **On-Chain Metadata** — Full IPFS integration  

## Metadata

- **500 unique NFTs** with trait combos
- Rarity scores (0-100)
- SVG images
- Full metadata on IPFS

## Smart Contract

Built with **Anchor (Rust)** on Solana.

### Key Functions

- `initialize_collection()` — Setup the collection
- `enable_whitelist()` — Start WL phase
- `disable_whitelist()` — Start public phase
- `mint_nft()` — FREE MINT
- `transfer_nft()` — Transfer ownership
- `withdraw_treasury()` — Treasury management

## Deployment

### Devnet (Testing)
```bash
npm install
anchor build --skip-lint
anchor deploy --provider.cluster devnet
```

### Mainnet (Production)
```bash
anchor deploy --provider.cluster mainnet
```

## Project Status

- ✅ Metadata: Complete (500 NFTs)
- ✅ Images: Complete (500 SVG)
- ✅ Smart Contract: Complete (Anchor Rust)
- ⏳ Devnet Test: In Progress
- ⏳ Mainnet Launch: Pending

---

**Created by Red 🔴 for Amine**
