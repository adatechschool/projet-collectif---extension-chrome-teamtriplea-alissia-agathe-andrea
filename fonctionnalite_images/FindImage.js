// Récupere les éléments img grace à querySelectorAll
// Pour chaque element récupéré : Mettre le bouton SOS dessus

function findImg(){
//let allImages = document.querySelectorAll("img");
let allImages = document.getElementsByTagName('img')
console.log(allImages)
    return allImages
}


function imageChange(){

}

function buttonImage(){
    let images = findImg()
    for (let i = 0; i < images.length; i++){
        
    }
}

buttonImage()