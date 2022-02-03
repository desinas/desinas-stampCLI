#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
	title: pkgJSON.name,
	tagLine: `Hello, very nice to meet here!`,
	description: pkgJSON.description,
	version: pkgJSON.version,
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
});

console.log(`
Demetrios Kalcassinas

Utilised React as a Front-End Web Developer, building stunning user experiences for the Web with the evolving technology.

🐦 Twitter:   https://twitter.com/dikalcas
📖 GitHub:    https://github.com/desinas
😎 LinkedIn:  https://linkedin.com/in/desinas
`);
