//-----------------------------------//
// Tab ------------------------------//
//-----------------------------------//
const infoTab = document.querySelector("#infoTab");
const mappingTab = document.querySelector("#mappingTab");
const characterTab = document.querySelector("#characterTab");
const feedbackTab = document.querySelector("#feedbackTab");
const summaryTab = document.querySelector("#summaryTab");

const infoContent = document.querySelector("#infoContent");
const mappingContent = document.querySelector("#mappingContent");
const characterContent = document.querySelector("#characterContent");
const feedbackContent = document.querySelector("#feedbackContent");
const summaryContent = document.querySelector("#summaryContent");

infoTab.addEventListener("click", () => {
  infoContent.classList.remove("hidden");
  mappingContent.classList.add("hidden");
  characterContent.classList.add("hidden");
  feedbackContent.classList.add("hidden");
  summaryContent.classList.add("hidden");

  infoTab.classList.add("active");
  mappingTab.classList.remove("active");
  characterTab.classList.remove("active");
  feedbackTab.classList.remove("active");
  summaryTab.classList.remove("active");
});

mappingTab.addEventListener("click", () => {
  mappingContent.classList.remove("hidden");
  infoContent.classList.add("hidden");
  characterContent.classList.add("hidden");
  feedbackContent.classList.add("hidden");
  summaryContent.classList.add("hidden");

  mappingTab.classList.add("active");
  infoTab.classList.remove("active");
  characterTab.classList.remove("active");
  feedbackTab.classList.remove("active");
    summaryTab.classList.remove("active");
});

characterTab.addEventListener("click", () => {
  mappingContent.classList.add("hidden");
  infoContent.classList.add("hidden");
  characterContent.classList.remove("hidden");
  feedbackContent.classList.add("hidden");
  summaryContent.classList.add("hidden");

  mappingTab.classList.remove("active");
  infoTab.classList.remove("active");
  characterTab.classList.add("active");
  feedbackTab.classList.remove("active");
    summaryTab.classList.remove("active");
});

feedbackTab.addEventListener("click", () => {
  mappingContent.classList.add("hidden");
  infoContent.classList.add("hidden");
  characterContent.classList.add("hidden");
  feedbackContent.classList.remove("hidden");
  summaryContent.classList.add("hidden");

  mappingTab.classList.remove("active");
  infoTab.classList.remove("active");
  characterTab.classList.remove("active");
  feedbackTab.classList.add("active");
    summaryTab.classList.remove("active");
});

