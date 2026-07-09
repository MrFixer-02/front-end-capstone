const { engines } = require("../package.json");

function parseMinVersion(range) {
  const match = range.match(/(\d+)\.(\d+)\.(\d+)/);
  if (!match) throw new Error(`Could not parse engines.node range: ${range}`);
  return match.slice(1, 4).map(Number);
}

function isAtLeast(current, min) {
  for (let i = 0; i < 3; i++) {
    if (current[i] > min[i]) return true;
    if (current[i] < min[i]) return false;
  }
  return true;
}

const current = process.versions.node.split(".").map(Number);
const min = parseMinVersion(engines.node);

if (isAtLeast(current, min)) {
  console.log(
    `Node ${process.versions.node} OK (requires ${engines.node}).`
  );
  process.exit(0);
} else {
  console.error(
    `Node ${process.versions.node} does not satisfy required range ${engines.node}. Install Node LTS: https://nodejs.org`
  );
  process.exit(1);
}
