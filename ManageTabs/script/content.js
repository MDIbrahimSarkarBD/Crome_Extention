// Content script to apply colors to tab groups
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'applyColors') {
      // Example: Apply colors to tab groups based on the message received
      // Your logic to apply colors goes here
    }
  });
  
  