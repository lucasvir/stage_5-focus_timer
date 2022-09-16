import { btnTree, btnCloud, btnMarket, btnFire } from "./elements.js";

export default function Sounds() {
	const treeAudio = new Audio("./assets/audio/Floresta.wav");

	const cloudAudio = new Audio("./assets/audio/Chuva.wav");

	const marketAudio = new Audio("./assets/audio/Cafeteria.wav");

	const fireAudio = new Audio("./assets/audio/Lareira.wav");

	function btnColorChange(btn, fill) {
		btn.classList.toggle("bg-check");
		fill.classList.toggle("color-icon-change");
	}

	function playTree() {
		treeAudio.play();
	}

	function playCloud() {
		cloudAudio.play();
	}

	function playMarket() {
		marketAudio.play();
	}

	function playFire() {
		fireAudio.play();
	}

	return {
		btnColorChange,
		playTree,
		playCloud,
		playMarket,
		playFire,
	};
}
