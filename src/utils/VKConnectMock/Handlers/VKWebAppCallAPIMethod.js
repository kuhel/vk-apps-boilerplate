import { apiData, apiDataError } from '../Data/VKWebAppCallAPIMethod';
import VKWebAppEvent from '../VKWebAppEvent';

export default (hasError = false) => {
	return {
		postMessage: (handler, params) => {
			VKWebAppEvent(!hasError ? apiData : apiDataError);
		}
	}
};
