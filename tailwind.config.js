module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			roboto: ['Roboto'],
			orbitron: ['Orbitron']
		},
		extend: {
			backgroundImage: theme => ({
				'forest': "url('pages/games/ark/images/forest.jpg')",
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}