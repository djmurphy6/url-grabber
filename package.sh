#!/bin/bash

# Create a packaged extension (.crx file)
# This script packages your extension for distribution

echo "Packaging URL Grabber extension..."

# Create a temporary directory for packaging
mkdir -p dist

# Copy all necessary files (excluding development files)
cp -r src dist/
cp manifest.json dist/
cp link-icon.png dist/
cp LICENSE dist/

# Create a zip file (which can be converted to .crx)
cd dist
zip -r ../url-grabber.zip .
cd ..

# Clean up
rm -rf dist

echo "Extension packaged as url-grabber.zip"
echo "Upload this file to your web server and rename to url-grabber.crx"
