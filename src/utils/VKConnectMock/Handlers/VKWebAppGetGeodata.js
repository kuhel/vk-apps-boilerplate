import { geoData, geoDataError } from '../Data/VKWebAppGetGeodata';
import VKWebAppEvent from '../VKWebAppEvent';

export default (hasError = false) => {
	return {
		postMessage: (params) => {
			VKWebAppEvent(!hasError ? geoData : geoDataError);
		}
	}
};
