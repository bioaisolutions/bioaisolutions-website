#!/bin/bash

# BioAI Solutions Website - Vendor Files Copy Script
# This script copies all vendor files from node_modules to static/

set -e  # Exit on any error

echo "🔄 Copying vendor files from node_modules..."

# Create directories
echo "📁 Creating directories..."
mkdir -p static/assets/vendor/boxicons
mkdir -p static/assets/vendor/swiper
mkdir -p static/assets/vendor/rellax
mkdir -p static/assets/vendor/@lottiefiles/lottie-player
mkdir -p static/js

# Copy Boxicons
echo "📦 Copying Boxicons..."
if [ -d "node_modules/boxicons/css" ] && [ -d "node_modules/boxicons/fonts" ]; then
    cp -r node_modules/boxicons/css/* static/assets/vendor/boxicons/
    mkdir -p static/assets/vendor/fonts
    cp -r node_modules/boxicons/fonts/* static/assets/vendor/fonts/
    echo "✅ Boxicons copied successfully"
else
    echo "❌ Boxicons not found in node_modules"
    exit 1
fi

# Copy Swiper
echo "📦 Copying Swiper..."
if [ -f "node_modules/swiper/swiper-bundle.min.css" ] && [ -f "node_modules/swiper/swiper-bundle.min.js" ]; then
    cp node_modules/swiper/swiper-bundle.min.css static/assets/vendor/swiper/
    cp node_modules/swiper/swiper-bundle.min.js static/assets/vendor/swiper/
    echo "✅ Swiper copied successfully"
else
    echo "❌ Swiper files not found in node_modules"
    exit 1
fi

# Copy Rellax
echo "📦 Copying Rellax..."
if [ -f "node_modules/rellax/rellax.min.js" ]; then
    cp node_modules/rellax/rellax.min.js static/assets/vendor/rellax/
    echo "✅ Rellax copied successfully"
else
    echo "❌ Rellax not found in node_modules"
    exit 1
fi

# Copy Lottie Player
echo "📦 Copying Lottie Player..."
if [ -f "node_modules/@lottiefiles/lottie-player/dist/lottie-player.js" ]; then
    cp node_modules/@lottiefiles/lottie-player/dist/lottie-player.js static/assets/vendor/@lottiefiles/lottie-player/
    echo "✅ Lottie Player copied successfully"
else
    echo "❌ Lottie Player not found in node_modules"
    exit 1
fi

# Copy jQuery
echo "📦 Copying jQuery..."
if [ -f "node_modules/jquery/dist/jquery.min.js" ]; then
    cp node_modules/jquery/dist/jquery.min.js static/js/jquery-3.7.1.min.js
    echo "✅ jQuery copied successfully"
else
    echo "❌ jQuery not found in node_modules"
    exit 1
fi

echo "🎉 All vendor files copied successfully!" 