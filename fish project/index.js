function changeCount(type, change) {
  let element = document.getElementById(type);
  let count = parseInt(element.innerText);
  count = Math.max(0, count + change);
  element.innerText = count;
  console.log(type, count);
}

// document.getElementById("poisk-button").addEventListener("click", function () {
//   console.log("click");
//   document
//     .getElementById("poisk-form-wrapper")
//     .classList.toggle("poisk-form--visible");
// });

const toAddCadrs = () => {
  let card = document.getElementsByClassName('hotel-card-container')[0];
  let hotelContainer = document.getElementsByClassName('hotel-cards')[0];
  for (let i = 0; i < 6; i++) {
    let newCard = card.cloneNode(true);
    hotelContainer.appendChild(newCard);
  }
}

toAddCadrs();