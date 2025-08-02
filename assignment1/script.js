//-----------------------------------//
// Tab ------------------------------//
//-----------------------------------//
const infoTab = document.querySelector("#infoTab");
const mappingTab = document.querySelector("#mappingTab");
const characterTab = document.querySelector("#characterTab");
const feedbackTab = document.querySelector("#feedbackTab");

const infoContent = document.querySelector("#infoContent");
const mappingContent = document.querySelector("#mappingContent");
const characterContent = document.querySelector("#characterContent");
const feedbackContent = document.querySelector("#feedbackContent");

infoTab.addEventListener("click", () => {
  infoContent.classList.remove("hidden");
  mappingContent.classList.add("hidden");
  characterContent.classList.add("hidden");
  feedbackContent.classList.add("hidden");

  infoTab.classList.add("active");
  mappingTab.classList.remove("active");
  characterTab.classList.remove("active");
  feedbackTab.classList.remove("active");
});

mappingTab.addEventListener("click", () => {
  mappingContent.classList.remove("hidden");
  infoContent.classList.add("hidden");
  characterContent.classList.add("hidden");
  feedbackContent.classList.add("hidden");

  mappingTab.classList.add("active");
  infoTab.classList.remove("active");
  characterTab.classList.remove("active");
  feedbackTab.classList.remove("active");
});

characterTab.addEventListener("click", () => {
  mappingContent.classList.add("hidden");
  infoContent.classList.add("hidden");
  characterContent.classList.remove("hidden");
  feedbackContent.classList.add("hidden");

  mappingTab.classList.remove("active");
  infoTab.classList.remove("active");
  characterTab.classList.add("active");
  feedbackTab.classList.remove("active");
});

feedbackTab.addEventListener("click", () => {
  mappingContent.classList.add("hidden");
  infoContent.classList.add("hidden");
  characterContent.classList.add("hidden");
  feedbackContent.classList.remove("hidden");

  mappingTab.classList.remove("active");
  infoTab.classList.remove("active");
  characterTab.classList.remove("active");
  feedbackTab.classList.add("active");
});

//-----------------------------------//
// Information ----------------------//
//-----------------------------------//

const infoInterBtn = document.querySelector("#infoInterBtn");
console.log(infoInterBtn);
const infoInterText = document.querySelector("#infoInterText");
console.log(infoInterText);
const infoInterTitle = document.querySelector("#infoInterTitle");
console.log(infoInterTitle);
const infoInterClose = document.querySelector("#infoInterClose");
console.log(infoInterClose);

infoInterBtn.addEventListener("click", () => {
  infoInterBtn.classList.add("hidden");
  infoInterText.classList.remove("hidden");
  infoInterClose.classList.remove("hidden");
});

infoInterClose.addEventListener("click", () => {
  infoInterBtn.classList.remove("hidden");
  infoInterText.classList.add("hidden");
  infoInterClose.classList.add("hidden");
});

const infoHoldBtn = document.querySelector("#infoHoldBtn");
console.log(infoHoldBtn);
const infoHoldText = document.querySelector("#infoHoldText");
console.log(infoInterText);
const infoHoldTitle = document.querySelector("#infoHoldTitle");
console.log(infoInterTitle);
const infoHoldClose = document.querySelector("#infoHoldClose");
console.log(infoHoldClose);
const holdspaceBox = document.querySelector(".holdspace");
console.log(holdspaceBox);

infoHoldBtn.addEventListener("click", () => {
  infoHoldBtn.classList.add("hidden");
  infoHoldText.classList.remove("hidden");
  holdspaceBox.classList.add("inverted");
  infoHoldClose.classList.remove("hidden");
});

infoHoldClose.addEventListener("click", () => {
  infoHoldBtn.classList.remove("hidden");
  infoHoldText.classList.add("hidden");
  holdspaceBox.classList.remove("inverted");
  infoHoldClose.classList.add("hidden");
});
