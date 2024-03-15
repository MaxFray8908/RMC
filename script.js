import {entrantsData, judgeData} from "./data.js";
import {start} from "./algoritm.js";

let countJudge = 45;
let countEntrants = 58;

// let arrayCountJudge = [];
// let arrayCountEntrants = [];

// let group_1 = {
//   "Judge" : [],
//   "Entrants_1" : [],
//   "Entrants_2" : [],
// };
// let group_2 = {
//   "Judge" : [],
//   "Entrants_1" : [],
//   "Entrants_2" : [],
// };
// let group_3 = {
//   "Judge" : [],
//   "Entrants_1" : [],
//   "Entrants_2" : [],
// };
// let group_4 = {
//   "Judge" : [],
//   "Entrants_1" : [],
//   "Entrants_2" : [],
// };
// let group_5 = {
//   "Judge" : [],
//   "Entrants_1" : [],
//   "Entrants_2" : [],
// };
// let group_6 = {
//   "Judge" : [],
//   "Entrants_1" : [],
//   "Entrants_2" : [],
// };

// let countJudge = 45;
// let countEntrants = 58;

// function distributionCount(number, role) {
//   for (let i = 6; i !== 0; i--) {
//     let count = Math.ceil(number/i);
//     number = number - count;

//     if (role === "judge") {
//       arrayCountJudge.push(count);
//     }
//     else if (role === "entrants") {
//       let i = Math.ceil(count/2); 
//       arrayCountEntrants.push([i, count - i]);
//     }
//   }
// }

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function distributionJudge(n, group) {

//   for (let i = arrayCountJudge[n]; i !== 0; i--) {
//     let number = getRandomInt(0, judgeData.length);
//     group.Judge.push(judgeData[number]);
//     judgeData.splice(number, 1)
//   }
// }

// distributionCount(countJudge, "judge");
// distributionCount(countEntrants, "entrants");

// distributionJudge(0, group_1);
// distributionJudge(1, group_2);
// distributionJudge(2, group_3);
// distributionJudge(3, group_4);
// distributionJudge(4, group_5);
// distributionJudge(5, group_6);



// for (let i = arrayCountEntrants[0][0]; i !== 0; i--) {

//   let number = getRandomInt(0, entrantsData.length);
//   let mistake = false;

//   for (let item of group_1.Judge) {
//     if (item.conflict === entrantsData[number].name) {
//       mistake = true;
//       break;
//     }
//   }

//   if (mistake) {i++; continue};

//   group_1.Entrants_1.push(entrantsData[number]);
//   entrantsData.splice(number, 1);
// }


// for (let i = arrayCountEntrants[0][1]; i !== 0; i--) {

//   let number = getRandomInt(0, entrantsData.length);
//   let mistake = false;

//   for (let item of group_1.Judge) {
//     if (item.conflict === entrantsData[number].name) {
//       mistake = true;
//       break;
//     }
//   }

//   if (mistake) {i++; continue};

//   group_1.Entrants_2.push(entrantsData[number]);
//   entrantsData.splice(number, 1);
// }



// let arrayNameGroup = [group_1, group_2, group_3, group_4, group_5, group_6];
// let arrayNameSubgroup = ["Entrants_1", "Entrants_2"]

// function passage (m, entrant, repeat) {

//   let testidet = true;
//   let check = true;

//   while (testidet) {
//     for (let item of arrayNameGroup[m].Judge) { // проходим по жюри группы
//       check = true;

//       if (item.conflict.indexOf(entrant.name) !== -1) {
//         // console.log("Жюри " + item.conflict + " Участник " + entrant.name);
//         --m;
//         check = false;

//         if (m < 0) { 
//           // console.log("return"); 
//           return "mistake"} 
//         break;
//       }

//     }
//     if (check) {
//       return m;
//     }
//   }
// }

// function checkEntrant (k, numberGroup) {

//   for (let h = 0; h < 2; h++) {

//     // console.log(numberGroup);
//     // console.log(arrayNameGroup[numberGroup]);

//     for (let itemEntrant of arrayNameGroup[numberGroup][arrayNameSubgroup[h]]) {
//       // console.log("index" + (arrayNameGroup[numberGroup][arrayNameSubgroup[h]]).indexOf(itemEntrant));
//       let mistake = false;

//       for (let item of arrayNameGroup[k].Judge) { // проходим по жюри группы
  
//         if (item.conflict.indexOf(itemEntrant.name) !== -1) {
//           console.log("Жюри " + item.conflict + " Участник " + itemEntrant.name);
//           mistake = true;
//           break;
//         }
//       }

//       if (!mistake) { 
//         return [itemEntrant, h, (arrayNameGroup[numberGroup][arrayNameSubgroup[h]]).indexOf(itemEntrant)];
//       }
//     }
//   }

//   return false;
// }

// for (let k = 1; k < 6; k++) { // выбираем группу

//   for (let h = 0; h < 2; h++) { // выбираем подгруппу
  
//     for (let i = arrayCountEntrants[k][h]; i !== 0; i--) { // количество участников в подгруппе

//       let randomNumber = getRandomInt(0, entrantsData.length);
//       let entrant = entrantsData[randomNumber];

//       let numberGroup = passage(k, entrant, false);

//       if (numberGroup === k) {
//         arrayNameGroup[k][arrayNameSubgroup[h]].push(entrant);
//         entrantsData.splice(randomNumber, 1);
//       }
//       else if (numberGroup === "mistake") {
//         i++;
//         break;
//       }
//       else {
//         let nameEntrant = checkEntrant (k, numberGroup);
        
//         if (nameEntrant) {
//           let oldName = nameEntrant[0];
//           arrayNameGroup[numberGroup][arrayNameSubgroup[nameEntrant[1]]][nameEntrant[2]] = entrant;
//           arrayNameGroup[k][arrayNameSubgroup[h]].push(oldName);
//           entrantsData.splice(randomNumber, 1);
//         }
//       }
      
//     }
//   }
// }

// console.log(group_1);
// console.log(group_2);
// console.log(group_3);
// console.log(group_4);
// console.log(group_5);
// console.log(group_6);

// console.log(entrantsData);
// console.log(judgeData);




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
      }
    }
    else if (card.classList.contains("card-judge")) {
      if (card.classList.contains("delete")) {
        countJudge++;
        card.classList.remove("delete");
      }
      else {
        countJudge--;
        card.classList.add("delete");
      }
    }
  }
}
wrapperCard.addEventListener('click', deleteCard)


// 

document.addEventListener('keyup', function(event){
  if (event.key === "Enter") {
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
