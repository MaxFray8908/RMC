import {entrantsData, judgeData} from "./data.js";

let wrapperSubgroup1 = document.querySelector(".group-1 .subgroup-1");
let wrapperSubgroup2 = document.querySelector(".group-1 .subgroup-2");
let wrapperJudge = document.querySelector(".group-1 .judge");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let main = document.querySelector(".main");

function openName(event) {

  if (event.target.classList.contains("wrapper-name") || event.target.classList.contains("text-name")){
    let test = event.target.closest(".wrapper-name");
    test.classList.add("open");
  }
}
main.addEventListener('click', openName);


let loader = document.querySelector(".loader");


function distribution() {
  for (let i = 0; i < 6; i++) {
    let numberArr = getRandomInt(0, entrantsData.length);
    let name = `<div class="wrapper-name">
                  <p class="text-name">${entrantsData[numberArr].name}</p>
                </div>`
    wrapperSubgroup1.insertAdjacentHTML("beforeend", name);
    entrantsData.splice(numberArr, 1)
  }
  
  for (let i = 0; i < 6; i++) {
    let numberArr = getRandomInt(0, entrantsData.length);
    let name = `<div class="wrapper-name">
                  <p class="text-name">${entrantsData[numberArr].name}</p>
                </div>`
    wrapperSubgroup2.insertAdjacentHTML("beforeend", name);
    entrantsData.splice(numberArr, 1)
  }
  
  for (let i = 0; i < 6; i++) {
    let numberArr = getRandomInt(0, judgeData.length);
    let name = `<div class="wrapper-name">
                  <p class="text-name">${judgeData[numberArr].name}</p>
                </div>`
    wrapperJudge.insertAdjacentHTML("beforeend", name);
    judgeData.splice(numberArr, 1)
  }

  loader.classList.remove("open");
}

let button = document.querySelector(".button");


function start() {

  button.classList.add("hide");
  loader.classList.add("open");

  setTimeout(distribution, 3000);
  
}

button.addEventListener('click', start)