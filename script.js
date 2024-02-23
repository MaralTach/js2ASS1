const header = document.querySelector("header");
const title = document.getElementById("title");
const navItem = document.querySelector(".nav-item");
const liItems = document.querySelectorAll("li");
const userName = document.querySelector("#username");
const passWord = document.querySelector("#password");
const btn = document.querySelector(".btn");
const projects = document.getElementById("projects");
const myH3 = document.querySelector("#projects h3");
const body = document.querySelector("body")
const myInput = document.getElementById("input")
const myMain = document.querySelector('main')
const myUl = document.querySelector("#projects ul");



// body.style.backgroundColor = 'rgb(240, 232, 219)'
header.style.backgroundColor = "green";
header.style.padding = "20px";
header.style.textAlign = "center";

title.textContent = "Javascript Dom Assignment";
title.style.color = "#fff";

navItem.style.display = "flex";
navItem.style.justifyContent = "center";
navItem.style.gap = "3rem";
navItem.style.listStyle = "none";
navItem.style.cursor = "pointer";


liItems.forEach((item) => {
  item.style.border = "2px solid #ccc"; // border rengi ve kalınlığı
  item.style.borderRadius = "15px"; // border radius değeri
  item.style.padding = "7px"; // padding değeri
  item.style.width = "80px"; // genislik
  item.style.color = "#fff"; // yazi rengi
  item.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.5)";

});

userName.style.border = "2px solid green";
userName.style.borderRadius = "10px";
userName.style.padding = "10px";
userName.style.width = "15rem";
userName.value = "Maral";
userName.disabled = "true";
userName.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.5)";

passWord.style.border = "2px solid green";
passWord.style.borderRadius = "10px";
passWord.style.padding = "10px";
passWord.style.width = "15rem";
passWord.value = "12345";
passWord.type = "text";
passWord.disabled = "true";
passWord.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.5)";

btn.style.backgroundColor = "green";
btn.style.color = "white";
btn.style.padding = "10px";
btn.style.borderRadius = "20px";
btn.style.cursor = "pointer";
btn.style.border = "none";
btn.textContent = "Giris yap";
btn.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.5)";

myH3.textContent = "JS Dom Projects";
myH3.style.fontSize = '3rem'


// myMain.style.backgroundColor = 'rgb(133, 255, 189'


const newLI = document.createElement('li')
newLI.textContent = 'Hello World!'



const newLI2 = document.createElement('li')
newLI2.textContent = 'Guess Number'


const newLI3 = document.createElement('li')
newLI3.textContent = 'Checkout Page'

const newLI4 = document.createElement('li')
newLI4.textContent = 'Gelir-Gider Projesi'

const newLI5 = document.createElement('li')
newLI5.textContent = 'Api Projects'


myUl.before(newLI,newLI2,newLI3,newLI4,newLI5)


newLI.addEventListener('mouseover', () =>{
    newLI.style.backgroundColor = "rgb(209, 232, 219)"
})

newLI.addEventListener('mouseout', () =>{
    newLI.style.backgroundColor = "white"
})

newLI2.addEventListener('mouseover', () =>{
    newLI2.style.backgroundColor = "rgb(209, 232, 219)"
})

newLI2.addEventListener('mouseout', () =>{
    newLI2.style.backgroundColor = "white"
})

newLI3.addEventListener('mouseover', () =>{
    newLI3.style.backgroundColor = "rgb(209, 232, 219)"
})

newLI3.addEventListener('mouseout', () =>{
    newLI3.style.backgroundColor = "white"
})


newLI4.addEventListener('mouseover', () =>{
    newLI4.style.backgroundColor = "rgb(209, 232, 219)"
})

newLI4.addEventListener('mouseout', () =>{
    newLI4.style.backgroundColor = "white"
})

newLI5.addEventListener('mouseover', () =>{
    newLI5.style.backgroundColor = "rgb(209, 232, 219)"
})

newLI5.addEventListener('mouseout', () =>{
    newLI5.style.backgroundColor = "white"
})

