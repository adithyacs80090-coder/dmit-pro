const fs = require('fs');
fs.writeFileSync('/home/zoecheaa/life.learnsaleswithcj.com/api/test-output.txt', 'Node.js is working! Time: ' + new Date().toISOString());
console.log('Test successful');
