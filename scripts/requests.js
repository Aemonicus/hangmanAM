// // VERSION CALLBACK

// const getPuzzle = (callback) => {
//   // Making an HTTP request
//   // Création de la requête sous forme d'un objet
//   const request = new XMLHttpRequest()

//   // Ajout d'un écouteur d'évènement sur la requête
//   request.addEventListener('readystatechange', (e) => {

//     // Si l'écouteur nous dit que la réponse est terminée ET que la réponse est réussie, alors la réponse nous envoie un JSON que l'on va transformer et envoyer dans une variable/constante
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText)
//       callback(undefined, data.puzzle)
//       // Et si la réponse est terminée MAIS que la réponse n'a pas pu aboutir, on prévoit un message d'erreur

//     } else if (e.target.readyState === 4) {
//       callback('Error occured', undefined)
//     }
//   })

//   // On précise les caractéristiques de la requête : quelle est sa méthode et quelle est l'adresse
//   request.open('GET', 'http://puzzle.mead.io/puzzle')
//   request.send()
// }



// // VERSION PROMISE

// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//   const request = new XMLHttpRequest()

//   request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText)
//       resolve(data.puzzle)
//     } else if (e.target.readyState === 4) {
//       reject('Error')
//     }
//   })

//   request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//   request.send()
// })




// // VERSION FETCH

// const getPuzzle = (wordCount) => {
//   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//     if (response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error('Error on the way')
//     }
//   }).then((data) => {
//     return data.puzzle
//   })
// }




// VERSION ASYNC AWAIT

const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to get puzzle')
  }
}






// // VERSION CALLBACK

// const getCountry = (countryCode, callback) => {
//   const countryRequest = new XMLHttpRequest()

//   countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText)
//       const country = data.find((country) => country.alpha2Code === countryCode)
//       callback(undefined, country)
//     } else if (e.target.readyState === 4) {
//       callback('Something wen wrong', undefined)
//     }
//   })

//   countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//   countryRequest.send()
// }




// // VERSION PROMISE

// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//   const countryRequest = new XMLHttpRequest()

//   countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText)
//       const country = data.find((country) => country.alpha2Code === countryCode)
//       resolve(country)
//     } else if (e.target.readyState === 4) {
//       reject('Something wen wrong')
//     }
//   })

//   countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//   countryRequest.send()
// })


// // VERSION FETCH

// const getCountry = (countryCode) => {
//   return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
//     if (response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error('Error on the way')
//     }
//   }).then((data) => {
//     return data.find((country) => country.alpha2Code === countryCode)
//   })
// }



// VERSION ASYNC AWAIT

const getCountry = async (countryCode) => {
  const response = await fetch('http://restcountries.eu/rest/v2/all')
  if (response.status === 200) {
    const data = await response.json()
    return data.find((country) => country.alpha2Code === countryCode)
  } else {
    throw new Error('Dommage')
  }
}

// // Challenge d'une autre api qui fournit une liste de pays mais inscription requise donc..

// const getLocation = () => {
//   return fetch('http...').then((response) => {
//     if (response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error('Youlou dommage')
//     }
//   }).then((data) => {
//     return data
//   })
// }


// // VERSION ASYNC AWAIT

// const getLocation = async () => {
//   const response = await fetch('http:..')
//   if(response.status === 200){
//     return response.json()
//   } else {
//     throw new Error('Erroooooooorrr')
//   }
// }


// // Challenge async await
// const getCurrentCountry = async () => {
//   const location = await getLocation()
//   const country = await getCountry(location.country)
//   return country
// }



// const getLocation = () => {
//   return fetch('http...').then((response) => {
//     if (response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error('Youlou dommage')
//     }
//   }).then((data) => {
//     return data
//   })
// }