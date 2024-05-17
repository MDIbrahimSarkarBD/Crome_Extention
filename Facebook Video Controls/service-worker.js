// background.js

// Listen for messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Forward the message to the extension popup
    chrome.runtime.sendMessage({ type: "elementValue", value: message.value });
});
