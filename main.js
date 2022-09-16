import Timer from "./timer.js";
import Sounds from "./sounds.js";
import Events from "./events.js";
import {
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
} from "./elements.js";

const timer = Timer({ minutesDisplay, secondsDisplay });
const sound = Sounds();

Events({ timer, sound });
