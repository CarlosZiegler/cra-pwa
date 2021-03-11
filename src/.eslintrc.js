module.exports = {
	plugins: ["@typescript-eslint", "prettier", "jest"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"react-app",
	],
	parser: "@typescript-eslint/parser",
	rules: {
		"no-use-before-define": "off",
		"@typescript-eslint/no-use-before-define": "off",

		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-empty-function": "off",
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
		"no-mixed-spaces-and-tabs": "off", // it's checked by prettier
	},
	overrides: [
		{
			files: ["*.test.*"],
			rules: {
				"@typescript-eslint/no-non-null-assertion": "off",
			},
		},
	],
};
