import {entrantsData, judgeData} from "./data.js";

let group_1 = { "Judge" : [], "Entrants_1" : [], "Entrants_2" : [], };
let group_2 = { "Judge" : [], "Entrants_1" : [], "Entrants_2" : [], };
let group_3 = { "Judge" : [], "Entrants_1" : [], "Entrants_2" : [], };
let group_4 = { "Judge" : [], "Entrants_1" : [], "Entrants_2" : [], };
let group_5 = { "Judge" : [], "Entrants_1" : [], "Entrants_2" : [], };
let group_6 = { "Judge" : [], "Entrants_1" : [], "Entrants_2" : [], };

let arrayNameGroup = [group_1, group_2, group_3, group_4, group_5, group_6];
let arrayNameSubgroup = ["Entrants_1", "Entrants_2"]

let arrayCountJudge = [];
let arrayCountEntrants = [];

function distributionCount(number, role) {
  for (let i = 6; i !== 0; i--) {
    let count = Math.ceil(number/i);
    number = number - count;

    if (role === "judge") {
      arrayCountJudge.push(count);
    }
    else if (role === "entrants") {
      let i = Math.ceil(count/2); 
      arrayCountEntrants.push([i, count - i]);
    }
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function distributionJudge(n, group) {

  for (let i = arrayCountJudge[n]; i !== 0; i--) {
    let number = getRandomInt(0, judgeData.length);
    group.Judge.push(judgeData[number]);
    judgeData.splice(number, 1)
  }
}

function passage (m, entrant) {

  let check = true;

  while (true) {
    for (let item of arrayNameGroup[m].Judge) { // проходим по жюри группы
      check = true;

      if (item.conflict.indexOf(entrant.name) !== -1) {
        --m;
        check = false;

        if (m < 0) { return "mistake" } 
        break;
      }

    }
    if (check) {
      return m;
    }
  }
}

function checkEntrant (k, numberGroup) {

  for (let h = 0; h < 2; h++) {

    for (let itemEntrant of arrayNameGroup[numberGroup][arrayNameSubgroup[h]]) {
      let mistake = false;

      for (let item of arrayNameGroup[k].Judge) { // проходим по жюри группы
  
        if (item.conflict.indexOf(itemEntrant.name) !== -1) {
          mistake = true;
          break;
        }
      }

      if (!mistake) { 
        return [itemEntrant, h, (arrayNameGroup[numberGroup][arrayNameSubgroup[h]]).indexOf(itemEntrant)];
      }
    }
  }
  return false;
}


function testRun() {

  for (let k = 0; k < 6; k++) { // выбираем группу
  
    for (let h = 0; h < 2; h++) { // выбираем подгруппу
    
      for (let i = arrayCountEntrants[k][h]; i !== 0; i--) { // количество участников в подгруппе
  
        let randomNumber = getRandomInt(0, entrantsData.length);
        let entrant = entrantsData[randomNumber];
  
        let numberGroup = passage(k, entrant);
  
        if (numberGroup === k) {
          arrayNameGroup[k][arrayNameSubgroup[h]].push(entrant);
          entrantsData.splice(randomNumber, 1);
        }
        else if (numberGroup === "mistake") {
          i++;
          continue;
        }
        else {
          let nameEntrant = checkEntrant (k, numberGroup);
          
          if (nameEntrant) {
            let oldName = nameEntrant[0];
            arrayNameGroup[numberGroup][arrayNameSubgroup[nameEntrant[1]]][nameEntrant[2]] = entrant;
            arrayNameGroup[k][arrayNameSubgroup[h]].push(oldName);
            entrantsData.splice(randomNumber, 1);
          }
        }

      }
    }
  }
}

function addClosedCard () {

  for (let i = 0; i < arrayNameGroup.length; i++) {
    let group = arrayNameGroup[i];

    for (let h = 0; h < arrayNameSubgroup.length; h++) {
      let subgroupName = arrayNameSubgroup[h];

      for (let j = 0; j < group[subgroupName].length; j++) {
        let person = group[subgroupName][j];

        let wrapperSubgroup1 = document.querySelector(`.section_group-${i + 1} .wrapper_subgroup-1`);
        let wrapperSubgroup2 = document.querySelector(`.section_group-${i + 1} .section_groups__subgroup-2_name`);

        let card = `<div class="card card-entrant card__closed card-${j + 1}">
                      <p class="card-text">${person.name}</p>
                    </div>`;
        
        if (h === 0) { wrapperSubgroup1.insertAdjacentHTML("beforeend", card); }
        else { wrapperSubgroup2.insertAdjacentHTML("beforebegin", card); }
      }
    }

    for (let k = 0; k < group.Judge.length; k++) {
      let person = group.Judge[k].name.split(" ");

      let wrapperJudge = document.querySelector(`.section_group-${i + 1} .wrapper-judge`);

      let card = `<div class="card card-judge card__closed card-${k + 1}">
                            <p class="card-text">${person[0]} <br> ${person[1]} <br> ${person[2]}</p>
                  </div>`;

      wrapperJudge.insertAdjacentHTML("beforeend", card);
    }
  }

}

function start(countJudge, countEntrants) {
  distributionCount(countJudge, "judge");
  distributionCount(countEntrants, "entrants");

  for (let i = 0; i < 6; i++) {
    distributionJudge(i, arrayNameGroup[i]);
  }

  testRun();

  // console.log(group_1);
  // console.log(group_2);
  // console.log(group_3);
  // console.log(group_4);
  // console.log(group_5);
  // console.log(group_6);

  addClosedCard();

  const dataUri = "data:text/json;charset=utf8," + encodeURIComponent(JSON.stringify(arrayNameGroup));
  const anchorElement = document.createElement('a');
  anchorElement.href = dataUri;
  anchorElement.download = `Groups.json`;
  document.body.appendChild(anchorElement);
  anchorElement.click();
  document.body.removeChild(anchorElement);
  // console.log(dataUri)
}

export {start}