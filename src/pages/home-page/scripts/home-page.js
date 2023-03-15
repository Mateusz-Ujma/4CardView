/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "../styles/home-page.scss";
import { card, cardOne, cardTwo, cardThree, cardFour } from "./cards";

const homepage = document.querySelector("#home-page");
homepage.classList.add("main");

const mainText = `<h2 class='main-text'>AI plays a significant role in our daily lives</h2>`;
const secondText = `<p class= 'second-text'>The goal of AI is to create systems that can operate autonomously, making decisions and taking actions based on their own understanding of the world, without the need for direct human input.</p>`;
const textWrapper = `<div class='text-wrapper'>${mainText}${secondText}</div>`;

const cardWrapper = () => {
	return `<div class='card-wrapper'>${card(cardOne) + card(cardTwo) + card(cardThree) + card(cardFour)}</div>`;
};
homepage.innerHTML = `<div class='wrapper'>${textWrapper + cardWrapper()}</div>`;
