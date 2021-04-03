let display = document.getElementById('inOutWindow');
let btnWrap = document.getElementById('btnWrapper');
let operBtn = document.getElementById('operBtnWrap');
let topBtn = document.getElementById('topBtn');
let bottomBtn= document.getElementById('bottomBtn');

createBtn();

function createBtn(){
for (let i = 0; i < 9; i++){
    btnWrap.innerHTML += `<button dataBtn="${i+1}" id="${i+1}" class="button${i+1} button"><p class="pNum">${i+1}</p></button>`
}
btnWrap.innerHTML += `<button dataBtn="0" class="button">0</button>`;
btnWrap.innerHTML += `<button dataBtn="." class="button">.</button>`;
btnWrap.innerHTML += `<button dataBtn="=" class="buttonEqual">=</button>`;
topBtn.innerHTML += `<button dataBtn1="CE" class="operBtnStyle ce">CE</button>`;
topBtn.innerHTML += `<button dataBtn="..." class="operBtnStyle addmenu button" id="addMenu">...</button>`;
topBtn.innerHTML += `<button dataBtn="(" class="operBtnStyle additionalSings button">(</button>`;
topBtn.innerHTML += `<button dataBtn=")" class="operBtnStyle additionalSings button">)</button>`;
bottomBtn.innerHTML += `<button dataBtn="-" class="operBtnStyle mainSings button" id="minus">-</button>`;
bottomBtn.innerHTML += `<button dataBtn="+" class="operBtnStyle mainSings button" id="plus">+</button>`;
bottomBtn.innerHTML += `<button dataBtn="÷" class="operBtnStyle mainSings button" id="division">÷</button>`;
bottomBtn.innerHTML += `<button dataBtn="×" class="operBtnStyle mainSings button" id="multiplication">×</button>`;

changeableBtn.innerHTML += `<button dataBtn="%" class="operBtnStyle addOperBtnStyle mainSings button">%</button>`;
changeableBtn.innerHTML += `<button dataBtn="√" class="operBtnStyle addOperBtnStyle mainSings button">√</button>`;
changeableBtn.innerHTML += `<button dataBtn="²" class="operBtnStyle addOperBtnStyle mainSings button">²</button>`;
changeableBtn.innerHTML += `<button dataBtn="π" class="operBtnStyle addOperBtnStyle mainSings button">π</button>`;
}

let addMenu = document.getElementById('addMenu');

function changeableBtnFunc() {
    bottomBtn.classList.toggle('hide');
    changeableBtn.classList.toggle('hide');
}

addMenu.addEventListener('click', changeableBtnFunc);

function displayValue (){
    let displayNum = this.getAttribute('dataBtn');
    display.innerText += displayNum;
    // console.log(displayNum, display);
}
 let btnValue = document.querySelectorAll('.button');
//  console.log(btnValue);

 btnValue.forEach(function(item){
     return item.addEventListner('click', displayValue)
    });