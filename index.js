let display = document.getElementById('input');
let btnWrap = document.getElementById('btnWrapper');
let changeableBtn = document.getElementById('changeableBtn');
let topBtn = document.getElementById('topBtn');
let bottomBtn = document.getElementById('bottomBtn');
let counterClick = 0;
createBtn();

//створення кнопок.
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

//зміна операційних кнопок, через кнопку ("...").
function changeableBtnFunc() {
    bottomBtn.classList.toggle('hide');
    changeableBtn.classList.toggle('hide');
}

addMenu.addEventListener('click', changeableBtnFunc);

//додавання символів на дисплей, якщо, проходять перевірочну функцію writeValidation.
function displayValue() {
    let displayNum = this.getAttribute('dataBtn');

//якщо, пройшов (символ) перевірку writeValidation додати його до вже існуючого текста на дисплей.
    if(writeValidation(displayNum, display.innerText)){
        display.innerText += displayNum;
    }
   
}

let btnValue = document.querySelectorAll('.button');

//метод масива, що при кліку на будь-який .button запускає displayValue.
btnValue.forEach( function (item) {
    return item.addEventListener('click', displayValue)
});

//функція перевірки правильності введення цифр і символів в розрахункове поле.
function writeValidation(displayNum, displayedVal) {
    counterClick++
    // якщо, функція operSymbol вертає параметр displayNum то розбити строку displayedVal через заданий дільник.
    // if (operSymbol(displayNum)){
    //     let disArr = displayedVal.split('displayNum');
    //     console.log('disarr', disArr)
    // }
    if (operSymbol(displayNum)){
        let disArr2 = displayedVal.split('');
        console.log('disarr2', disArr2)
        displayNum != disArr2[disArr2.length-1];
        console.log(disArr2.length)
        console.log('displayedVal', displayedVal)
    }
    // якщо, !displayedVal.length 0 то фолс, не записувати натискання на displayNum.
    if (operSymbol(displayNum) && !displayedVal.length){
        return false
    }
    // для того, щоб інші кнопки працювали при натисканні. 
    if(!displayedVal.length) {return true}
    return true
}

//функція, що виводить на екран кнопки операційні в разі натискання (лише на дані кнопки).
function operSymbol(displayNum){

    return displayNum == '×' || displayNum == '÷' || displayNum == '-' || displayNum == '+' || displayNum == '%' || displayNum == '√' || displayNum == '²' || displayNum == 'π';
}

// let resultBtn = document.getElementById('resultBtn');

// resultBtn.addEventListener('click', resultFunc);

// //функція, що проводить розрахунки введених даних.
// function resultFunc(displayNum, displayedVal) {
//     if (operSymbol(displayNum)){
//         let forEqualArray = displayedVal.split('displayNum');
//         console.log('Array   ' + forEqualArray);
//     }
//     return true;
// }



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

