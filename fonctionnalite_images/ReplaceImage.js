chrome.storage.onChanged.addListener(() => {
  chrome.storage.local.get(["button"]).then ((result) => {
      console.log(result.button)
      console.log("coucou")
      if (result.button == true){
          console.log("Button click ok")
          imageApi();
      } else {
          console.log("Button unclick");
      }
  })})


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
    formation.push(image.webformatURL)
  }
  console.log(formation)

  let images = document.getElementsByTagName('img')
  console.log(images)
  for (let i = 0; i < images.length; i++){
  let randomIndex = Math.floor(Math.random() * formation.length);
  images[i].src = formation[randomIndex]
  }
}

// Permet de changer l'image en cliquant sur 1 + R
var keys = {};
function trackMultipleKeyStroke (e) {
  e = e || event;
  e.which = e.which || e.keyCode;

  keys[e.which] = e.type === 'keydown';

  if (keys[82] && keys[97]) {
    keys[82] = false 
    keys[97] = false
    console.log(keys)
    console.log('You pressed 1 + R, images changed');
    imageApi()
  }
}

function addEvent(element, event, func) {
  if (element.attachEvent) {
      return element.attachEvent('on' + event, func);
  } else {
      return element.addEventListener(event, func, false);
  }
}

addEvent(window, "keydown", trackMultipleKeyStroke);
addEvent(window, "keyup", trackMultipleKeyStroke);

