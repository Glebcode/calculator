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
let useBrackets = true;

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
        useBrackets = true;
        return bracketsCheck(displayedVal);
    }
    if (operSymbol(displayNum)) {
        let disArr2 = displayedVal.split('');
        if (operSymbol((displayNum) && displayNum == '√')) {
            return true
        } else if (operSymbol(disArr2[disArr2.length - 1] && displayNum == '√')) {
            return false
        }
        //     }else if (operSymbol(disArr2[disArr2.length - 1])) {
        //     return false
        // }
        // console.log(disArr2.length);
        // console.log('displayedVal', displayedVal);
    }

    // якщо, !displayedVal.length 0 то фолс, не записувати натискання на displayNum, крім '√'.
    if (operSymbol(displayNum) && displayNum == '√') {
        return true
    } else if (operSymbol(displayNum) && !displayedVal.length) {
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
testBracketsFunc('(9+3)-(6+3-6+3.3)-6+3+(6-3)+2+3+3+(4-3)+2+3+2+3+2+3+(4-3)');

function equalFunction() {
    let displayText = display.innerText;
    let disArr = displayText.split(/[^\d.]/g);
    if (useBrackets) {
        console.log(useBrackets, 'useBrackets');
        testBracketsFunc('(9+3)-(6+3-6+3.3)-6+3+(6-3)+2+3+3+(4-3)+2+3+2+3+2+3+(4-3)');
        return
    }
    console.log(operSymbArr);
    // operSymb = disArr.filter(function(item, index, array){
    // return item == "+" || item == "-" || item == "÷" || item == "×";
    // console.log(operSymb);
    // });
    // console.log(operSymb);
    resultFunc(disArr, operSymbArr);
}

function testBracketsFunc(displayText) {
    let emptyArr = [];
    let test = displayText.split('(');
    let correctIndex = [];
    let currIdx = 1;

    test.forEach((item, idx) => {
        // console.log(item, item.indexOf(')') >= 0, 'item.indexOf(\')\') >= 0')
        if (item.indexOf(')') >= 0) {
            let val = item.split(')');
            // console.log(val, 'VALLL')

            correctIndex.push(currIdx);
            // console.log(currIdx, correctIndex, 'correctIndex[idx]');
            currIdx = correctIndex[idx - 1] + 2;


            let test2 = val[0].split(/[^\d.]/g);
            let test3 = val[0].split(/[\d.]/g);
            test3.shift();
            resultFunc(test2, test3);
            // console.log(test2, test3, 'jecnejcnejcn')
            // console.log(resultFunc(test2, test3), 'resultFunc(test2, test3)')
            val.length === 1 ? emptyArr.push(test2[0]) : emptyArr.push(test2[0]) && emptyArr.push(val[1]);
        }
    })
    console.log(emptyArr, 'emptyArr')
    let numArr = [];
    let operArr = [];
    let currentNum = '';
    let externalIdx = 0;
    let test2 = emptyArr.join('').split('');
    console.log(test2, 'test2')

    for(let i = 0; test2.length > i; i++){
        if (operSymbol(test2[i]) && (test2[i-1] === '-')){
            currentNum += test2[i];
            continue
        }
        if (!operSymbol(test2[i])){
            currentNum += test2[i];
        }
        if (operSymbol(test2[i])){
            numArr[externalIdx] = currentNum;
            externalIdx++;
            currentNum = '';
            operArr.push(test2[i]);
        }
        if(i === test2.length - 1){
            numArr[externalIdx] = currentNum;
        }
    }



    console.log(numArr, 'empty', operArr, 'operArr', 'test3', 'EMPTY')
    // let test3 = test2.forEach((el)=>{
    //     console.log(el)});
    // let test4 = test2.split(/[\d.]/g).filter((item)=> item !== "");
    // emptyArr.forEach((item) => {
    //     if (operSymbol(item)) {
    //         test3.push(item)
    //     } else {
    //         test2.push(item)
    //     }
    // })
    // let test3 = emptyArr



    useBrackets = false;
    resultFunc(numArr, operArr);
    // let test2 = ["6+2)"];
    // console.log("6+2)".split(")"), "split")
    // console.log(arrDis.indexOf('('))
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
    // debugger
    console.log("equalFunc", resArr);

    // console.log(operSymbArr2.indexOf('×'))
    if (useBrackets && (operSymbArr2.length === 0 || disArr.length === 1)) {
        return disArr[0]
    }
    if (operSymbArr2.length === 0 || disArr.length === 1) {
        display.innerText = disArr[0];
        return;
    }
    if (numberPi >= 0 && operSymbArr2.length !== 0) {
        resProp = +resArr[numberPi] * 3.1415;
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



    if (minus >= 0 && operSymbArr2.length !== 0 && disArr.length !== 1) {
        resProp = +resArr[minus] - +resArr[minus + 1];
        resArr.splice(minus, 2, resProp);
        operSymbArr2.splice(minus, 1);
        resultFunc(resArr, operSymbArr2);
    }
    if (plus >= 0 && operSymbArr2.length !== 0 && disArr.length !== 1) {
        resProp = +resArr[plus] + +resArr[plus + 1];
        resArr.splice(plus, 2, resProp);
        operSymbArr2.splice(plus, 1);
        resultFunc(resArr, operSymbArr2);
    }
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
    return counterLeft > counterRight;
}