document.getElementById("makeBigger").addEventListener("mouseenter", bigImg);
document.getElementById("makeBigger").addEventListener("mouseleave", smallImg);

function bigImg() {
    document.getElementById("makeBigger").style.height = "600px";
    document.getElementById("makeBigger").style.width = "800px";
}

function smallImg() {
    document.getElementById("makeBigger").style.height = "100px";
    document.getElementById("makeBigger").style.width = "200px";
}

function AnnoyThem() {
	alert("Page locked and loaded.");
}

var b = document.getElementById("showDIV");

function functionStarting() {
	b.style.WebkitAnimation = "mymove 2s 2";
	b.style.animation = "mymove 2s 2";
}

b.addEventListener("webkitAnimationStart", AniStart);
b.addEventListener("webkitAnimationIteration", RepeatFunc);
b.addEventListener("webkitAnimationEnd", FinallyEnd);

function AniStart() {
    this.innerHTML = "animationstart";
    this.style.backgroundColor = "red";
}

function RepeatFunc() {
    this.innerHTML = "animationiteration";
    this.style.backgroundColor = "white";
}

function FinallyEnd() {
    this.innerHTML = "animationend";
    this.style.backgroundColor = "blue";
}

document.getElementById("anotherDIV").addEventListener("transitionend", endIt);

function endIt() {
	this.innerHTML = "Transition ended";
	this.style.backgroundColor = "bluegreen";
}
