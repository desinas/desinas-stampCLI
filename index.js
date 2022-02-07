#!/usr/bin/env node
const chalk = require('chalk');
const alert = require('cli-alerts');
const handleError = require('cli-handle-error');

const init = require('./utils/init');
const args = process.argv.slice(2);

const dim = chalk.dim;
const italic = chalk.italic;
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;
const purple = chalk.hex(`#6937FF`).bold.inverse;

const socialInfo = `
${twitterClr(` Twitter `)} ${dim(`https://twitter.com/dikalcas`)}
${githubClr(` GitHub `)}  ${dim(`https://github.com/desinas`)}
${purple(` Blog `)}    ${dim(`https://linkedin.com/in/desinas`)}
`;

const adInfo = alert({ type: 'info', msg: `Check out! I am ready to help you build your app.` });

const printSocial = args.indexOf('--no-social') === -1;
const social = printSocial ? socialInfo : ``;

const printAd = args.indexOf('--no-ad') === -1;
const ad = printAd ? adInfo : ``;

(async () => {
	init();

	console.log(
		`${italic(
			`Utilised React as a Front-End Web Developer, building stunning user experiences for the Web with the evolving technology.
			`
		)}

		${social}
		${ad}
		`
	);

	// let err;
	// err = false;
	// // err = new Error(`Blog API`); // OR Error can be a real error.
	// if (err) {
	// 	handleError(`Blog API is down.`, err, true, false);
	// }
})();
