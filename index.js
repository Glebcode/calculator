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
let operSymbArr2 = [];


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
    let wrVlArr = displayedVal.split('');
    let sym = wrVlArr[wrVlArr.length - 1];

    let indices = [];
    let NumCountInside = 0;
    let idx = wrVlArr.indexOf('√');

    while (idx != -1) {
        indices.push(idx);
        idx = wrVlArr.indexOf('√', idx + 1);
    }

    let lastSqRootIndex = indices[indices.length - 1];

    for (let i = lastSqRootIndex; i <= wrVlArr.length - 1; i++) {
        if (wrVlArr[i] !== '×' || wrVlArr[i] !== '÷' || wrVlArr[i] !== '-' || wrVlArr[i] !== '+' || wrVlArr[i] !== 'π') {
            NumCountInside == 0
        } else {
            NumCountInside++
        }
    }

    if (operSymbol(displayNum)) {
        operSymbArr.push(displayNum)
    }
    console.log(sym == '%', sym == '²', sym == 'π', displayNum == '%', displayNum == '√', displayNum == '²', displayNum == 'π')
    if ((sym == '%' || sym == '²' || sym == 'π') && (displayNum == '%' || displayNum == '√' || displayNum == '²' || displayNum == 'π')) {
        console.log('1');
        return false
    }

    if(indices.length > 0 && NumCountInside == 0 && (displayNum == '%' || displayNum == '²')){
        return false
    }

    if (operSymbol(displayNum) && sym === '(') {
        return false
    }
    if(!operSymbol(displayNum) && (sym == '%' || sym == '²' || sym == 'π')){
        display.innerText += '×';
    }
    if (!operSymbol(displayNum) && displayNum !== '(' && sym === ')') {
        display.innerText += '×';
    }
    if (operSymbol(displayNum) && !displayedVal.length && displayNum == '√') {
        console.log('2');
        return true
    }
    if (operSymbol(displayNum) && !displayedVal.length) {
        console.log('3');
        return false
    }
    if (operSymbol(displayNum) && (sym == '%' || sym == '²' || sym == 'π') && displayNum !== '%') {
        console.log('4');
        return true
    }
    if (!operSymbol(sym) && displayNum == '√') {
        console.log('5');
        return false
    }
    if (sym == '√' && (displayNum == '×' || displayNum == '÷' || displayNum == '-' || displayNum == '+' || displayNum == '%' || displayNum == '√' || displayNum == '²' || displayNum == 'π')) {
        console.log('6');
        return false
    }
    if (operSymbol(displayNum) && displayNum !== '√' && (sym == '×' || sym == '÷' || sym == '-' || sym == '+' || sym == '%' || sym == '²' || sym == 'π')) {
        console.log(wrVlArr);
        console.log('before', sym);
        console.log('next', displayNum);
        return false
    }
    if (sym == '√' && displayNum == '√') {
        return false
    }
    // якщо, функція operSymbol вертає параметр displayNum то розбити строку displayedVal через заданий дільник.
    if (displayNum === ')') {
        return bracketsCheck(displayedVal, displayNum);
    }
    if (displayNum === '(') {
        return bracketsCheck2(displayedVal, displayNum);
    }
    // if (displayNum === '(') {
    //     return bracketsCheck2(displayedVal);
    // }
    // else if (operSymbol(displayNum) && displayNum == '√') {
    //     console.log('hy1');
    //     return true
    // }
    // для того, щоб інші кнопки працювали при натисканні.
    // if (!displayedVal.length) {
    //     return true
    // }
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
    console.log(" 1 ", arrDis);
    let disArr = arrDis.split(/[^\d.]/g);
    console.log(" 2 ", disArr);

    console.log(operSymbArr);
    // operSymb = disArr.filter(function(item, index, array){
    // return item == "+" || item == "-" || item == "÷" || item == "×";
    // console.log(operSymb);
    // });
    // console.log(operSymb);
    resultFunc(disArr, operSymbArr);
}

