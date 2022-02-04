#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const dim = chalk.dim;
const italic = chalk.italic;
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;
const purple = chalk.hex(`#6937FF`).bold.inverse;

// Alerts.
const sym = require('log-symbols');
const success = chalk.green.inverse;
const info = chalk.blue.inverse;
const warning = chalk.keyword(`orange`).inverse;
const error = chalk.red.bold.inverse;

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

console.log(`${italic(
	`Utilised React as a Front-End Web Developer, building stunning user experiences for the Web with the evolving technology.`
)}

${twitterClr(` Twitter `)} ${dim(`https://twitter.com/dikalcas`)}
${githubClr(` GitHub `)}  ${dim(`https://github.com/desinas`)}
${purple(` Blog `)}    ${dim(`https://linkedin.com/in/desinas`)}
`);

console.log(`
${success(` SUCCESS `)} Thank for using this CLI. ${sym.success}

${info(` INFO `)} I am a Front-End Web Developer. ${sym.info}

${warning(` WARNING `)} This is a warning message. ${sym.warning}

${error(` ERROR `)} I'm on vacation. Contact me next week. ${sym.error}
`);
