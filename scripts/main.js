let myImage = document.querySelector ("img");

myImage.onclick = function () {
	let mySrc = myImage.getAttribute ("src");
	if (mySrc === "images/namakemono.png") {
		myImage.setAttribute ( "src", "images/namakemono2.jpg");
	} else {
		myImage.setAttribute ( "src", "images/namakemono.png");
	}
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("What is your name?");
  if (!myName) {
  myHeading.textContent = "Welcome to Sloth Library, dear stranger";
  } else {
  localStorage.setItem("name", myName);
  myHeading.textContent = "Welcome to Sloth Library, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome back, ${storedName}`;
}

myButton. onclick = function(){
setUserName();
}

