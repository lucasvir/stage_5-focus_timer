const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

const ctrlPlay = document.querySelector(".btn-play");
const ctrlStop = document.querySelector(".btn-stop");
const ctrlUpTimer = document.querySelector(".btn-up");
const ctrlDownTimer = document.querySelector(".btn-down");

const btnTree = document.querySelector(".tree-button");
const btnCloud = document.querySelector(".cloud-button");
const btnMarket = document.querySelector(".market-button");
const btnFire = document.querySelector(".fire-button");

const fillTree = document.querySelector(".tree-fill");
const fillCloud = document.querySelector(".cloud-fill");
const fillMarket = document.querySelector(".market-fill");
const fillFire = document.querySelector(".fire-fill");

let seconds = Number(secondsDisplay.textContent);
let minutes = Number(minutesDisplay.textContent);

export {
	minutes,
	seconds,
	minutesDisplay,
	secondsDisplay,
	ctrlPlay,
	ctrlStop,
	ctrlUpTimer,
	ctrlDownTimer,
	btnTree,
	btnCloud,
	btnMarket,
	btnFire,
	fillTree,
	fillCloud,
	fillMarket,
	fillFire,
};
