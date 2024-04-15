console.log("This is a popup!");


var btnTEB =  document.getElementById('SL_button');


// Listen for clicks on the specific button
if (btnTEB) {
    btnTEB.addEventListener('click', function() {
        
    // Display console text
    console.log('Button clicked!');

    // Get the content of the specific class
    document.getElementById('gtx-trans').addEventListener('click', function() {
        
        // Display console text
        console.log('Button clicked!');
    
        // Get the content of the specific class
        var content = document.querySelectorAll('#SL_shadow_translation_result');
         let englsih = content[0].children[0].textContent
         var bangla = content[0].children[3].textContent

         if (bangla.length < 5) {
             bangla = content[0].children[4].textContent
         }
    
         var content = englsih + " : " + bangla;
    
         content[0].children[4].textContent
        // Copy the content to the clipboard
        navigator.clipboard.writeText(content)
            .then(function() {
                console.log('Content copied to clipboard: ' + content);
            })
            .catch(function(err) {
                console.error('Error copying content to clipboard: ', err);
            });
        });
     let englsih = content[0].innerText;
     let bangla = content[1].innerText;

     var content = englsih + " : " + bangla;


    // Copy the content to the clipboard
    navigator.clipboard.writeText(content)
        .then(function() {
            console.log('Content copied to clipboard: ' + content);
        })
        .catch(function(err) {
            console.error('Error copying content to clipboard: ', err);
        });
    });
}

// 
var myUiBtn = document.getElementById("btnTEB1");
var TextShowTEB = document.getElementById("TextShowTEB");


myUiBtn.addEventListener('click', ()=>{
    

    var btnTEB =  document.getElementById('SL_button');
    TextShowTEB.innerText = "btnTEB";
});

