import config from '../config/config'
import urlParser from '../utils/urlParser'


const assetURLParser = function(imageUrl) {
	return urlParser(imageUrl, { MEDIA_URL : config.MEDIA_URL})
};

export default assetURLParser;
