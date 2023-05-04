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
        //let button = document.createElement('input')
        let baliseImg = getElementByTagName('img')
        baliseImg.insertAdjacentHTML('afterend', '<input type="button" id="button"')
    }
}

buttonImage()


