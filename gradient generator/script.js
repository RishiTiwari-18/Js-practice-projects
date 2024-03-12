let button1 = document.querySelector(".myButton");
let button2 = document.querySelector(".myButton2");
let main = document.querySelector(".main")
let text = document.querySelector(".copyText")
let rgb1 = "#fff"
let rgb2 = "red"

let hexValues = () => {
    let Value = "0123456789abcdef"
    let colours = "#"
    for( let i = 0; i < 6; i++){
    colours = colours + Value[Math.floor(Math.random ()*16)];
    }
    return colours;
    
}

let handleButton1 = () => {
    rgb1 = hexValues();
    main.style.background = `linear-gradient(to right,${rgb1}, ${rgb2})`;
    button1.innerHTML = `${rgb1}`
    text.innerHTML =` background: linear-gradient(to right,${rgb1}, ${rgb2});`

}

let handleButton2 = () => {
    rgb2 = hexValues();
    main.style.background = `linear-gradient(to right,${rgb1}, ${rgb2})`;
    button2.innerHTML = `${rgb2}`
    text.innerHTML =` background: linear-gradient(to right,${rgb1}, ${rgb2});`
}

button1.addEventListener("click", handleButton1)

button2.addEventListener("click", handleButton2)




  