let display = document.getElementById('input');
let btnWrap = document.getElementById('btnWrapper');
let changeableBtn = document.getElementById('changeableBtn');
let topBtn = document.getElementById('topBtn');
let bottomBtn = document.getElementById('bottomBtn');
let backSpaceBtn = document.getElementById('backSpaceBtn');
let bracketsBut = document.getElementsByClassName('brackets');
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
    topBtn.innerHTML += `<button dataBtn1="CE" class="operBtnStyle ce" id="Ce">CE</button>`;
    topBtn.innerHTML += `<button class="operBtnStyle addmenu" id="addMenu">...</button>`;
    topBtn.innerHTML += `<button dataBtn="(" class="brackets operBtnStyle additionalSings button">(</button>`;
    topBtn.innerHTML += `<button dataBtn=")" class="brackets operBtnStyle additionalSings button">)</button>`;
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
let operSymbArr = [];

//зміна операційних кнопок, через кнопку ("...").
function changeableBtnFunc() {
    bottomBtn.classList.toggle('hide');
    changeableBtn.classList.toggle('hide');
}

addMenu.addEventListener('click', changeableBtnFunc);

//додавання символів на дисплей, якщо, проходять перевірочну функцію writeValidation.
function displayValue() {
    let displayNum = this.getAttribute('dataBtn');
    backSpaceBtn.className = "show";
    //якщо, пройшов (символ) перевірку writeValidation додати його до вже існуючого текста на дисплей.
    if (writeValidation(displayNum, display.innerText)) {
        display.innerText += displayNum;
    }
}

let btnValue = document.querySelectorAll('.button');

//метод масива, що при кліку на будь-який .button запускає displayValue.
btnValue.forEach(function (item) {
    return item.addEventListener('click', displayValue)
});

//функція перевірки правильності введення цифр і символів в розрахункове поле.
function writeValidation(displayNum, displayedVal) {
    counterClick++
    // якщо, функція operSymbol вертає параметр displayNum то розбити строку displayedVal через заданий дільник.
    if (operSymbol(displayNum)) {
        operSymbArr.push(displayNum)
    }
    if (displayNum === ')') {
        return bracketsCheck(displayedVal);
    }
    if (operSymbol(displayNum)) {
        let disArr2 = displayedVal.split('');
        if (operSymbol(disArr2[disArr2.length - 1])) {
            return false
        }
        console.log(disArr2.length);
        console.log('displayedVal', displayedVal);
    }
    // якщо, !displayedVal.length 0 то фолс, не записувати натискання на displayNum.
    if (operSymbol(displayNum) && !displayedVal.length) {
        return false
    }
    // для того, щоб інші кнопки працювали при натисканні.
    if (!displayedVal.length) {
        return true
    }
    return true
}

//функція, що виводить на екран кнопки операційні в разі натискання (лише на дані кнопки).
function operSymbol(displayNum) {
    return displayNum == '×' || displayNum == '÷' || displayNum == '-' || displayNum == '+' || displayNum == '%' || displayNum == '√' || displayNum == '²' || displayNum == 'π';
}


let deleteCeBtn = document.getElementById('Ce');

// функція, що видаляє повністю весь вміст дисплея.
function deleteCeFunc() {
    display.innerText = null;
    backSpaceBtn.className = "hide";
}

deleteCeBtn.addEventListener('click', deleteCeFunc)

// функція, що видаляє посимвольно.
function backSpaceBtnFunc() {
    let a = display.innerText;
    let backArr = a.split('');
    backArr.splice(backArr.length - 1, 1);
    display.innerText = backArr.join('');
    if (display.innerText == "") {
        backSpaceBtn.className = "hide";
    }
}

backSpaceBtn.addEventListener('click', backSpaceBtnFunc)


let resultBtn = document.getElementById('resultBtn');

resultBtn.addEventListener('click', equalFunction);

//функція equal, що викликає результативну функцію.

function equalFunction() {
    let arrDis = display.innerText;
    let disArr = arrDis.split(/\W/);
    console.log("equalFunc", disArr);
    console.log(operSymbArr);
    // operSymb = disArr.filter(function(item, index, array){
    // return item == "+" || item == "-" || item == "÷" || item == "×";
    // console.log(operSymb);    
    // });
    // console.log(operSymb);    

    resultFunc(disArr);
}

//функція, що проводить розрахунки введених даних.
function resultFunc(disArr) {
    let resArr = disArr;
    let resProp = 0;
    let multiple = operSymbArr.indexOf('×');
    let divide = operSymbArr.indexOf('÷');
    let plus = operSymbArr.indexOf('+');
    let minus = operSymbArr.indexOf('-');
    
    // console.log(operSymbArr.indexOf('×')) 

    if(multiple >= 0){
        resProp = +resArr[multiple] * +resArr[multiple+1];
            resArr.splice(multiple, 2, resProp);
            operSymbArr.splice(multiple, 1);
            resultFunc(resArr);
    }

    if(plus >= 0){
        resProp = +resArr[plus] + +resArr[plus+1];
            resArr.splice(plus, 2, resProp);
            operSymbArr.splice(plus, 1);
            resultFunc(resArr);
    }

    // for (let i = 0; operSymbArr.length > i; i++) {
    //     if (operSymbArr[i] === '×') {
    //         resProp = +resArr[i] * +resArr[i+1];
    //         resArr.splice(i, 2, resProp);
    //         operSymbArr.splice(i, 1);
    //         resultFunc(resArr);
    //     }
    //     if (operSymbArr[i] === '÷') {
    //         resProp = +resArr[i] / +resArr[i+1];
    //         resArr.splice(i, 2, resProp);
    //         operSymbArr.splice(i, 1);
    //         resultFunc(resArr);
    //     }
    //     if(operSymbArr[i] === '+'){
    //         resProp = +resArr[i] + +resArr[i+1];
    //         resArr.splice(i, 2, resProp);
    //         operSymbArr.splice(i, 1);
    //         console.log(resArr);
    //         resultFunc(resArr);
    //     }
    //     if(operSymbArr[i] === '-'){
    //         resProp = +resArr[i] - +resArr[i+1];
    //         resArr.splice(i, 2, resProp);
    //         operSymbArr.splice(i, 1);
    //         console.log(resArr);
    //         resultFunc(resArr);
    //     }
    // }

    // if(operSymbArr.length >= 1){
    //     resultFunc(resArr);
    // }
console.log(resArr)
}

//функція перевірки круглих дужок.
function bracketsCheck(displayedVal) {
    let disArrBr = displayedVal.split('');
    let counterLeft = 0;
    let counterRight = 0;
    disArrBr.forEach((item) => {
        if (item === '(') counterLeft++;
        if (item === ')') counterRight++;
    })
    if (disArrBr[disArrBr.length - 1] === '(') {
        return false;
    }
    if (counterLeft > counterRight) {
        return true;
    } else {
        return false;
    }
}