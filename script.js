const compteur = document.querySelector('#compteur')
const btnMoins = document.querySelector('#bouton-moins')
const btnPlus = document.querySelector('#bouton-plus')
const btnReset = document.querySelector('#bouton-reset')
const inputIncrementer = document.querySelector('#valeur-inc')
const inputDecrementer = document.querySelector('#valeur-dec')
const log = document.querySelector('.event-log-contents')
const inputLimiteHaute = document.querySelector('#limite-haute')
const inputLimiteBasse = document.querySelector('#limite-basse')
const notification = document.querySelector('#notification')
let texteNotification = document.querySelector('#notification-texte')

let nbrDeClics = 0

// Fonction incrémenter

function incrementer() {
  nbrDeClics = nbrDeClics + Number(inputIncrementer.value)
  test()
}
// Fonction décrémenter

function decrementer() {
  nbrDeClics = nbrDeClics - Number(inputDecrementer.value)
  test()
}

function test() {
  if (nbrDeClics <= Number(inputLimiteBasse.value)) {
    nbrDeClics = Number(inputLimiteBasse.value)
    //Affichage de la notification limite atteinte
    texteNotification.textContent = 'Limite basse atteinte'
    notification.classList.add('afficher')
    compteur.classList.add('limite-atteinte')
    window.setTimeout(function () {
      notification.classList.remove('afficher')
    }, 3000)
    compteur.textContent = nbrDeClics
  } else {
    compteur.classList.remove('limite-atteinte')
    compteur.textContent = nbrDeClics
  }
  if (nbrDeClics >= Number(inputLimiteHaute.value)) {
    nbrDeClics = Number(inputLimiteHaute.value)
    //Affichage de la notification limite atteinte
    texteNotification.textContent = 'Limite haute atteinte'
    notification.classList.add('afficher')
    compteur.classList.add('limite-atteinte')
    window.setTimeout(function () {
      notification.classList.remove('afficher')
    }, 3000)
    compteur.textContent = nbrDeClics
  } else {
    notification.classList.remove('limite-atteinte')
    compteur.textContent = nbrDeClics
  }
}
// Fonction reset

function reset() {
  nbrDeClics = 0
  test()
}
// Utilisation des diverses fonctions avec bouton plus , bouton moins et bouton reset .

btnPlus.addEventListener('click', incrementer)
btnMoins.addEventListener('click', decrementer)
btnReset.addEventListener('click', reset)

// Détection d'un clic sur la page

document.addEventListener('keydown', (event) => {
  const nomTouche = event.key
  // Si clic sur touche + incrémentation

  if (nomTouche === 'p') {
    incrementer()
  }

  // Si clic sur touche - décrémentation

  if (nomTouche === 'm') {
    decrementer()
  }
})
