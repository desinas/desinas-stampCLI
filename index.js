#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const alert = require('cli-alerts');
const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');

const dim = chalk.dim;
const italic = chalk.italic;
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;
const purple = chalk.hex(`#6937FF`).bold.inverse;

unhandled();

welcome({
	title: `Demetrios Kalcassinas`,
	tagLine: `Hello, very nice to meet here!`,
	description: pkgJSON.description,
	version: pkgJSON.version,
	bgColor: `#6937FF`,
	color: `#000000`,
	bold: true,
	clear: true,
});

checkNode('10');

console.log(`${italic(
	`Utilised React as a Front-End Web Developer, building stunning user experiences for the Web with the evolving technology.`
)}

${twitterClr(` Twitter `)} ${dim(`https://twitter.com/dikalcas`)}
${githubClr(` GitHub `)}  ${dim(`https://github.com/desinas`)}
${purple(` Blog `)}    ${dim(`https://linkedin.com/in/desinas`)}
`);

alert({ type: 'info', msg: `Check out! I am ready to help you build your app.` });
