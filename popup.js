// DOM elements
const tabsList = document.getElementById('tabsList');
const searchInput = document.getElementById('searchInput');
const tabCount = document.getElementById('tabCount');
const closeAllBtn = document.getElementById('closeAllBtn');

// Store all tabs
let allTabs = [];

// Initialize the extension
document.addEventListener('DOMContentLoaded', function() {
  loadTabs();
  setupEventListeners();
});

// Load all tabs from the current window
function loadTabs() {
  chrome.tabs.query({currentWindow: true}, function(tabs) {
    allTabs = tabs;
    displayTabs(tabs);
    updateTabCount(tabs.length);
  });
}

// Display tabs in the popup
function displayTabs(tabs) {
  tabsList.innerHTML = '';
  
  tabs.forEach(tab => {
    const tabItem = createTabElement(tab);
    tabsList.appendChild(tabItem);
  });
}

// Create a tab list item element
function createTabElement(tab) {
  const li = document.createElement('li');
  li.className = 'tab-item';
  if (tab.active) li.classList.add('active');
  
  // Favicon
  const favicon = document.createElement('img');
  favicon.className = 'tab-favicon';
  favicon.src = tab.favIconUrl || 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><rect width="16" height="16" fill="%23ccc"/></svg>';
  favicon.onerror = function() {
    this.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><rect width="16" height="16" fill="%23ccc"/></svg>';
  };
  
  // Title
  const title = document.createElement('span');
  title.className = 'tab-title';
  title.textContent = tab.title || 'Untitled';
  
  // Close button
  const closeBtn = document.createElement('button');
  closeBtn.className = 'tab-close';
  closeBtn.innerHTML = '×';
  closeBtn.title = 'Close tab';
  
  // Event listeners
  li.addEventListener('click', function(e) {
    if (e.target !== closeBtn) {
      chrome.tabs.update(tab.id, {active: true});
      window.close();
    }
  });
  
  closeBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    closeTab(tab.id);
  });
  
  li.appendChild(favicon);
  li.appendChild(title);
  li.appendChild(closeBtn);
  
  return li;
}

// Close a specific tab
function closeTab(tabId) {
  chrome.tabs.remove(tabId, function() {
    // Reload tabs after closing
    loadTabs();
  });
}

// Close all tabs except the active one
function closeAllTabs() {
  const tabsToClose = allTabs.filter(tab => !tab.active);
  
  if (tabsToClose.length === 0) {
    alert('No tabs to close!');
    return;
  }
  
  if (confirm(`Close ${tabsToClose.length} tabs?`)) {
    const tabIds = tabsToClose.map(tab => tab.id);
    chrome.tabs.remove(tabIds, function() {
      loadTabs();
    });
  }
}

// Search tabs
function searchTabs(query) {
  const filteredTabs = allTabs.filter(tab => 
    tab.title.toLowerCase().includes(query.toLowerCase()) ||
    tab.url.toLowerCase().includes(query.toLowerCase())
  );
  
  displayTabs(filteredTabs);
  updateTabCount(filteredTabs.length);
}

// Update tab count display
function updateTabCount(count) {
  tabCount.textContent = `${count} tab${count !== 1 ? 's' : ''}`;
}

// Setup event listeners
function setupEventListeners() {
  // Search functionality
  searchInput.addEventListener('input', function() {
    const query = this.value.trim();
    if (query === '') {
      displayTabs(allTabs);
      updateTabCount(allTabs.length);
    } else {
      searchTabs(query);
    }
  });
  
  // Close all button
  closeAllBtn.addEventListener('click', closeAllTabs);
  
  // Keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + F to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
      e.preventDefault();
      searchInput.focus();
    }
    
    // Escape to clear search
    if (e.key === 'Escape') {
      searchInput.value = '';
      displayTabs(allTabs);
      updateTabCount(allTabs.length);
      searchInput.blur();
    }
  });
} 