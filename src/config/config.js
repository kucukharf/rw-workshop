const config = {
	//apiUrl: process.env.REACT_APP_API_URL || 'http://api.burakarslan.com.tr',
	apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:3001',
	endpoints: {
		WORKS: '/api/works/all',
		WORK_DETAILS: '/api/work/{{item}}',
	},
	domain:{
		default:'burakarslan.com.tr'
	}
};

export default config;
