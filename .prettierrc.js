const fabric = require("@umijs/fabric");

module.exports = {
	...fabric.prettier,
	singleQuote: false,
	quoteProps: "as-needed",
	trailingComma: "none",
	useTabs: true,
	tabWidth: 4,
	printWidth: 80
};
