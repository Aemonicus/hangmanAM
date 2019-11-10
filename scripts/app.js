// Primitive value: String, number, Boolean, null, undefined


// Construction des Objets/Arrays/Function avec leur Prototypes (qui possèdent les fameuses fonctions natives) dans le navigateur

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunction --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null



// HTTP (HyperText Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done




const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

let game1

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  render()
})

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  game1 = new Hangman(puzzle, 5)
  render()
}

const render = () => {
  puzzleEl.innerHTML = ''
  guessesEl.textContent = game1.statusMessage

  game1.puzzle.split('').forEach(letter => {
    const letterEl = document.createElement('span')
    letterEl.textContent = letter
    puzzleEl.appendChild(letterEl)
  });
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then((puzzle) => {
//   console.log(puzzle)
// }).catch((err) => {
//   console.log("TCL: err", `Error: ${err}`)
// })

// getCountry('FR').then((country) => {
//   console.log("TCL: countryCode", country.name)
// }).catch((err) => {
//   console.log("TCL: err", `Error: ${err}`)
// })


// // Challenge promise chaining avec deux api, celle gratuite de getCountry et l'autre de getLocation
// // Dans la fonction getLocation, on récupère les datas de la fonction getCountry
// getLocation().then((location) => {
//   return getCountry(location.country)
// }).then((country) => {
//   console.log(country.name)
// }).catch((err) => {
//   console.log(`Error: ${err}`)
// })


// // Challenge async-await
// getCurrentCountry().then((country) => {
//   console.log(country.name)
// }).catch((error) => {
//   console.log(error)
// })




// // FETCH
// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//   if (response.status === 200) {
//     return response.json()
//   } else {
//     throw new Error('Code pourri')
//   }
// }).then((data) => {
//   console.log(data.puzzle)
// }).catch((err) => {
//   console.log(err)
// })


// // Making an HTTP request
// // Création de la requête sous forme d'un objet
// const request = new XMLHttpRequest()

// // Ajout d'un écouteur d'évènement sur la requête
// request.addEventListener('readystatechange', (e) => {
//   // Si l'écouteur nous dit que la réponse est terminée ET que la réponse est réussie, alors la réponse nous envoie un JSON que l'on va transformer et envoyer dans une variable/constante
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     console.log(e.target.status)
//     const data = JSON.parse(e.target.responseText)
//     console.log(data)
//     // Et si la réponse est terminée MAIS que la réponse n'a pas pu aboutir, on prévoit un message d'erreur
//   } else if (e.target.readyState === 4) {
//     console.log('Error occured')
//   }
// })

// // On précise les caractéristiques de la requête : quel est sa méthode et quelle est l'adresse
// request.open('GET', 'http://puzzle.mead.io/puzzle')
// request.send()






// // EXERCICE REQUETE HTTP
// // Chercher le nom d'un pays dans une api qui fournit les noms/codes de tous les pays

// const countryCode = "FR"
// console.log("TCL: countryCode", countryCode)

// const request = new XMLHttpRequest()

// request.addEventListener('readystatechange', (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText)
//     const country = data.find((country) => country.alpha2Code === countryCode)
// console.log("TCL: countryCode", countryCode)
//     console.log(country.name)
//   } else if (e.target.readyState === 4) {
//     console.log('requête terminée mais 0 résultat')
//   }
// })


// request.open('GET', 'http://restcountries.eu/rest/v2/all')
// request.send()
