function tickUp() {
    let counter = document.getElementById("counter");
    counter.textContent = parseInt (counter.textContent) + 1; 
} 

function tickDown () {
    let counter = document.getElementById("counter");
    counter.textContent = parseInt ( counter.textContent) - 1;
} 

//<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3

function runForLoop() {
    let counter = parseInt(document.getElementById("counter").textContent);
    let result = "";
    for (let i = 0; i <= counter; i++) {
        result += i + " " ;
    }
    document.getElementByid("forLoopResult").textContent = result.trim();
}
//<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3
function showOddNumbers () {
    let counter = parseInt(document.getElementById("counter").textContent);
    let result = " ";
    let i = 1;
    while (i<= counter) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
        i++;
    }
    document.getElementById("oddNumberResult").textContent = result.trim();
}
//<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3

function addMultiplesToArray () {
    let counter = parseInt(document.getElementById("counter").textContent;
    let multiples = [];
    if (counter >= 5) {
        for (let i = 5; i <= counter; i += 5) {
            multiples.push(i);
        }
        multiples.reverse();
    }
    console.log(multiple);
}
//<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3

function printCarObjects () {
    let car = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value,
    };
        console.log(car);
}
//<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3
function loadCar (num) {
    let car;
    if (num == 1) car = carObject1;
    else if (num == 2) car = carObject2;
    else if (num == 3) car = carObject3;

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}
//<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3

function changeColor (num) {
    let p = document.getElementById("styleParagraph");
    if (num == 1) p.style.color = "red";
    else if (num == 1) p.style.color = "green";
    else if (num == 1) p.style.color = "blue";
}