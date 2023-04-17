const cardArray = [
{    name: "goofy", 
     img:   "images/goofy.jpg" 
},
{ 
    name: "elsa", 
    img:   "images/elsa.jpg" 
},
{ 
    name: "gini", 
    img:   "images/gini.jpg" 
},
{ 
    name: "stitch", 
    img:   "images/stitch.jpg" 
},
{ 
    name: "monstersInc", 
    img:   "images/monstersInc.jpg" 
},
{ 
    name: "mickey", 
    img:   "images/mickey.jpg" 
},

{    name: "goofy", 
     img:   "images/goofy.jpg" 
},
{ 
    name: "elsa", 
    img:   "images/elsa.jpg" 
},
{ 
    name: "gini", 
    img:   "images/gini.jpg" 
},
{ 
    name: "stitch", 
    img:   "images/stitch.jpg" 
},
{ 
    name: "monstersInc", 
    img:   "images/monstersInc.jpg" 
},
{ 
    name: "mickey", 
    img:   "images/mickey.jpg" 
},

]

cardArray.sort(() => {
   0.5 - Math.random()
})

const gridDisplay = document.querySelector("#grid")
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []
let score 


function creatreBoard() {
    for (let i = 0; i < 12; i++) {
        const card = document.createElement('img')
        // card.classList.add("card")
        card.setAttribute("src", "images/logo.jpg")
        card.setAttribute("data-id",i)
        card.addEventListener("click", flipCard)
        gridDisplay.appendChild(card)
    }
    cardsChosen = []
    cardsChosenIds = []
}

creatreBoard()

function checkMatch() {
    const cards = document.querySelectorAll("img")
    if (cardsChosen[0] == cardsChosen[1]) {
        alert("You found a match!")
        cards[cardsChosenIds[0]].setAttribute('src', 'images/logo2.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/logo2.png')
        cards[cardsChosenIds[0]].removeEventListener("click", flipCard)
        cards[cardsChosenIds[1]].removeEventListener("click", flipCard)
        cardsChosen = []
        cardsChosenIds = []
    }else {
        alert("not a match!")
        cards[cardsChosenIds[0]].setAttribute('src', 'images/logo.jpg')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/logo.jpg')
        cardsChosen = []
        cardsChosenIds = []
    }
    cardsChosen = []
    cardsChosenIds = []
}


function flipCard() {
    const cardId = this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    //if the chosen array has 2 then reset the array to empty. 
    this.setAttribute("src", cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }

}

















