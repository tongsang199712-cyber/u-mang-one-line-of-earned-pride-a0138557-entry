const fs = require("node:fs");
const path = require("node:path");

// One line of earned pride: a quiet, hard-won moment, told plainly.
const LINE = "After eleven years of mopping the gym floor, Luis sank a free throw after practice — and his mop, leaning in the corner, finally got to watch him score.";

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

// The gate: /output/entry.txt must be UTF-8 text of 1 to 240 characters,
// a single line, and not only white space.
const chars = [...LINE].length;
if (chars < 1 || chars > 240) {
  throw new Error(`line is ${chars} characters, must be 1 to 240`);
}
if (LINE.trim().length === 0) {
  throw new Error("line is only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, LINE, "utf8");
fs.chmodSync(outFile, 0o644);
console.log(`Wrote ${chars} characters to ${outFile}`);
