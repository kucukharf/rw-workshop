const config = {
	apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:3001',
	endpoints: {
		WORKS: '/api/works/all',
		WORK_DETAILS: '/api/work/{{item}}',
	},
};

export default config;
