let btnWrap = document.getElementById('btnWrapper');
let display = document.getElementById('inOutWindow');
let operBtn = document.getElementById('operBtnWrap');

createBtn();

function createBtn(){
for (let i = 0; i < 9; i++){
    btnWrap.innerHTML += `<button id="${i+1}" class="button${i+1} button">${i+1}</button>`
}
btnWrap.innerHTML += `<button class="button">0</button>`;
btnWrap.innerHTML += `<button class="button">.</button>`;
btnWrap.innerHTML += `<button class="buttonEqual">=</button>`;
operBtn.innerHTML += `<button class="operBtnStyle additionalSings">(</button>`;
operBtn.innerHTML += `<button class="operBtnStyle additionalSings">)</button>`;
operBtn.innerHTML += `<button class="operBtnStyle additionalSings">√</button>`;
operBtn.innerHTML += `<button class="operBtnStyle additionalSings">%</button>`;
operBtn.innerHTML += `<button class="operBtnStyle mainSings">-</button>`;
operBtn.innerHTML += `<button class="operBtnStyle mainSings">+</button>`;
operBtn.innerHTML += `<button class="operBtnStyle mainSings">÷</button>`;
operBtn.innerHTML += `<button class="operBtnStyle mainSings">×</button>`;
}

