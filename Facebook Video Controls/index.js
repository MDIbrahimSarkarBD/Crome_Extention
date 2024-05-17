const fbVideoCon = function(){
    fbVideoDurationProgress = document.getElementById('fbVideoDuration');
    sameStatusShow = document.getElementById('sameStatusShow');

    fbVideoDurationProgress.innerHTML = '14%';
    const aa= htmlElementCreate('div', "my elements", function (elementTag){
   
      
    });
    sameStatusShow.innerHTML = aa
    console.log(aa);



    
    
}
function progressUI() {
    
}

function htmlElementCreate(tagName, text=null, elementOptionAdd) {

    const tagNameCreate = document.createElement(tagName)
    
    if (text!==null) {
        const newContent = document.createTextNode(text);
        tagNameCreate.appendChild(newContent);
        
        
    }
    function elementOptionAdd(tagNameCreate) {}
    return  tagNameCreate
    //return tagNameCreate;
}

fbVideoCon();

// Listen for messages from background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "elementValue") {
        // Update the value in the popup page
        sameStatusShow.textContent = message.value;
    }
});

// Create a class for the element
class ExpandingList extends HTMLUListElement {
    constructor() {
      // Always call super first in constructor
      super();
  
      // constructor definition left out for brevity
      // …
    }
  }
  
