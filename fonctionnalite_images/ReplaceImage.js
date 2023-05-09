

// Appel de l'API qui génére une image aléatoire d'un insecte préalablement demandé à l'utilisateur + changement de l'image
async function imageApi(){

  let theme = prompt("Quel thème voulez-vous ?")
  const API_KEY =  '36017207-2ec42e2823cd61998591ebd85';
  let URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent (theme);
  const url = await fetch(URL);
  const json = await url.json();
  let array = json.hits

  let formation = [];

  for (const image of array){
    console.log(formation.push(image.webformatURL))
  }

  let images = document.getElementsByTagName('img')
  let randomIndex = Math.floor(Math.random() * formation.length);
  for (let i = 0; i < images.length; i++){
  images[i].src = formation[randomIndex]
  }

  //const randomImage = Math.floor(Math.random()*formation.length);
  //document.getElementsByTagName("img").src = formation[randomImage]
}

imageApi()
