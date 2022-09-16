import {
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
} from "./elements.js";

export default function Events({ timer, sound }) {
	ctrlPlay.addEventListener("click", function () {
		timer.countdown();
	});

	ctrlStop.addEventListener("click", function () {
		timer.hold();
	});

	ctrlUpTimer.addEventListener("click", function () {
		timer.upTimer();
	});

	ctrlDownTimer.addEventListener("click", function () {
		timer.downTimer();
	});

	btnTree.addEventListener("click", function () {
		sound.playTree();
		sound.btnColorChange(btnTree, fillTree);
	});

	btnCloud.addEventListener("click", function () {
		sound.playCloud();
		sound.btnColorChange(btnCloud, fillCloud);
	});

	btnMarket.addEventListener("click", function () {
		sound.playMarket();
		sound.btnColorChange(btnMarket, fillMarket);
	});

	btnFire.addEventListener("click", function () {
		sound.playFire();
		sound.btnColorChange(btnFire, fillFire);
	});
}
