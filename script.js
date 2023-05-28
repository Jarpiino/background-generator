// Load the full build.
// var _ = require("lodash");
// console.log(_);

let cssCopy = document.querySelector("h3");
let colorInput1 = document.getElementById("color1");
let colorInput2 = document.getElementById("color2");
let bodyGradient = document.getElementById("gradient");
let randomButton = document.getElementById("random");

const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(cssCopy.innerHTML);
    console.log("Content copied to clipboard");
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied gradient";
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

const randomHexGenerator = () => {
  let hexNumber = (Math.random() * 0xfffff * 1000000).toString(16);
  return `#${hexNumber.slice(0, 6)}`;
};
const setBgAccordingToEvent = () => {
  bodyGradient.style.background = `linear-gradient(to right, ${colorInput1.value}, ${colorInput2.value})`;
};
const createCssCodeForGradient = () => {
  cssCopy.textContent = "background: " + bodyGradient.style.background + ";";
};

const changeBgAccordingToInputs = () => {
  setBgAccordingToEvent();
  createCssCodeForGradient();
};

const changeBgGradientOnRandomButton = () => {
  setBgAccordingToEvent();
  createCssCodeForGradient();
};
const changeBackgroundOnClick = () => {
  colorInput1.value = randomHexGenerator();
  colorInput2.value = randomHexGenerator();
  changeBgGradientOnRandomButton();
};

const setGradientOnPageLoad = () => {
  randomHex1 = randomHexGenerator();
  randomHex2 = randomHexGenerator();
  colorInput1.value = randomHex1;
  colorInput2.value = randomHex2;
  bodyGradient.style.background = `linear-gradient(to right, ${randomHex1}, ${randomHex2})`;
  createCssCodeForGradient();
};
setGradientOnPageLoad();

colorInput1.addEventListener("input", changeBgAccordingToInputs);
colorInput2.addEventListener("input", changeBgAccordingToInputs);

randomButton.addEventListener("click", () => changeBackgroundOnClick());
