let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
    "T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
    "q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~",
    "`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",
    ">",".","?","/"];

let password1El = document.querySelector("#password-1-el")
let password2El = document.querySelector("#password-2-el")
let passwordLengthEl = document.querySelector("#password-length-el")
let symbolCheckEl = document.querySelector("#symbol-check-el")
let numberCheckEl = document.querySelector("#number-check-el")
let alertEl = document.querySelector(".copiedAlert")

function generatePassword() {
    password1El.textContent = ""
    password2El.textContent = ""

    if(symbolCheckEl.checked == false && numberCheckEl.checked == false) {
        characters = characters.slice(0, 52)
    } else if(symbolCheckEl.checked == false) {
        characters = characters.slice(0, 62)
    } else if(numberCheckEl.checked == false) {
        characters = characters.slice(0, 52).concat(characters.slice(62, -1))
    }

    for(let i = 0; i <=parseInt(passwordLengthEl.value); i++) {
        password1El.textContent += characters[Math.floor(Math.random() * characters.length)]
        password2El.textContent += characters[Math.floor(Math.random() * characters.length)]
    }
}
function copyPassword(element) {
    element.select;
    navigator.clipboard.writeText(element.textContent);
    alertEl.classList.add("showAlert")
    setTimeout(function(){ alertEl.className = alertEl.className.replace("showAlert", ""); }, 3000);
}