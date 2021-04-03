let display = document.getElementById('inOutWindow');
let btnWrap = document.getElementById('btnWrapper');
let operBtn = document.getElementById('operBtnWrap');
let topBtn = document.getElementById('topBtn');
let bottomBtn= document.getElementById('bottomBtn');

createBtn();

function createBtn(){
for (let i = 0; i < 9; i++){
    btnWrap.innerHTML += `<button id="${i+1}" class="button${i+1} button"><p class="pNum">${i+1}</p></button>`
}
btnWrap.innerHTML += `<button class="button">0</button>`;
btnWrap.innerHTML += `<button class="button">.</button>`;
btnWrap.innerHTML += `<button class="buttonEqual">=</button>`;
topBtn.innerHTML += `<button class="operBtnStyle ce">CE</button>`;
topBtn.innerHTML += `<button class="operBtnStyle addmenu" id="addMenu">...</button>`;
topBtn.innerHTML += `<button class="operBtnStyle additionalSings">(</button>`;
topBtn.innerHTML += `<button class="operBtnStyle additionalSings">)</button>`;
bottomBtn.innerHTML += `<button class="operBtnStyle mainSings" id="minus">-</button>`;
bottomBtn.innerHTML += `<button class="operBtnStyle mainSings" id="plus">+</button>`;
bottomBtn.innerHTML += `<button class="operBtnStyle mainSings" id="division">÷</button>`;
bottomBtn.innerHTML += `<button class="operBtnStyle mainSings" id="multiplication">×</button>`;

changeableBtn.innerHTML += `<button class="operBtnStyle addOperBtnStyle mainSings">%</button>`;
changeableBtn.innerHTML += `<button class="operBtnStyle addOperBtnStyle mainSings">√</button>`;
changeableBtn.innerHTML += `<button class="operBtnStyle addOperBtnStyle mainSings">²</button>`;
changeableBtn.innerHTML += `<button class="operBtnStyle addOperBtnStyle mainSings">π</button>`;
}

let addMenu = document.getElementById('addMenu');

function addMenuFunc() {
    changeableBtnFunc() 
}

function changeableBtnFunc() {
    bottomBtn.classList.toggle('hide');
    changeableBtn.classList.toggle('hide');
}

addMenu.addEventListener('click', addMenuFunc);

// function displayedValue (){
//     let displayNum = this.getAttribute('id');
//     display.innerText += displayNum;
//     console.log(displayNum, display);
// }
//  let btnValue = document.querySelector('.button');
 
//  btnValue.forEach((item, i) => {
//      item.addEventListner('click', displayedValue)
//     });
