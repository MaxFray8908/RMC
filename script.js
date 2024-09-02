let wrapperCard = document.querySelector('.wrapper-cards');

fetch('test.json')
  .then(response => response.json())
  .then(jsonData => {
    addCards(jsonData);
    calcWinner(jsonData);
});

function addCards(data) {
  for(let item of data) {
    // console.log(jsonData);

    let i = Number(item[0][1]);
    // console.log(i);
    let card = "";

    if (i % 2 === 0) {
      card = `<div class="card card-open">
        <span class="span-number">${i}</span>
      </div>`;
    }
    else if (i % 3 === 0){
      card = `<div class="card card-open span-4">
        <span class="span-number">${i}</span>
      </div>`;
    }
    else if (i % 5 === 0){
      card = `<div class="card card-open span-5">
        <span class="span-number">${i}</span>
      </div>`;
    }
    else if (i % 7 === 0){
      card = `<div class="card card-open span-3">
        <span class="span-number">${i}</span>
      </div>`;
    }
    else {
      card = `<div class="card card-open span-2">
        <span class="span-number">${i}</span>
      </div>`;
    }

    wrapperCard.insertAdjacentHTML('beforeend', card);

  }
}

let numberWinner;
let countPerson;

function calcWinner(data) {
  countPerson = data.length;
  let randomNumber = getRandomInt(countPerson);
  numberWinner = data[randomNumber][0][1];
  // console.log(countPerson);
  // console.log(randomNumber);
  // console.log("numberWinner");
  // console.log(numberWinner);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



let progress = document.querySelector('.animated-progress span');

let buttonStart = document.querySelector('.button-start');

function startLottery() {
  console.log(numberWinner);

  progress.animate(
    {
      width: "100%",
    },
    { 
      duration: 10000, 
      fill: 'forwards' }
  );

  let timerId = setInterval(() => {
    
    let countCardsDelete = Math.ceil(countPerson / 5);

    for (let i = 0; i < countCardsDelete; i++) {
      let openCards = document.querySelectorAll('.card-open');
      let m = getRandomInt(openCards.length);

      if (openCards.length === 1) {
        clearInterval(timerId);
      }
      else if (openCards[m].innerText !== numberWinner) {
        openCards[m].classList.remove('card-open');
        openCards[m].classList.add('card-delete');
      }
      else {
        i--;
      }
    }
  }, 2000);
}

buttonStart.addEventListener("click", startLottery);