//функція, що проводить розрахунки введених даних.
function resultFunc(disArr, operSymbArr) {
    let resArr = disArr;
    operSymbArr2 = operSymbArr;
    let resProp = 0;
    let multiple = operSymbArr2.indexOf('×');
    let divide = operSymbArr2.indexOf('÷');
    let plus = operSymbArr2.indexOf('+');
    let minus = operSymbArr2.indexOf('-');
    let sqRoot = operSymbArr2.indexOf('√');
    let percent = operSymbArr2.indexOf('%');
    let numberPi = operSymbArr2.indexOf('π');
    let square = operSymbArr2.indexOf('²');

    console.log("equalFunc", resArr);
    // console.log(operSymbArr2);

    // console.log(operSymbArr2.indexOf('×'))
    if (operSymbArr2.length == 0) {
        let clDisplay = display.innerText;
        clDisplay = '';
        display.innerText = disArr[0];
        return;
    }
    if (numberPi >= 0 && operSymbArr2.length !== 0) {
        resProp = +resArr[numberPi] * +3.1415;
        resArr.splice(numberPi, 2, resProp);
        operSymbArr2.splice(numberPi, 1);
        resultFunc(resArr, operSymbArr2);
    }
    if (square >= 0 && operSymbArr2.length !== 0) {
        resProp = +resArr[square] * +resArr[square];
        resArr.splice(square, 2, resProp);
        operSymbArr2.splice(square, 1);
        resultFunc(resArr, operSymbArr2);
    }
    if (percent >= 0 && operSymbArr2.length !== 0) {
        resProp = ((+resArr[percent] * 0.01) * +resArr[percent - 1]);
        console.log(percent);
        resArr.splice(percent, 1, resProp);
        operSymbArr2.splice(percent, 1);
        resultFunc(resArr, operSymbArr2);
    }
    if (sqRoot >= 0 && operSymbArr2.length !== 0) {
        resProp = Math.sqrt(resArr[sqRoot + 1]);
        resArr.splice(sqRoot, 2, resProp);
        operSymbArr2.splice(sqRoot, 1);
        resultFunc(resArr, operSymbArr2);
    }
    if (multiple >= 0 && operSymbArr2.length !== 0) {
        resProp = +resArr[multiple] * +resArr[multiple + 1];
        resArr.splice(multiple, 2, resProp);
        operSymbArr2.splice(multiple, 1);
        resultFunc(resArr, operSymbArr2);
    }

    if (divide >= 0 && operSymbArr2.length !== 0) {
        resProp = +resArr[divide] / +resArr[divide + 1];
        resArr.splice(divide, 2, resProp);
        operSymbArr2.splice(divide, 1);
        resultFunc(resArr, operSymbArr2);
    }
    if (minus >= 0 && operSymbArr2.length !== 0) {
        resProp = +resArr[minus] - +resArr[minus + 1];
        resArr.splice(minus, 2, resProp);
        operSymbArr2.splice(minus, 1);
        resultFunc(resArr, operSymbArr2);
    }
    if (plus >= 0 && operSymbArr2.length !== 0) {
        resProp = +resArr[plus] + +resArr[plus + 1];
        resArr.splice(plus, 2, resProp);
        operSymbArr2.splice(plus, 1);
        resultFunc(resArr, operSymbArr2);
    }


    //Fork
    // for (let i = 0; operSymbArr.length > i; i++) {
    //     if (operSymbArr[i] === '×') {
    //         resProp = +resArr[i] * +resArr[i+1];
    //         resArr.splice(i, 2, resProp);
    //         operSymbArr.splice(i, 1);
    //         resultFunc(resArr, operSymbArr2);
    //     }
    //     if (operSymbArr[i] === '÷') {
    //         resProp = +resArr[i] / +resArr[i+1];
    //         resArr.splice(i, 2, resProp);
    //         operSymbArr.splice(i, 1);
    //         resultFunc(resArr, operSymbArr2);
    //     }
    //     if(operSymbArr[i] === '+'){
    //         resProp = +resArr[i] + +resArr[i+1];
    //         resArr.splice(i, 2, resProp);
    //         operSymbArr.splice(i, 1);
    //         console.log(resArr);
    //         resultFunc(resArr, operSymbArr2);
    //     }
    //     if(operSymbArr[i] === '-'){
    //         resProp = +resArr[i] - +resArr[i+1];
    //         resArr.splice(i, 2, resProp);
    //         operSymbArr.splice(i, 1);
    //         console.log(resArr);
    //         resultFunc(resArr, operSymbArr2);
    //     }
    // }
}

