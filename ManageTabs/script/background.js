// background.js
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['content.js']
    });
  });

  chrome.runtime.onInstalled.addListener(({reason}) => {
    if (reason === 'install') {
      chrome.tabs.create({
        url: "../templates/welcome.html"
      });
    }
  });
//   chrome.runtime.onInstalled.addListener(details => {
//     if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
//       chrome.runtime.setUninstallURL('https://www.youtube.com/');
//       chrome.tabs.create({
//         url: "../templates/welcome.html"
//       });
//     }
//   });
  
  //runtime.setUninstallURL("http://yourserver.com/uninstall");

  async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }


//   chrome.tabs.onActivated.addListener(moveToFirstPosition);
  async function moveToFirstPosition(activeInfo) {
    try {
      await chrome.tabs.move(activeInfo.tabId, {index: 2});
      console.log("Success.");
    } catch (error) {
      if (error == "Error: Tabs cannot be edited right now (user may be dragging a tab).") {
        setTimeout(() => moveToFirstPosition(activeInfo), 50);
      } else {
        console.error(error);
      }
    }
  }

  var smtA = async function sendMessageToActiveTab(message) {
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    const response = await chrome.tabs.sendMessage(tab.id, message);
    // TODO: Do something with the response.
  }
  


  // Optional: Background script for managing storage
// Example: Saving color settings to storage
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'saveColor') {
      chrome.storage.sync.set({tabGroupColor: message.color}, function() {
        console.log('Color saved:', message.color);
      });
    }
  });
  

// Example of a simple user data object
const user = {
    username: 'Ibrahim-Sarkar-BD'
  };
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // 2. A page requested user data, respond with a copy of `user`
    if (message === 'get-user-data') {
      sendResponse(user);
    }
  });

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting === "hello")
        sendResponse({farewell: "goodbye"});
    }
  );
  
  chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name === "knockknock");
    port.onMessage.addListener(function(msg) {
      if (msg.joke === "Knock knock")
        port.postMessage({question: "Who's there?"});
      else if (msg.answer === "Madame")
        port.postMessage({question: "Madame who?"});
      else if (msg.answer === "Madame... Bovary")
        port.postMessage({question: "I don't get it."});
    });
  });
  // service-worker.js

// Wrap in an onInstalled callback to avoid unnecessary work
// every time the service worker is run
// chrome.runtime.onInstalled.addListener(() => {
//     // Page actions are disabled by default and enabled on select tabs
//     chrome.action.disable();
  
//     // Clear all rules to ensure only our expected rules are set
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
//       // Declare a rule to enable the action on example.com pages
//       let exampleRule = {
//         conditions: [
//           new chrome.declarativeContent.PageStateMatcher({
//             pageUrl: {hostSuffix: '.youtube.com'},
//           })
//         ],
//         actions: [new chrome.declarativeContent.ShowAction()],
//       };
  
//       // Finally, apply our new array of rules
//       let rules = [exampleRule];
//       chrome.declarativeContent.onPageChanged.addRules(rules);
//     });
//   });