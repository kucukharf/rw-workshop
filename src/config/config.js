const base = process.env.REACT_APP_ENV === 'development' ? 'http://localhost:3001' : 'api.burakarslan.com.tr';

const config = {
	env:process.env.REACT_APP_ENV || 'development',
	API_URL: process.env.REACT_APP_API_URL || base,
	MEDIA_URL: process.env.REACT_APP_API_URL || base + '/netlify/functions/media',
	endpoints: {
		WORKS: '/netlify/functions/works',
		WORK_DETAILS: '',
	},
	domain:{
		default:'burakarslan.com.tr'
	}
};

export default config;
