const productsArray = [
  // Produto 1
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  // Produto 2
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  // produto 3
  {
    image: "assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$99,00",
    type: "paintings",
  },
  // produto 4
  {
    image: "assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$275,00",
    type: "paintings",
  },
  // produto 5
  {
    image: "assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$160,00",
    type: "paintings",
  },
  // produto 6
  {
    image: "assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$120,00",
    type: "paintings",
  },

  // produto 7
  {
    image: "assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$700,00",
    type: "Action Figures",
  },
  // produto 8
  {
    image: "assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$950,00",
    type: "Action Figures",
  },
  // produto 9
  {
    image: "assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$1030,00",
    type: "Action Figures",
  },
  // produto 10
  {
    image: "assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$870,00",
    type: "Action Figures",
  },
  // produto 11
  {
    image: "assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$510,00",
    type: "Action Figures",
  },
];

const actionFiguresArray = [];
const paintingsArray = [];

function separateItems(productsArray) {
  for (let i = 0; i < productsArray.length; i++) {
    if (productsArray[i].type === 'Action Figures') {
      actionFiguresArray.push(productsArray[i]);
    } else {
      paintingsArray.push(productsArray[i]);
    }
  }
} 

separateItems(productsArray);
function renderPaintings(paintings){

  for (let i = 0; i < paintings.length; i++) {
    const productList = document.querySelector(".paintings");
    const card = document.createElement("li");
    const cardImage = document.createElement("img");
    const cardName = document.createElement("h3");
    const price = document.createElement("p");
    
    cardImage.src = paintings[i].image;
    cardName.innerText = paintings[i].name;
    cardName.classList.add("name");
    price.innerText = paintings[i].price;
    
    card.append(cardImage, cardName, price);
    productList.appendChild(card);
  }
}
renderPaintings(paintingsArray);

function renderActions(action){

  for (let i = 0; i < action.length; i++) {
    const productList = document.querySelector(".action-figure");
    const card = document.createElement("li");
    const cardImage = document.createElement("img");
    const cardName = document.createElement("h3");
    const price = document.createElement("p");
    
    cardImage.src = action[i].image;
    cardName.innerText = action[i].name;
    cardName.classList.add("name");
    price.innerText = action[i].price;
    
    card.append(cardImage, cardName, price);
    productList.appendChild(card);
  }
}
renderActions(actionFiguresArray);