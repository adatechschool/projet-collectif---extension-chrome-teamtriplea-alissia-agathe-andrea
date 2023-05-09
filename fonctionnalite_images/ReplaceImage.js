function findImg(){
//let allImages = document.querySelectorAll("img");
let allImages = document.getElementsByTagName('img')
//console.log(allImages)
    return allImages
}

//findImg()



function imageChange(){
  console.log('images changing');
  let filenames = ['images/IconeRemplacement.png','images/sos.png'];
  //let filenames = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5qRC4YCAgWeXtRA7vu6KMtkKCsVA8h1FUW81szGZR0A&s']
  let images = document.getElementsByTagName('img')
  let test = Math.floor(Math.random() * filenames.length);
  for (let i = 0; i < images.length; i++){
    images[i].src = filenames[test];
    test++;
    if (test > 8){
      random = 0;
    }
  }
  //for(imgElt of images){
    //console.log(imgElt.src)
    //let test = Math.floor(Math.random() * filenames.length);
    //let file = filenames[test]
    //let url = chrome.runtime.getURL(file);
    //console.log(url)
    // utilisation createElement et créer une nouvelle balise img
    //imgElt.src = url;
  }

imageChange()

//function buttonImage(){
//  let images = findImg()
//  for (let i = 0; i < images.length; i++){
        //let button = document.createElement('input')
        // inserer une div avec un id juste avant l'image
   //     images.insertAdjacentHTML('afterend', '<div "')
 //   }
//}

//buttonImage()

