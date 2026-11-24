import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Chill — a single-sentence horror line, under 200 characters.
// The scare is earned, not announced: a dead man's smartwatch calmly
// reporting his replacement, as if his death were a routine handover.
const line =
  "At 3:12 a.m. my smartwatch logged my heart stopping, then texted my wife: 'We've already notified your replacement.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
