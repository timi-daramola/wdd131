let backgroundChanger = document.querySelector("body");
let backgroundValue = document.querySelector(".back-color");
let changer = document.querySelector(".clickable");
let light = document.querySelector('.light-icon');
let textInput = document.querySelector('.textInput');
let searchColor = document.querySelector('.clickable-2');
const year = document.querySelector("#currentyear");
let lastModified = document.querySelector("#lastModified");

let whiteBackground1 = document.querySelector('.background-display-2');
let whiteBackground2 = document.querySelector('div .background-display');

let hex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F'];


changer.addEventListener('click', function hexColor() {
    let hexCode = '#';
    let generateCodeLength;
    for(let i=0; i<6; i++){
        generateCodeLength = hex[loopThroughHex()];
        hexCode +=generateCodeLength;
    }

    document.body.style.backgroundColor = hexCode;
    backgroundValue.textContent = hexCode;

    bgColorChanger = true;
});



document.querySelector('.clickable-2').onclick = function(){
    let pureColor = false;
    let whiteColor1 = '#ffffff';
    let whiteColor2 = '#fff';
    let defaultColor1 = '#0688EA';
    let defaultColor2 = '#ff6347';
    let textOutput;
    textOutput = document.querySelector('.textInput').value;

    if (textOutput === whiteColor1 || textOutput === whiteColor2) {
        whiteBackground1.style.backgroundColor = defaultColor2;
        whiteBackground1.style.color = whiteColor1;
        whiteBackground2.style.backgroundColor = defaultColor1;
        whiteBackground2.style.color = whiteColor1;
        searchColor.style.backgroundColor = defaultColor2;
        changer.style.backgroundColor = defaultColor1;
        document.body.style.backgroundColor = textOutput;
        backgroundValue.textContent = textOutput;
    pureColor = true;
    } else if (!whiteColor1 || !whiteColor2) {
        whiteBackground1.style.backgroundColor = textOutput;
        whiteBackground2.style.backgroundColor = textOutput;
        backgroundChanger.style.backgroundColor = textOutput;
        pureColor = false;
    } else {
        backgroundChanger.style.backgroundColor = textOutput;
    }
}


function loopThroughHex(){
    let hexRandomNumber;
    for(let i=0; i<hex.length; i++){
       hexRandomNumber =  Math.floor(Math.random() * hex.length);
    }return hexRandomNumber;
}

const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

lastModified.innerHTML = `<span class="highlight">Last Modification: ${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short"
	}
).format(today)}</span>`;
