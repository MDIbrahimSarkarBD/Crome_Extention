import iconList from  './data.js';


const listData = [
  {
    name: "Noyon  sakrar",
    image: "../image/ibrahim16.png",
  },
  {
    name: "Hakim  sakrar",
    image: "../image/ibrahim16.png",
  },
  {
    name: "Ibrahim sakrar",
    image: "../image/ibrahim16.png",
  },
  {
    name: "Noyon  sakrar",
    image: "../image/ibrahim16.png",
  },
  {
    name: "Hakim  sakrar",
    image: "../image/ibrahim16.png",
  },
  {
    name: "Ibrahim sakrar",
    image: "../image/ibrahim16.png",
  },
  {
    name: "Noyon  sakrar",
    image: "../image/ibrahim16.png",
  },
  {
    name: "Hakim  sakrar",
    image: "../image/ibrahim16.png",
  },
  {
    name: "Ibrahim sakrar",
    image: "../image/ibrahim16.png",
  },
  {
    name: "Noyon  sakrar",
    image: "../image/ibrahim16.png",
  },
  {
    name: "Hakim  sakrar",
    image: "../image/ibrahim16.png",
  },
  {
    name: "Ibrahim sakrar",
    image: "../image/ibrahim16.png",
  },
  {
    name: "Noyon  sakrar",
    image: "../image/ibrahim16.png",
  },
  {
    name: "Hakim  sakrar",
    image: "../image/ibrahim16.png",
  },
  {
    name: "Ibrahim sakrar",
    image: "../image/ibrahim16.png",
  },
];

formListSelect('formListSelect_is');



// Access the iconData
// Use async/await to wait for the module initialization
async function main() {
  await iconList.init(); // Wait for initialization to complete
  const iconDataa = iconList.getIconData();
  console.log(iconDataa);
}

main();

var htmldatalistResult = listData.map((value, index, array) => {
  // console.log("Value " + index +" "+ value.name + "\n");
  // console.log("Value " + index +" "+ value.image + "\n");

  return `<li class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
            <div class="flex items-center">
                <img src="${value.image}" alt="" class="h-5 w-5 flex-shrink-0 rounded-full"> <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                <span id="formlistName" class="font-normal ml-3 block truncate formlistName">${value.name}</span>
            </div>
            <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
            </span>
        </li>`;
});

// স্ক্রিপ্ট ফাইলের শুরুতে একটি ইভেন্ট হ্যান্ডলার যোগ করুন
function addEventListenerIS(click, clildParentID, callback) {
    const listChild = clildParentID.querySelector("ul");
  // htmldatalistResult এর প্রতিটি আইটেমের উপর ক্লিক করলে একটি অলার্ট দেখানোর জন্য একটি ইভেন্ট লিসেনার যোগ করুন
  var listItems = Array.from(listChild.children);
 
  
  
  listItems.forEach(function (li) {
    li.addEventListener(click, function () {
        var img = li.querySelector("img");
        let title = img.parentNode.querySelector('span');
        callback(img.src, title.textContent)

      // আপনি চাইলে এখানে আরও অনেক কাজ করতে পারেন, যেমন একটি অ্যাজাক্স রিকুয়েস্ট করতে পারেন বা কোনও অ্যাকশন ট্রিগার করতে পারেন
      console.log(title.textContent);
    });
  });         
}


function formListSelect(parameters) {
  // selection ID
  document.addEventListener("DOMContentLoaded", function () {
    const formListSelect = document.getElementById(parameters);

    if (formListSelect) {
      const listChild = formListSelect.querySelector("ul");
      const childBtnItem = formListSelect.querySelector("button");
      const childBtnItemImg = childBtnItem.querySelector("img");
      const childBtnItemImgTitle = childBtnItemImg.parentElement.querySelector('span');

      if (
        listChild &&
        childBtnItem &&
        childBtnItemImg &&
        childBtnItemImgTitle
      ) {
        console.log("Your Child UL add");

        childBtnItem.addEventListener("click", (element) => {
          listChild.classList.toggle("hidden");

          // console.log(element.target.nodeName);
          listChild.innerHTML = htmldatalistResult.join("");
        
         
          
            addEventListenerIS('click', formListSelect , (img, text)=>{
                childBtnItemImg.src = img;
                childBtnItemImgTitle.textContent = text;
            });
          
        
        });
      }
    } else {
      console.log("Your ID not Found");
    }
  });
}


