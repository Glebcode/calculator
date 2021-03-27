let btnWrap = document.getElementById('btnWrapper');
let display = document.getElementById('inOutWindow');
let operBtn = document.getElementById('operBtnWrap');

createBtn();

function createBtn(){
for (let i = 0; i < 9; i++){
    btnWrap.innerHTML += `<button id="${i+1}" class="button${i+1} button"><p class="pNum">${i+1}</p></button>`
}
btnWrap.innerHTML += `<button class="button">0</button>`;
btnWrap.innerHTML += `<button class="button">.</button>`;
btnWrap.innerHTML += `<button class="buttonEqual">=</button>`;
operBtn.innerHTML += `<button class="operBtnStyle ce">CE</button>`;
operBtn.innerHTML += `<button class="operBtnStyle addmenu" id="addMenu">...</button>`;
operBtn.innerHTML += `<button class="operBtnStyle additionalSings">(</button>`;
operBtn.innerHTML += `<button class="operBtnStyle additionalSings">)</button>`;
operBtn.innerHTML += `<button class="operBtnStyle mainSings" id="minus">-</button>`;
operBtn.innerHTML += `<button class="operBtnStyle mainSings" id="plus">+</button>`;
operBtn.innerHTML += `<button class="operBtnStyle mainSings" id="division">÷</button>`;
operBtn.innerHTML += `<button class="operBtnStyle mainSings" id="multiplication">×</button>`;
}

let addMenu = document.getElementById('addMenu');
function addMenuFunc(){
    let mainSings = document.getElementById("minus");
    mainSings.remove();
    let mainSings1 = document.getElementById("plus");
    mainSings1.remove();
    let mainSings2 = document.getElementById("division");
    mainSings2.remove();
    let mainSings3 = document.getElementById("multiplication");
    mainSings3.remove();

    // let i = 0;
    // if( i < 4){    
    //     let mainSings = document.getElementsByClassName("mainSings");
    //     i++
    //     mainSings.remove();
    // }
    operBtn.innerHTML += `<button class="operBtnStyle addOperBtnStyle mainSings" id="remSings">%</button>`;
    operBtn.innerHTML += `<button class="operBtnStyle addOperBtnStyle mainSings" id="remSings1">√</button>`;
    operBtn.innerHTML += `<button class="operBtnStyle addOperBtnStyle mainSings" id="remSings2">²</button>`;
    operBtn.innerHTML += `<button class="operBtnStyle addOperBtnStyle mainSings" id="remSings3">π</button>`;
}

function removeAddSings(){
    let mainSings = document.getElementById("remSings");
    mainSings.remove();
    let mainSings1 = document.getElementById("remSings1");
    mainSings1.remove();
    let mainSings2 = document.getElementById("remSings2");
    mainSings2.remove();
    let mainSings3 = document.getElementById("remSings3");
    mainSings3.remove();
operBtn.innerHTML += `<button class="operBtnStyle mainSings" id="minus">-</button>`;
operBtn.innerHTML += `<button class="operBtnStyle mainSings" id="plus">+</button>`;
operBtn.innerHTML += `<button class="operBtnStyle mainSings" id="division">÷</button>`;
operBtn.innerHTML += `<button class="operBtnStyle mainSings" id="multiplication">×</button>`;
}

let i = 0;
function addMenuFuncTime() {
    if(i < 100){
    setTimeout(() => {
        addMenuFunc();
    }, 300)
    setTimeout(() => {
        removeAddSings();
    }, 3000)
    i += 1;
} else {
    alert('Reload page, please !');
   i = 0;
}
}

addMenu.addEventListener('click', addMenuFuncTime);
 





// function displayedValue (){
//     let displayNum = this.getAttribute('id');
//     display.innerText += displayNum;
//     console.log(displayNum, display);
// }
//  let btnValue = document.querySelector('.button');
 
//  btnValue.forEach((item, i) => {
//      item.addEventListner('click', displayedValue)
//     });
