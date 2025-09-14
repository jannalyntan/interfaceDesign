//--------------------------------------------------
//Letter to Audio
//--------------------------------------------------

// Create a soft, zen-like synth
const synth = new Tone.PolySynth(Tone.Synth, {
  oscillator: { type: "sine" }, // smooth & calm
  envelope: {
    attack: 1, // slow fade in
    decay: 1,
    sustain: 0.6, // holds a soft tone
    release: 4, // slow fade out
  },
});

// Add gentle reverb for spacious feel
const reverb = new Tone.Reverb({
  decay: 8, // long airy tail
  wet: 0.4, // blend in
}).toDestination();

synth.connect(reverb);

const now = Tone.now();

//--------------------------------------------------
// Note Maps
//--------------------------------------------------
const noteMap = {
  1: "C2",
  2: "D2",
  3: "E2",
  4: "F2",
  5: "G2",
  6: "A2",
  7: "B2",
  8: "C3",
  9: "D3",
  0: "E3",

  a: "C4",
  b: "D4",
  c: "E4",
  d: "F4",
  e: "G4",
  f: "A4",
  g: "B4",
  h: "C5",
  i: "D5",
  j: "E5",
  k: "F5",
  l: "G5",
  m: "A5",
  n: "B5",
  o: "C6",
  p: "D6",
  q: "E6",
  r: "F6",
  s: "G6",
  t: "A6",
  u: "B6",
  v: "C7",
  w: "D7",
  x: "E7",
  y: "F7",
  z: "G7",
};

const chordMap = {
  " ": ["C4", "E4", "G4"], // C major
  ",": ["D4", "F4", "A4"], // D minor
  ".": ["G3", "B3", "D4"], // G major
  "!": ["A3", "C4", "E4"], // A minor
  "?": ["E3", "G3", "B3"], // E minor
  "'": ["F3", "A3", "C4"], // F major
  "-": ["D3", "F3", "A3"], // D minor low
  _: ["B2", "D3", "F3"], // B diminished
  ":": ["A2", "C3", "E3"], // A minor low
  ";": ["G2", "B2", "D3"], // G major low
  '"': ["C3", "E3", "G3"], // C major lower
  "(": ["F2", "A2", "C3"], // F major lower
  ")": ["E2", "G2", "B2"], // E minor lower
  "[": ["D2", "F2", "A2"], // D minor lower
  "]": ["C2", "E2", "G2"], // C major bass
  "{": ["A2", "C3", "F3"], // F major variation
  "}": ["B2", "D3", "G3"], // G major variation
  "@": ["C5", "E5", "G5"], // bright C major
  "#": ["D5", "F5", "A5"], // bright D minor
  $: ["E5", "G5", "B5"], // bright E minor
  "%": ["F5", "A5", "C6"], // bright F major
  "^": ["G5", "B5", "D6"], // bright G major
  "&": ["A5", "C6", "E6"], // bright A minor
  "*": ["B5", "D6", "F6"], // B diminished bright
  "+": ["C3", "G3", "C4"], // power chord
  "=": ["D3", "A3", "D4"], // power chord
  "/": ["E3", "B3", "E4"], // power chord
  "\\": ["G3", "D4", "G4"], // power chord
  "|": ["A3", "E4", "A4"], // power chord
  "<": ["C4", "F4", "A4"], // F major inversion
  ">": ["D4", "G4", "B4"], // G major inversion
  "~": ["E4", "A4", "C5"], // A minor inversion
  "`": ["F4", "B4", "D5"], // B diminished inversion
};

const noteMapUpper = {
  A: "C#4",
  B: "D#4",
  C: "F4",
  D: "F#4",
  E: "G#4",
  F: "A#4",
  G: "C5",
  H: "C#5",
  I: "D#5",
  J: "F5",
  K: "F#5",
  L: "G#5",
  M: "A#5",
  N: "C6",
  O: "C#6",
  P: "D#6",
  Q: "F6",
  R: "F#6",
  S: "G#6",
  T: "A#6",
  U: "C7",
  V: "C#7",
  W: "D#7",
  X: "F7",
  Y: "F#7",
  Z: "G#7",
};

//--------------------------------------------------
// Overlay
//--------------------------------------------------
const textBox = document.querySelector("textarea");
const textDisplay = document.querySelector("#textDisplay");

textBox.addEventListener("input", () => {
  textDisplay.textContent = textBox.value;
});

//--------------------------------------------------
// Display Text
//--------------------------------------------------
function playChar(char) {
  if (noteMapUpper[char]) {
    synth.triggerAttackRelease(noteMapUpper[char], "8n");
  } else if (noteMap[char]) {
    synth.triggerAttackRelease(noteMap[char], "8n");
  } else if (chordMap[char]) {
    chordMap[char].forEach((note) => synth.triggerAttackRelease(note, "8n"));
  }
}

function syncDisplay(highlightIndex = -1) {
  // converts the text into its own html element
  const text = textBox.value;
  textDisplay.innerHTML = "";

  for (let i = 0; i < text.length; i++) {
    //creating a span for each letter
    const span = document.createElement("span");
    span.textContent = text[i];

    //when the letter is being played..
    if (i === highlightIndex) {
      span.style.color = "#535923";
      span.style.fontWeight = "bold";
      span.style.fontSize = "larger";
    } else {
      span.style.color = "#555";
    }

    //creating a span for each letter
    textDisplay.appendChild(span);
  }
}

//--------------------------------------------------
// Play Feature
//--------------------------------------------------
const play = document.querySelector("#play-btn");

let isPlaying = false;

play.addEventListener("click", async () => {
  isPlaying = true;
  const text = textBox.value;

  for (let i = 0; i < text.length; i++) {
    if (!isPlaying) break;

    const char = text[i];
    playChar(char);
    syncDisplay(i);

    await new Promise((res) => setTimeout(res, 200));
  }

  // reset highlight when done
  syncDisplay();
  isPlaying = false;
});

//--------------------------------------------------
// Reset Feature
//--------------------------------------------------
const reset = document.querySelector("#reset-btn");

// Reset button
reset.addEventListener("click", () => {
  textBox.value = "";
  textDisplay.innerHTML = "";
  synth.releaseAll();
  Tone.Transport.stop();
  Tone.Transport.cancel();

  isPlaying = false; // stop play loop
});

//--------------------------------------------------
// Typing Feature
//--------------------------------------------------
textBox.addEventListener("input", (e) => {
  const char = e.data;
  playChar(char);
  syncDisplay();
});

//--------------------------------------------------
// Shuffle Feature
//--------------------------------------------------
const shuffle = document.querySelector("#shuffle-btn");

const textList = [
  "breathe in… hold… exhale…",
  "softly now — feel your shoulders drop",
  "let go; let go; let go",
  "notice the silence: embrace it",
  "inhale calm — exhale tension",
  "float… drift… relax…",
  "gentle waves ~ steady heartbeats",
  "soft light (warm air) quiet mind",
  "slowly now: eyes closed… breathe",
  "peace ~ here ~ now",
  "release stress — feel ease",
  "listen… feel… observe…",
  "tiny pauses; tiny breaths",
  "calm spreads — tension melts",
  "stillness… nothing to hold",
  "let thoughts pass ~ like clouds",
  "soft hum: body unwinds",
  "eyes soft (gently close) …",
  "heart slows; mind clears",
  "embrace the quiet — be here",
];

shuffle.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * textList.length);
  textBox.value = textList[randomIndex];
  syncDisplay();
});
