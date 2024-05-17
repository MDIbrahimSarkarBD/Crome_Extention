document.addEventListener('DOMContentLoaded', (event) => {
    // Select the parent element with class 'THeBgb ElmLkc'
    const parentElement = document.querySelector('.THeBgb.ElmLkc');

    if (parentElement) {
        const firstChildText = parentElement.firstElementChild.innerText;

    parentElement.addEventListener('click', (){

    });

    
        // Get the first child element
        

        if (firstChild) {
            // Function to toggle visibility
            const toggleVisibility = () => {
                if (firstChild.style.display === 'none') {
                    firstChild.style.display = '';
                } else {
                    firstChild.style.display = 'none';
                }
            };

            // Set the title attribute for the collapsible element
            firstChild.setAttribute('title', 'Collapse/Expand');

            // Add an event listener to the first child to toggle visibility on click
            firstChild.addEventListener('click', toggleVisibility);

            // Initially collapse the element
            firstChild.style.display = 'none';
        }
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Select the element with class 'THeBgb ElmLkc'
    const element = document.querySelector('.THeBgb.ElmLkc');

    if (element) {
        // Get the parent element of the selected element
        const parentElement = element.parentElement;

        if (parentElement) {
            // Create a new element for the custom note
            const customNote = document.createElement('div');
            customNote.innerText = 'This is a custom note';
            customNote.style.color = 'red'; // Optional: Style the custom note

            // Check if the parent has at least 5 children
            if (parentElement.children.length >= 5) {
                // Insert the custom note before the 5th child
                parentElement.insertBefore(customNote, parentElement.children[4]);
            } else {
                console.error('The parent element does not have 5 children.');
            }
        } else {
            console.error('Parent element not found.');
        }
    } else {
        console.error('Element with class "THeBgb ElmLkc" not found.');
    }
});


const element = document.querySelector('.THeBgb.ElmLkc1');
const elementList = document.querySelectorAll('.THeBgb.ElmLkc');

insertHtmlNoteBeforeClassElement('THeBgb ElmLkc', 2, '<strong>This is an HTML note ২</strong>');

// একই নামে একাধিক ক্লাস থেকে নির্দিষ্ট এলিমেন্ট ইনডেক্স বের তার পুর্বে এইচটিএমএল নোট ইনসার্ট করার ফাংশন বানাও
function insertHtmlNoteBeforeClassElement(className, index, htmlContent) {
    // সব এলিমেন্ট নির্বাচন করুন যাদের ক্লাস নাম 'THeBgb ElmLkc'
    const elements = document.querySelectorAll(`.${className.replace(/\s+/g, '.')}`);

    if (elements.length > index) {
        // নির্দিষ্ট ইনডেক্সের এলিমেন্ট নির্বাচন করুন
        const element = elements[index];

        // HTML নোট তৈরি করুন
        const htmlNote = document.createElement('div');
        htmlNote.innerHTML = htmlContent;

        // নির্দিষ্ট ইনডেক্সের এলিমেন্টের আগে HTML নোট ইনসার্ট করুন
        element.parentElement.insertBefore(htmlNote, element);
    } else {
        console.error(`There are only ${elements.length} elements with the class '${className}'. Index ${index} is out of bounds.`);
    }
}

 // ফাংশনটি কল করুন এবং ক্লাস নাম ও চাইল্ড ইনডেক্স প্রদান করুন
 

// একই নামে একাধিক ক্লাস এর প্রতিইটির চাইল্ড থেকে নির্দিষ্ট চাইল্ডের ভিতরের টেক্সট নিয়ে এই পেরেন্টের পুর্বে এইচটিএমএল নোট চাইল্ড টেক্সট সেট কর এবং একটা আংশন বানাও
 function bulkInsertNotesBeforeParents(className, childIndex) {
    // সব এলিমেন্ট নির্বাচন করুন যাদের ক্লাস নাম 'className'
    const elements = document.querySelectorAll(`.${className.replace(/\s+/g, '.')}`);

    elements.forEach((element) => {
        // চেক করুন প্যারেন্টের নির্দিষ্ট চাইল্ড ইনডেক্স বিদ্যমান কিনা
        if (element.children.length > childIndex) {
            // নির্দিষ্ট ইনডেক্সের চাইল্ডের ভিতরের টেক্সট নিন
            const childText = element.children[childIndex].innerText;

            // HTML নোট তৈরি করুন
            const htmlNote = document.createElement('div');
            htmlNote.innerHTML = `<h3>${childText}</h3>`;
            htmlNote.style.color = 'blue'; // Optional: স্টাইলিং যোগ করুন

            // প্যারেন্ট এলিমেন্টের পুর্বে HTML নোট ইনসার্ট করুন
            element.parentElement.insertBefore(htmlNote, element);
        } else {
            console.error(`Element with class '${className}' does not have a child at index ${childIndex}.`);
        }
    });
}


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

   



// এই ফানশনের মাধ্যমে এইচটিএমএল এলেমেন্ট ক্লাস নামে নিয়ে সেলেক্ট করে তার পরে ঐ এলেমেন্টের পূর্বে ইন্সার্ট করে এইচটিএমএল নোট
function  selectedOutOfInsertBefore(elementClass) {

    if (elementClass) {
        const customNote = document.createElement('div');
        customNote.innerText = 'This is a custom note';
        customNote.style.color = 'red'; // Optional: Style the custom note

        // Insert the custom note before the selected element
        element.parentElement.insertBefore(customNote, element);
        } 
        else {
            console.error('Element with class "THeBgb ElmLkc" not found.');
        }
}




selectedOutOfParantChildrenIndex(element);


https://www.blogger.com/blog/settings/7124841602630947634?hl=en