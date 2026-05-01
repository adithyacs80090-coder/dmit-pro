// Error-catching wrapper
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'crash.log');

function logError(err) {
  const msg = `[${new Date().toISOString()}] ${err.stack || err.message || String(err)}\n`;
  fs.appendFileSync(logFile, msg);
  console.error(msg);
}

process.on('uncaughtException', logError);
process.on('unhandledRejection', logError);

try {
  require('./dist/index.js');
} catch (err) {
  logError(err);
  process.exit(1);
}
