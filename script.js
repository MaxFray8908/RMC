import {entrantsData, judgeData} from "./data.js";
import {start} from "./algoritm.js";

let countJudge = 45;
let countEntrants = 58;

function fillSectionListPeople () {
  let sectionListEntrants = document.querySelector(".list__entrants");
  let sectionListJudge = document.querySelector(".list__judge");

  for (let i = 0; i < entrantsData.length; i++) {
    let card = `<div class="card-entrants">
                  <p class="card__text">${entrantsData[i].kname}</p>
                </div>`
    sectionListEntrants.insertAdjacentHTML("beforeend", card);
  }
  
  for (let i = 0; i < judgeData.length; i++) {
    let card = `<div class="card-judge">
                  <p class="card__text">${judgeData[i].kname}</p>
                </div>`
    sectionListJudge.insertAdjacentHTML("beforeend", card);
  }
}
fillSectionListPeople();


let wrapperCard = document.querySelector(".section_listPeople");

function deleteCard (event) {
  if (event.target.classList.contains("card__text")) {
    let card = event.target.parentElement;

    if (card.classList.contains("card-entrants")) {
      if (card.classList.contains("delete")) {
        countEntrants++;
        card.classList.remove("delete");
      }
      else {
        card.classList.add("delete");
        countEntrants--;
        
        let index = entrantsData.findIndex(item => item.kname === event.target.innerHTML);
        entrantsData.splice(index, 1);
      };
      
    }
    else if (card.classList.contains("card-judge")) {
      if (card.classList.contains("delete")) {
        countJudge++;
        card.classList.remove("delete");
      }
      else {
        countJudge--;
        card.classList.add("delete");

        let index = judgeData.findIndex(item => item.kname === event.target.innerHTML);
        judgeData.splice(index, 1);
      }
    }
  }
}
wrapperCard.addEventListener('click', deleteCard)


// 

document.addEventListener('keyup', function(event){


  if (event.key === "Enter") {
    let loader = document.querySelector(".wrapper-loader");
    loader.classList.add("open");
    setTimeout(() => {loader.classList.remove("open"); window.scroll(0, 500);}, 3000);
    start(countJudge, countEntrants);
  }
});


let main = document.querySelector(".main");

function openCard (event) {
  if (event.target.classList.contains("card-text")) {
    let card = event.target.parentElement;
    card.classList.remove("card__closed");
  }
}

main.addEventListener('click', openCard)

// let wrapperSubgroup1 = document.querySelector(".group-1 .subgroup-1");
// let wrapperSubgroup2 = document.querySelector(".group-1 .subgroup-2");
// let wrapperJudge = document.querySelector(".group-1 .judge");



// let main = document.querySelector(".main");

// function openName(event) {

//   if (event.target.classList.contains("wrapper-name") || event.target.classList.contains("text-name")){
//     let test = event.target.closest(".wrapper-name");
//     test.classList.add("open");
//   }
// }
// main.addEventListener('click', openName);


// let loader = document.querySelector(".loader");


// function distribution() {
//   for (let i = 0; i < 6; i++) {
//     let numberArr = getRandomInt(0, entrantsData.length);
//     let name = `<div class="wrapper-name">
//                   <p class="text-name">${entrantsData[numberArr].name}</p>
//                 </div>`
//     wrapperSubgroup1.insertAdjacentHTML("beforeend", name);
//     entrantsData.splice(numberArr, 1)
//   }
  
//   for (let i = 0; i < 6; i++) {
//     let numberArr = getRandomInt(0, entrantsData.length);
//     let name = `<div class="wrapper-name">
//                   <p class="text-name">${entrantsData[numberArr].name}</p>
//                 </div>`
//     wrapperSubgroup2.insertAdjacentHTML("beforeend", name);
//     entrantsData.splice(numberArr, 1)
//   }
  
//   for (let i = 0; i < 6; i++) {
//     let numberArr = getRandomInt(0, judgeData.length);
//     let name = `<div class="wrapper-name">
//                   <p class="text-name">${judgeData[numberArr].name}</p>
//                 </div>`
//     wrapperJudge.insertAdjacentHTML("beforeend", name);
//     judgeData.splice(numberArr, 1)
//   }

//   loader.classList.remove("open");
// }

// let button = document.querySelector(".button");


// function start() {

//   button.classList.add("hide");
//   loader.classList.add("open");

//   setTimeout(distribution, 3000);
  
// }

// button.addEventListener('click', start)
