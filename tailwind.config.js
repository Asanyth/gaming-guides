module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: theme => ({
				'forest': "url('public/pages/games/ark/images/forest.jpg)",
			}),
			fontFamily: {
				roboto: ['Roboto'],
				orbitron: ['Orbitron']
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}