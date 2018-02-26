const urlParser = function (str, data) {
	return str.replace(/\{\{(.*?)\}\}/g, function(match, token) {
		return data[token];
	});
};

export default urlParser;