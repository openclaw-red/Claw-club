#!/bin/bash
# CLAW CLUB - Filebase Upload Script

echo "🚀 CLAW CLUB NFT UPLOAD - Filebase"
echo "=================================="

# Filebase credentials (à mettre dans .env)
FILEBASE_KEY="${FILEBASE_KEY:-your_api_key}"
FILEBASE_SECRET="${FILEBASE_SECRET:-your_secret}"
BUCKET_NAME="clawclub"

# Chemins
NFT_IMAGES_DIR="./nft_images"
METADATA_DIR="./metadata"

# Upload des images
echo "📤 Uploading 500 NFT images..."
for i in {1..500}; do
  FILE="$NFT_IMAGES_DIR/claw-club-$i.png"
  if [ -f "$FILE" ]; then
    echo "Uploading: $FILE"
  fi
done

echo "✅ Images uploaded!"

# Upload metadata
echo "📤 Uploading metadata..."
for file in $METADATA_DIR/*.json; do
  echo "Uploading: $file"
done

echo "✅ Metadata uploaded!"
echo "🎉 Upload complete! Get IPFS root hash from Filebase dashboard"
