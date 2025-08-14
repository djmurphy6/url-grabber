#!/bin/bash

# Create a ZIP distribution for Chrome extension
echo "Creating ZIP distribution..."

# Create temp directory
mkdir -p dist-zip

# Copy extension files (exclude development files)
cp -r src dist-zip/
cp manifest.json dist-zip/
cp link-icon.png dist-zip/
cp *.png dist-zip/ 2>/dev/null || true

# Create ZIP
cd dist-zip
zip -r ../url-grabber-extension.zip .
cd ..

# Clean up
rm -rf dist-zip

echo "✅ Extension packaged as url-grabber-extension.zip"
echo "Users can download and install via 'Load unpacked' in Chrome"
