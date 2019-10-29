// Your code goes here
// Nav
const heading = document.querySelector(".main-navigation h1");
heading.addEventListener("wheel", () => {
	heading.textContent = "Dead Bus";
	heading.style.color = "darkredppp";
});

const stopLink = document.querySelector(".main-navigation NAV");
stopLink.addEventListener("click", e => {
	console.log("stoped link");
	e.preventDefault();
});

const newNav = document.querySelectorAll("nav a");
newNav.forEach(e => {
    e.addEventListener('focus', (e)=>{
        e.target.style.color= 'darkred'
    })
})
console.log(newNav)
// Header Img
const headImg = document.querySelector(".intro img");
headImg.addEventListener("mouseenter", () => {
	headImg.src =
		"https://images.unsplash.com/photo-1503925802536-c9451dcd87b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
	headImg.style.width = "1000px";
	headImg.style.height = "250px";
});

headImg.addEventListener("mouseleave", () => {
	headImg.src = "/img/fun-bus.jpg";
});

// Body
let body = document.querySelector("body");
window.addEventListener("keydown", () => {
	body.style.backgroundColor = "black";
	body.style.color = "darkred";
	body.style.filter = "invert(100%)";
});
window.addEventListener("keyup", () => {
	body.style.backgroundColor = "white";
	body.style.color = "black";
	body.style.filter = "none";
});
window.addEventListener("load", () => [
	console.image(
		"https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1922&q=80"
	)
]);

var snd = new Audio("scary.mp3");
let imgDrag = document.querySelectorAll("img");
imgDrag.forEach(e => {
	e.addEventListener("drag", () => {
		snd.play();
	});
});

imgDrag.forEach(e => {
	e.addEventListener("drop", () => {
		snd.pause();
		snd.currentTime = 0;
	});
});
