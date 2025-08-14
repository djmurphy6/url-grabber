# URL Grabber

A Chrome extension that automatically captures and sends the current tab's URL to a local server when enabled.

## Features

- **Toggle Switch**: Simple on/off switch in the extension popup
- **Live URL Capture**: Automatically sends URLs when switching tabs or refreshing pages
- **Local Server**: Receives and logs URLs from your browsing session
- **Modern UI**: Clean toggle switch interface with rounded corners

## Setup

### 1. Install Dependencies

```bash
npm install express
```

### 2. Install Extension

**Option A: Download ZIP (Recommended)**

1. Download `url-grabber-extension.zip` from this repository
2. Extract the ZIP file to a folder
3. Open Chrome and go to `chrome://extensions/`
4. Enable **Developer mode** (top right)
5. Click **Load unpacked**
6. Select the extracted folder

**Option B: Clone Repository**

1. Clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (top right)
4. Click **Load unpacked**
5. Select the project folder (`url-grabber`)

### 3. Start Local Server

```bash
node server.js
```

The server will run on `http://localhost:6767`

## Distribution

### For Team/Internal Use

- Download `url-grabber-extension.zip` from the repository
- Extract and install via "Load unpacked" in Chrome
- Extension will auto-update when new versions are pushed to GitHub

### Creating Distribution Package

```bash
./create-zip.sh
```

This creates `url-grabber-extension.zip` for easy distribution.

## Usage

1. **Start the server**: Run `node server.js` in your terminal
2. **Open the extension**: Click the extension icon in Chrome's toolbar
3. **Turn ON live sending**: Toggle the switch to enable URL capture
4. **Browse the web**: URLs will automatically be sent to your server as you navigate
5. **View captured URLs**: Check your terminal for logged URLs

## Files

- `manifest.json` - Extension configuration
- `src/popup.html` - Extension popup interface
- `src/popup.js` - Popup functionality and storage management
- `src/popup.css` - Popup styling with toggle switch
- `src/background.js` - Background script that monitors tabs and sends URLs
- `server.js` - Local Express server that receives URLs

## How It Works

When the toggle is ON, the background script listens for:

- Tab activation changes (`chrome.tabs.onActivated`)
- Page load completion (`chrome.tabs.onUpdated`)

URLs are sent via POST request to `http://localhost:3246/receive-url` and logged in the server terminal.
