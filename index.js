const { Command } = require('commander');
const program = new Command();

const { exec } = require('node:child_process');

console.log("Hello Mom")

exec('bcdedit /enum firmware', (error, stdout, stderr) => { console.log(stdout); });