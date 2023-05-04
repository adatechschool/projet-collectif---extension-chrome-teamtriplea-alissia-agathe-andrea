// Récupere les éléments img grace à querySelectorAll
// Pour chaque element récupéré : Mettre le bouton SOS dessus

function findImg(){
let allImages = document.querySelectorAll("img");
console.log(allImages)
    return allImages
}

findImg()