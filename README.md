# Tab Manager Chrome Extension

A simple and elegant Chrome extension to manage your browser tabs efficiently. Perfect for beginners learning Chrome extension development!

## Features

- 📋 **View All Tabs**: See all your open tabs in a beautiful popup interface
- 🔍 **Search Tabs**: Quickly find tabs by title or URL
- ❌ **Close Tabs**: Close individual tabs or all tabs at once
- 🎯 **Switch Tabs**: Click on any tab to switch to it
- 🎨 **Modern UI**: Clean, gradient design with smooth animations
- ⌨️ **Keyboard Shortcuts**: Use Ctrl+F to search, Escape to clear

## Installation

### Method 1: Load Unpacked Extension (Recommended for Development)

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked"
4. Select the folder containing your extension files
5. The extension should now appear in your extensions list

### Method 2: Create Icons (Optional)

Before loading the extension, you might want to create proper icons:
- Replace the placeholder files in the `icons/` folder with actual PNG images
- Recommended sizes: 16x16, 48x48, and 128x128 pixels
- You can use free icons from [Flaticon](https://www.flaticon.com/) or [Icons8](https://icons8.com/)

## Usage

1. **Open the Extension**: Click the extension icon in your Chrome toolbar
2. **View Tabs**: All your open tabs will be displayed with favicons and titles
3. **Search**: Type in the search box to filter tabs by title or URL
4. **Switch Tabs**: Click on any tab to switch to it
5. **Close Tabs**: Click the × button next to any tab to close it
6. **Close All**: Use the "Close All" button to close all tabs except the active one

## Keyboard Shortcuts

- `Ctrl + F` (or `Cmd + F` on Mac): Focus the search box
- `Escape`: Clear search and show all tabs

## File Structure

```
Chrome Extension/
├── manifest.json          # Extension configuration
├── popup.html            # Main popup interface
├── popup.css             # Styling for the popup
├── popup.js              # JavaScript functionality
├── icons/                # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md             # This file
```

## How It Works

### manifest.json
- Defines the extension's properties and permissions
- Requests `tabs` and `activeTab` permissions to access tab information
- Specifies the popup HTML file and icons

### popup.html
- The main user interface that appears when clicking the extension icon
- Contains search input, tab count, and tabs list

### popup.css
- Modern gradient design with smooth animations
- Responsive layout that works well in the popup window
- Custom scrollbar styling

### popup.js
- Uses Chrome Extension APIs to interact with browser tabs
- Implements search functionality with real-time filtering
- Handles tab switching and closing operations

## Chrome Extension APIs Used

- `chrome.tabs.query()`: Get information about tabs
- `chrome.tabs.update()`: Switch to a specific tab
- `chrome.tabs.remove()`: Close tabs

## Learning Points

This extension demonstrates several key Chrome extension concepts:

1. **Manifest V3**: Modern extension manifest format
2. **Popup Interface**: Creating user interfaces for extensions
3. **Chrome APIs**: Using browser APIs to interact with tabs
4. **Event Handling**: Managing user interactions
5. **DOM Manipulation**: Dynamically creating and updating UI elements
6. **Search Functionality**: Real-time filtering of data

## Customization Ideas

Once you understand the basics, try these modifications:

- Add tab grouping functionality
- Implement tab bookmarking
- Add tab statistics (most visited sites, time spent)
- Create keyboard shortcuts for common actions
- Add tab duplication feature
- Implement tab session saving/restoring

## Troubleshooting

- **Extension not loading**: Make sure all files are in the same folder
- **Icons not showing**: Replace placeholder files with actual PNG images
- **Permissions denied**: Check that the manifest.json has correct permissions
- **Tabs not updating**: Refresh the extension in chrome://extensions/

## Next Steps

After mastering this extension, try building:

1. **Content Scripts**: Extensions that modify web pages
2. **Background Scripts**: Extensions that run in the background
3. **Storage APIs**: Saving user preferences and data
4. **Context Menus**: Right-click menu integrations
5. **Web APIs**: Integrating with external services

Happy coding! 🚀 "# Tab-Manager-Chrome-Extension" 