//функція перевірки круглих дужок.
function bracketsCheck(displayedVal, displayNum) {
    let neutralCounter = 0;
    let finalResult = false;
    let disArrBr = displayedVal.split('');
    let counterLeft = 0;
    let counterRight = 0;
    let indices = [];
    let NumCountInside = 0;
    let lastDisArrSym = disArrBr[disArrBr.length-1];
    disArrBr.forEach((item) => {
        if (item === '(') counterLeft++;
        if (item === ')') counterRight++;
    })

    let idx = disArrBr.indexOf('(');
    while (idx != -1) {
        indices.push(idx);
        idx = disArrBr.indexOf('(', idx + 1);
    }
    console.log("indicesOfBrLf", indices)

    let lastBrLfIndex = indices[indices.length - 1];

    console.log("LastIndiceOfBrLf", lastBrLfIndex)

    for (let i = lastBrLfIndex; i <= disArrBr.length - 1; i++) {
        // console.log('CheckFor', disArrBr[i])
        if (disArrBr[i] === '×' || disArrBr[i] === '÷' || disArrBr[i] === '-' || disArrBr[i] === '+' || disArrBr[i] === '%' || disArrBr[i] === '√' || disArrBr[i] === '²' || disArrBr[i] === 'π') {
            NumCountInside++
            console.log('NumCountInsideIf', NumCountInside)
        }
    }

    // disArrBr.forEach(function (item, lastBrLfIndex, array) {
    //     if (item === operSymbol(displayNum)) {
    //         NumCountInside++;
    //     }
    // })
    // console.log('cL', counterLeft)
    // console.log('cR', counterRight)
    console.log('NumCountInside', NumCountInside)

    if (NumCountInside <= 0) {
        return false
    }
    // if(lastDisArrSym == '²' || lastDisArrSym == 'π'){
    //     console.log('lastDisArrSym');
    //     return false
    // }
    if (counterLeft < counterRight) {
        console.log('1');
        return false
        neutralCounter++
    }
    if (disArrBr[disArrBr.length - 1] === '(') {
        console.log('2');
        return false
    }
    if (disArrBr.length < 3) {
        return false
    }
    if (operSymbol(disArrBr[disArrBr.length - 1])) {
        return false
    }
    if (counterLeft > counterRight) {
        console.log('3');
        return true;
    }
    // if(bracketsCheck2(displayedVal, counterLeft, counterRight, disArrBr, counterRight2, displayNum)){
    //     console.log('4');
    // }
    // console.log(neutralCounter === 0)
    // console.log(finalResult, neutralCounter,  'finalResult 1')
    // finalResult = neutralCounter === 0;
    // console.log(finalResult, neutralCounter,  'finalResult 2')
    // return finalResult;
}

function bracketsCheck2(displayedVal, displayNum) {
    // let neutralCount = 0;
    // let finRes = true;

    let disArrBr = displayedVal.split('');
    let sym = disArrBr[disArrBr.length - 1];
    if (disArrBr[disArrBr.length - 1] === '(') {
        return false
    }
    if (disArrBr.length > 0 && !operSymbol(sym) || disArrBr[disArrBr.length - 1] === ')') {
        display.innerText += '×' + displayNum;
    } else {
        return true
    }
    //  console.log(finRes, neutralCount,  '2nd 1st')
    //  finRes = neutralCount === 0;
    //  console.log(finRes, neutralCount,  '2nd 2nd')
    //  return finRes;
}