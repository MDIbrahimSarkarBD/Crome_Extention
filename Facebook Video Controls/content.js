// content.js
// Select the specific element
document.addEventListener("DOMContentLoaded", function () {
  console.clear();

  document
    .getElementById("changeColorButton")
    .addEventListener("click", changeColor);

  videoFB = document.querySelectorAll("video.x1lliihq.x5yr21d.xh8yej3");
  if (videoFB) {
    console.log(videoFB);
    // content.js

// Listen for messages from the extension
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'getSelectedElement') {
        // Select the specific element
        const specificElement = document.querySelector('.specific-class');
        // Send the element's outerHTML back to the extension
        sendResponse({ elementHTML: specificElement.outerHTML });
    }
});

   // Send a message to the background script with the value
chrome.runtime.sendMessage({ type: "elementValue", value: "videoFB" });
    console.log("not sound");
  }
});

// 
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    let stateCheck = setInterval(() => {
      clearInterval(stateCheck);
      console.clear();
    }, 3000);
  }
};


