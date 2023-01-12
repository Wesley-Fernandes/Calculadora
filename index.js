const hud = document.querySelector('.hud');


//Actions buttons
const more = document.querySelector('#more');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');
const divider = document.querySelector('#divider');
const reset = document.querySelector('.reset-button');




//numerics buttons 
const actions = document.querySelectorAll('.buttons_numbers .button');
actions.forEach((button) => {
    button.addEventListener('click', (event) => {
        const verifyFirstDigit = hud.innerText.indexOf("0");
        if(verifyFirstDigit===0){
            hud.textContent=button.innerText;
            return
        }
        hud.textContent+=button.innerText;
    })
})


function RestartOperation(){
    hud.innerText = "0"
}

function MoreOperation(){
    const actual = hud.innerText;
    if(actual.includes("+")){
        return
    }
    hud.innerText = actual.concat(" + ")
}

function LessOperation(){
    const actual = hud.textContent;
    if(actual.includes("-")){
        return
    }
    hud.textContent = actual.concat(" - ")
}

function MultiplyOperation(){
    const actual = hud.textContent;
    if(actual.includes("*")){
        return
    }
    hud.textContent = actual.concat(" * ")
}

function DividerOperation(){
    const actual = hud.textContent;
    if(actual.includes("/")){
        return
    }
    hud.textContent = actual.concat(" / ")
}


function Calculate(){
    const actual = hud.innerText;
    const digits = actual.split(" ");
    if(digits[2]){
        Result(actual)
    }

}

function Result(data){
    const digits = data.split(" ");
    switch (digits[1]){
        case "+":
            hud.textContent = Number(digits[0]) + Number(digits[2]);
            break;
        case "-":
            hud.innerText = digits[0] - digits[2];
            break;
        case "*":
            hud.innerText = digits[0] * digits[2];
            break;
        case "/":
            hud.innerText = Number(digits[0]) / Number(digits[2]);
            break;
    }

}