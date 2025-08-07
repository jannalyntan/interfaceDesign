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

// const mapInterBtn = document.querySelector("#mapInterBtn");
// console.log(mapInterBtn);
// const mapInterText = document.querySelector("#mapInterText");
// console.log(mapInterText);
// const mapInterTitle = document.querySelector("#mapInterTitle");
// console.log(mapInterTitle);
// const mapInterClose = document.querySelector("#mapInterClose");
// console.log(mapInterClose);

// // mapInterBtn.addEventListener("click", () => {
// //   mapInterBtn.classList.add("hidden");
// //   mapInterText.classList.remove("hidden");
// //   mapInterClose.classList.remove("hidden");
// // });

// // mapInterClose.addEventListener("click", () => {
// //   mapInterBtn.classList.remove("hidden");
// //   mapInterText.classList.add("hidden");
// //   mapInterClose.classList.add("hidden");
// // });

// const mapHoldBtn = document.querySelector("#mapHoldBtn");
// console.log(mapHoldBtn);
// const mapHoldText = document.querySelector("#mapHoldText");
// console.log(mapInterText);
// const mapHoldTitle = document.querySelector("#mapHoldTitle");
// console.log(mapInterTitle);
// const mapHoldClose = document.querySelector("#mapHoldClose");
// console.log(infoHoldClose);
// const mapHoldspaceBox = document.querySelector("#mappingContent .holdspace");
// console.log(mapHoldspaceBox);

// // mapHoldBtn.addEventListener("click", () => {
// //   mapHoldBtn.classList.add("hidden");
// //   mapHoldText.classList.remove("hidden");
// //   mapHoldspaceBox.classList.add("inverted");
// //   mapHoldClose.classList.remove("hidden");
// // });

// // mapHoldClose.addEventListener("click", () => {
// //   mapHoldBtn.classList.remove("hidden");
// //   mapHoldText.classList.add("hidden");
// //   mapHoldspaceBox.classList.remove("inverted");
// //   mapHoldClose.classList.add("hidden");
// // });

//-----------------------------------//
// Characterisation------------------//
//-----------------------------------//

const chaInterText = document.querySelector("#chaInterText");
console.log(chaInterText);
const chaInterTitle = document.querySelector("#chaInterTitle");
console.log(chaInterTitle);
const chaSubTitle = document.querySelector("#chaSubtextInter");
console.log(chaSubTitle);
const chaInterOnBtn = document.querySelector("#onBtn");
console.log(chaInterOnBtn);
const chaInterOffBtn = document.querySelector("#offBtn");
console.log(chaInterOffBtn);

let isInterOn = false; // default state: text is hidden

chaInterOnBtn.addEventListener("click", () => {
  if (!isInterOn) {
    chaInterText.classList.remove("hidden");
    chaInterOnBtn.classList.add("active");
    chaInterOffBtn.classList.remove("active");
    chaSubTitle.classList.add("hidden");
    isInterOn = true;
  }
});

chaInterOffBtn.addEventListener("click", () => {
  if (isInterOn) {
    chaInterText.classList.add("hidden");
    chaInterOffBtn.classList.add("active");
    chaInterOnBtn.classList.remove("active");
    chaSubTitle.classList.remove("hidden");
    isInterOn = false;
  }
});

const chaHoldText = document.querySelector("#chaHoldText");
console.log(chaHoldText);
const chaHoldTitle = document.querySelector("#chaHoldTitle");
console.log(chaHoldTitle);
const chaSubTitleHold = document.querySelector("#chaSubtextHold");
console.log(chaSubTitleHold);
const chaHoldOnBtn = document.querySelector("#onBtn2");
console.log(chaHoldOnBtn);
const chaHoldOffBtn = document.querySelector("#offBtn2");
console.log(chaHoldOffBtn);
const chaHoldspaceBox = document.querySelector("#characterContent .holdspace");
console.log(chaHoldspaceBox);

let isHoldOn = false; // default state: text is hidden

chaHoldOnBtn.addEventListener("click", () => {
  if (!isHoldOn) {
    chaHoldText.classList.remove("hidden");
    chaHoldOnBtn.classList.add("active");
    chaHoldOffBtn.classList.remove("active");
    chaSubTitleHold.classList.add("hidden");
    chaHoldspaceBox.classList.add("inverted");
    isHoldOn = true;
  }
});

chaHoldOffBtn.addEventListener("click", () => {
  if (isHoldOn) {
    chaHoldText.classList.add("hidden");
    chaHoldOffBtn.classList.add("active");
    chaHoldOnBtn.classList.remove("active");
    chaSubTitleHold.classList.remove("hidden");
    chaHoldspaceBox.classList.remove("inverted");
    isHoldOn = false;
  }
});

//-----------------------------------//
// Feedback -------------------------//
//-----------------------------------//

const feedHoldBtn = document.querySelector("#feedHoldBtn");
const feedHoldText = document.querySelector("#feedHoldText");
const feedHoldClose = document.querySelector("#feedHoldClose");
const feedHoldLoading = document.querySelector("#feedHoldLoading");
const feedHoldspaceBox = document.querySelector("#feedbackContent .holdspace");

const loadingFill = document.getElementById("loadingFill");
const loadingText = document.getElementById("loadingText");

feedHoldBtn.addEventListener("click", () => {
  feedHoldBtn.classList.add("hidden");
  feedHoldClose.classList.remove("hidden");

  // Reset
  loadingFill.style.width = "0%";
  loadingText.textContent = "Loading 0%";
  feedHoldLoading.classList.remove("hidden");

  let percent = 0;
  const loadingInterval = setInterval(() => {
    percent++;
    loadingFill.style.width = `${percent}%`;
    loadingText.textContent = `Loading... ${percent}%`;

    if (percent >= 100) {
      clearInterval(loadingInterval);
      feedHoldLoading.classList.add("hidden");
      feedHoldText.classList.remove("hidden");
      feedHoldspaceBox.classList.add("inverted");
    }
  }, 20); // ~2 seconds total (100 x 20ms = 2000ms)
});

feedHoldClose.addEventListener("click", () => {
  feedHoldBtn.classList.remove("hidden");
  feedHoldText.classList.add("hidden");
  feedHoldspaceBox.classList.remove("inverted");
  feedHoldClose.classList.add("hidden");
  feedHoldLoading.classList.add("hidden");
});
