var prompts = [
	{
		type: "confirm",
		name: "advancedMode",
		message: "Do you want to choose advanced mode? (Choose [N]o if you are unsure).",
		default: false
	},
	{
		name: 'extensionName',
		message: 'What\'s the name of the extension?'
	},
	{
		name: 'extensionDescription',
		message: 'Describe your extension:'
	},
	{
		name: 'authorName',
		message: 'What\'s your name?'
	},
	{
		// see https://github.com/yeoman/generator/issues/278
		when: function ( props ) {
			return props.advancedMode;
		},
		name: 'extensionNamespace',
		message: 'Advanced Mode: What\'s the namespace for your extension? (Leave it blank if you are unsure).'
	},
	{
		when: function ( props ) {
			return props.advancedMode;
		},
		type: 'list',
		name: 'extensionType',
		message: 'Advanced Mode: What\'s the type of your extension? This will define the icon used (Default: extension).',
		default: "extension",
		choices: [
			"extension",
			"bar-chart-vertical",
			"line-chart",
			"pie-chart",
			"gauge-chart",
			"scatter-chart",
			"text-image",
			"table",
			"list",
			"filterpane",
			"treemap"
		]
	},
	{
		when: function ( props ) {
			return props.advancedMode;
		},
		type: 'confirm',
		name: 'lessSupport',
		message: 'Advanced Mode: Would you like to write your styles in Less (instead of pure CSS)?',
		default: false
	},
	{
		when: function ( props ) {
			return props.advancedMode;
		},
		type: 'list',
		name: 'licence',
		message: 'Advanced Mode: Choose the desired license.',
		default: "mit",
		choices: [
			"agpl",
			"apache",
			"artistic",
			"bsd-3-clause",
			"bsd",
			"cc0",
			"eclipse",
			"gpl-v2",
			"gpl-v3",
			"isc",
			"lgpl-v2.1",
			"lgpl-v3",
			"mit",
			"mozilla",
			"no-license",
			"unlicense",
			"wtfpl"
		]
	}
];

module.exports = prompts;