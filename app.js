const loveBtn = document.getElementById("loveBtn");
const header = document.getElementById("header");
const loveText = document.getElementById("loveText");
const slide = document.getElementById("main");
const text = document.getElementById("text")

let wordIndex = 1;
const words = ["bunny", "sweety", "honey", "princes"];

let slideIndex = 0;
const slidesText = [
  "I love your smile",
  "I love your smell",
  "I love your sweetness",
  "I love care of you",
  "I love your kindness",
  "I love your light",
  "I love your beauty",
  "I love your eyes",
  "I love your heat",
  "I love your tenderness",
];

loveBtn.addEventListener("click", () => {
  header.classList.toggle("header__active");
  loveBtn.classList.toggle("love__btn__active");
});

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function changeHeaderText() {
  while (true) {
    const textArray = text.textContent.split("");
    const length = textArray.length;
    const currentWord = words[wordIndex].split("");

    for (let i = 0; i < length; i++) {
      textArray.pop();
      text.textContent = textArray.join("");
      await delay(350);
    }

    await delay(300);

    for (let i = 0; i < currentWord.length; i++) {
      textArray.push(currentWord[i]);
      text.textContent = textArray.join("");
      await delay(350);
    }

    wordIndex += 1;
    if (wordIndex === words.length) {
      wordIndex = 0;
    }
    await delay(3000);
  }
}

async function changeSlides() {
  while (true) {
    slide.style.background = `url(images/pic/pic${
      1 + slideIndex
    }.jpg) no-repeat center center`;
    slide.style.backgroundSize = "cover";
    loveText.textContent = slidesText[slideIndex];

    slideIndex += 1;
    if (slideIndex === slidesText.length) {
      slideIndex = 0;
    }
    await delay(3500);
  }
}

changeHeaderText();
changeSlides();
