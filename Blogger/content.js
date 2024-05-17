
insertNotesBeforeParents('THeBgb ElmLkc', 0);

// একই নামে একাধিক ক্লাস এর প্রতিইটির চাইল্ড থেকে নির্দিষ্ট চাইল্ডের ভিতরের টেক্সট নিয়ে এই পেরেন্টের পুর্বে এইচটিএমএল নোট চাইল্ড টেক্সট সেট কর এবং একটা আংশন বানাও
function insertNotesBeforeParents(className, childIndex) {
    // সব এলিমেন্ট নির্বাচন করুন যাদের ক্লাস নাম 'className'
    const elements = document.querySelectorAll(`.${className.replace(/\s+/g, '.')}`);

    elements.forEach((element) => {
        // চেক করুন প্যারেন্টের নির্দিষ্ট চাইল্ড ইনডেক্স বিদ্যমান কিনা
        if (element.children.length > childIndex) {
            // নির্দিষ্ট ইনডেক্সের চাইল্ডের ভিতরের টেক্সট নিন
            const childText = element.children[childIndex].innerText;
            element.style.cssText = 
                "overflow: hidden; height: 0px; padding: 0 !important;"
            // HTML নোট তৈরি করুন
            const htmlNote = document.createElement('div');
            htmlNote.innerHTML = `<h3 style="color: white;background: grey;padding: 20px;font-size: 24px;" >${childText}</h3>`;
            //htmlNote.style.cssText = "color: white;background: grey;padding: 20px;font-size: 24px;"


            htmlNote.addEventListener('click', ()=> {
                if (element.style.height == '0px') {
                    element.style.cssText = 
                "height: auto; padding: 0 !important;"
                }else{
                     element.style.cssText = 
                "overflow: hidden; height: 0px; padding: 0 !important;"
              
                }
                     
            })

            // প্যারেন্ট এলিমেন্টের পুর্বে HTML নোট ইনসার্ট করুন
            element.parentElement.insertBefore(htmlNote, element);
        } else {
            console.error(`Element with class '${className}' does not have a child at index ${childIndex}.`);
        }
    });
}



// Listen for changes in the URL

function urlChecking(splitText) {
  // Get the current URL
  const currentUrl = window.location.href;
 
  if (currentUrl.includes(splitText)) {
    // Remove the part after "settings/"
    const modifiedUrl = currentUrl.split(splitText +'/')[0] + splitText +"/";
    
return modifiedUrl;
  }
  const lastIndex = currentUrl.lastIndexOf('/');
  const urlWithoutLastSegment = currentUrl.substring(0, lastIndex); // or currentUrl.slice(0, lastIndex + 1)



return urlWithoutLastSegment;


}



window.addEventListener("load", function(event) {
    // Page has finished loading
    console.log(urlChecking("settings"));
    
    console.log("Page has finished loading");
});


// Define a function to handle user interaction events
function handleUserInteraction(event) {
  // Log the type of event
  console.log("User interaction event:", event.type);
  insertNotesBeforeParents('THeBgb ElmLkc', 0);
  console.log(urlChecking("settings"));
  // You can perform any action here based on the event
}

