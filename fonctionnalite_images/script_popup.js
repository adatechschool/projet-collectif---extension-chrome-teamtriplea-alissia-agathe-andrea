document.addEventListener('DOMContentLoaded', function (){  
    //Ecoute du bouton
    document.querySelector('.button').addEventListener('click', onclick) 
    
    //Dans le local storage, on stocke la clé button comme false
    chrome.storage.local.set({button: false})
    
    function onclick(){
        //Changement de la valeur de button pour pouvoir écouter dans ReplaceImage.js

        //Récupération de la valeur de button; Assignation de la valeur true ou false
        chrome.storage.local.get(["button"]).then((result) => {
            console.log("le button est" + result.button);
        
            if (result.button == false){ 
                console.log("toggle if =" + result.button);
                chrome.storage.local.set({button: true})
                
            } else {
                console.log("toggle else = " + result.button);
                chrome.storage.local.set({button: false})
                

            }
        })
    }
        
});