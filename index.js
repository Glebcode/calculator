let display = document.getElementById('input');
let btnWrap = document.getElementById('btnWrapper');
let changeableBtn = document.getElementById('changeableBtn');
let topBtn = document.getElementById('topBtn');
let bottomBtn = document.getElementById('bottomBtn');
let counterClick = 0;
createBtn();

function createBtn() {
    for (let i = 0; i < 9; i++) {
        btnWrap.innerHTML += `<button dataBtn="${i + 1}" id="${i + 1}" class="button${i + 1} button"><p class="pNum">${i + 1}</p></button>`
    }
    btnWrap.innerHTML += `<button dataBtn="0" class="button">0</button>`;
    btnWrap.innerHTML += `<button dataBtn="." id="point" class="button">.</button>`;
    btnWrap.innerHTML += `<button dataBtn="=" class="buttonEqual" id="resultBtn">=</button>`;
    topBtn.innerHTML += `<button dataBtn1="CE" class="operBtnStyle ce">CE</button>`;
    topBtn.innerHTML += `<button class="operBtnStyle addmenu" id="addMenu">...</button>`;
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

function displayValue() {
    let displayNum = this.getAttribute('dataBtn');

    if(writeValidation(displayNum, display.innerText)){
        display.innerText += displayNum;
    }
    // if(pointFunc(displayNum)){
    //     display.innerText += displayNum;
    // }
}

function writeValidation(displayNum, displayedVal) {
    counterClick++
    if (operSymbol(displayNum)){
        let disArr = displayedVal.split('displayNum');
        console.log('disarr', disArr)
    }

    if (operSymbol(displayNum) && !displayedVal.length){
        return false
    }
    // console.log(disArr)
    if(!displayedVal.length) {return true}
    return true
}

function operSymbol(displayNum){

    return displayNum == '×' || displayNum == '÷' || displayNum == '-' || displayNum == '+';
}

let btnValue = document.querySelectorAll('.button');
//  console.log(btnValue);

btnValue.forEach( function (item) {
    return item.addEventListener('click', displayValue)
});




let resultBtn = document.getElementById('resultBtn');

resultBtn.addEventListener('click', resultFunc);

function resultFunc(displayNum, displayedVal) {
    if (operSymbol(displayNum)){
        let forEqualArray = displayedVal.split('displayNum');
        console.log('Array   ' + forEqualArray);
    }
    return true;
}



// let pointBtn = document.getElementById('point');

// pointBtn.addEventListener('click', pointFunc);

// let counterPoint;
// function pointFunc(displayNum){
//     counterPoint++;
//     if(counterPoint > 1){
//         return false;
//     }
//     if(displayNum == '.'){
//          return true;
//     }
   
//     console.log('point');
// }

