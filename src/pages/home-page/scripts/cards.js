import ml from "../../../assets/svg/machineLearning.svg";
import vr from "../../../assets/svg/vr-user.svg";
import tech from "../../../assets/svg/technology.svg";
import ai from "../../../assets/svg/ai.svg";
import "../styles/card.scss";

export const card = ({ img, titleText = "write your title here", contentText = "write content here", color }) => {
	return `
    <div class='card'>
        <div class='card__img-bg ${color}'>
            <img class='card__img' src='${img}'/>
        </div>
        <p class='card__title'>${titleText}</p>
        <content class='card__content'>${contentText}</content>
    </div>`;
};
export const cardOne = {
	img: ml,
	titleText: "Machine Learning",
	contentText: "The ability of AI systems to learn from data and improve their performance",
	color: "violet",
};
export const cardTwo = {
	img: vr,
	titleText: "Computer Vision",
	contentText: "The ability to process and analyze visual information, such as images and videos",
	color: "dark-blue",
};
export const cardThree = {
	img: tech,
	titleText: "Natural Language",
	contentText: "The ability of AI systems to understand, interpret, and generate human language ",
	color: "green",
};
export const cardFour = {
	img: ai,
	titleText: "Robotics",
	contentText: "Development of autonomous robots that can perform tasks without human intervention",
	color: "yellow",
};