summaryTab.addEventListener("click", () => {
  mappingContent.classList.add("hidden");
  infoContent.classList.add("hidden");
  characterContent.classList.add("hidden");
  feedbackContent.classList.add("hidden");
  summaryContent.classList.remove("hidden");

  mappingTab.classList.remove("active");
  infoTab.classList.remove("active");
  characterTab.classList.remove("active");
  feedbackTab.classList.remove("active");
    summaryTab.classList.add("active");
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

//-----------------------------------//
// Mapping.    ----------------------//
//-----------------------------------//

const mapInterBtn = document.querySelector("#mapInterBtn");
console.log(mapInterBtn);
const mapInterText = document.querySelector("#mapInterText");
console.log(mapInterText);
const mapInterTitle = document.querySelector("#mapInterTitle");
console.log(mapInterTitle);
const mapInterClose = document.querySelector("#mapInterClose");
console.log(mapInterClose);

mapInterBtn.addEventListener("click", () => {
  mapInterBtn.classList.add("hidden");
  mapInterText.classList.remove("hidden");  mapInterClose.classList.remove("hidden");
});

mapInterClose.addEventListener("click", () => {
  mapInterBtn.classList.remove("hidden");
  mapInterText.classList.add("hidden");
  mapInterClose.classList.add("hidden");
});

const mapHoldBtn = document.querySelector("#mapHoldBtn");
console.log(mapHoldBtn);
const mapHoldText = document.querySelector("#mapHoldText");
console.log(mapInterText);
const mapHoldTitle = document.querySelector("#mapHoldTitle");
console.log(mapInterTitle);
const mapHoldClose = document.querySelector("#mapHoldClose");
console.log(infoHoldClose);
const mapHoldspaceBox = document.querySelector("#mappingContent .holdspace");
console.log(mapHoldspaceBox);

mapHoldBtn.addEventListener("click", () => {
  mapHoldBtn.classList.add("hidden");
  mapHoldText.classList.remove("hidden");
  mapHoldspaceBox.classList.add("inverted");
  mapHoldClose.classList.remove("hidden");
});

mapHoldClose.addEventListener("click", () => {
  mapHoldBtn.classList.remove("hidden");
  mapHoldText.classList.add("hidden");
  mapHoldspaceBox.classList.remove("inverted");
  mapHoldClose.classList.add("hidden");
});

//-----------------------------------//
// Characterisation------------------//
//-----------------------------------//

const chaInterBtn = document.querySelector("#chaInterBtn");
console.log(chaInterBtn);
const chaInterText = document.querySelector("#chaInterText");
console.log(chaInterText);
const chaInterTitle = document.querySelector("#chaInterTitle");
console.log(chaInterTitle);
const chaInterClose = document.querySelector("#chaInterClose");
console.log(chaInterClose);

chaInterBtn.addEventListener("click", () => {
  chaInterBtn.classList.add("hidden");
  chaInterText.classList.remove("hidden");
  chaInterClose.classList.remove("hidden");
});

chaInterClose.addEventListener("click", () => {
  chaInterBtn.classList.remove("hidden");
  chaInterText.classList.add("hidden");
  chaInterClose.classList.add("hidden");
});

const chaHoldBtn = document.querySelector("#chaHoldBtn");
console.log(chaHoldBtn);
const chaHoldText = document.querySelector("#chaHoldText");
console.log(chaHoldText);
const chaHoldTitle = document.querySelector("#chaHoldTitle");
console.log(chaHoldTitle);
const chaHoldClose = document.querySelector("#chaHoldClose");
console.log(chaHoldClose);
const chaHoldspaceBox = document.querySelector("#characterContent .holdspace");
console.log(mapHoldspaceBox);

chaHoldBtn.addEventListener("click", () => {
  chaHoldBtn.classList.add("hidden");
  chaHoldText.classList.remove("hidden");
  chaHoldspaceBox.classList.add("inverted");
  chaHoldClose.classList.remove("hidden");
});

chaHoldClose.addEventListener("click", () => {
  chaHoldBtn.classList.remove("hidden");
  chaHoldText.classList.add("hidden");
  chaHoldspaceBox.classList.remove("inverted");
  chaHoldClose.classList.add("hidden");
});

//-----------------------------------//
// Feedback -------------------------//
//-----------------------------------//

const feedInterBtn = document.querySelector("#feedInterBtn");
console.log(feedInterBtn);
const feedInterText = document.querySelector("#feedInterText");
console.log(feedInterText);
const feedInterTitle = document.querySelector("#feedInterTitle");
console.log(feedInterTitle);
const feedInterClose = document.querySelector("#feedInterClose");
console.log(feedInterClose);

feedInterBtn.addEventListener("click", () => {
  feedInterBtn.classList.add("hidden");
  feedInterText.classList.remove("hidden");
  feedInterClose.classList.remove("hidden");
});

feedInterClose.addEventListener("click", () => {
  feedInterBtn.classList.remove("hidden");
  feedInterText.classList.add("hidden");
  feedInterClose.classList.add("hidden");
});

const feedHoldBtn = document.querySelector("#feedHoldBtn");
console.log(feedHoldBtn);
const feedHoldText = document.querySelector("#feedHoldText");
console.log(feedHoldText);
const feedHoldTitle = document.querySelector("#feedHoldTitle");
console.log(feedHoldTitle);
const feedHoldClose = document.querySelector("#feedHoldClose");
console.log(feedHoldClose);
const feedHoldspaceBox = document.querySelector("#feedbackContent .holdspace");
console.log(feedHoldspaceBox);

feedHoldBtn.addEventListener("click", () => {
  feedHoldBtn.classList.add("hidden");
  feedHoldText.classList.remove("hidden");
  feedHoldspaceBox.classList.add("inverted");
  feedHoldClose.classList.remove("hidden");
});

feedHoldClose.addEventListener("click", () => {
  feedHoldBtn.classList.remove("hidden");
  feedHoldText.classList.add("hidden");
  feedHoldspaceBox.classList.remove("inverted");
  feedHoldClose.classList.add("hidden");
});
