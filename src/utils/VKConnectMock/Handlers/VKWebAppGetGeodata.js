import { geoData, geoDataError } from '../Data/VKWebAppGetGeodata';
import VKWebAppEvent from '../VKWebAppEvent';

export default (hasError = false) => {
	return {
		postMessage: (handler, params) => {
			VKWebAppEvent(!hasError ? geoData : geoDataError);
		}
	}
};
