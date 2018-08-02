import { authData, authDataError } from '../Data/VKWebAppGetAuthToken';
import VKWebAppEvent from '../VKWebAppEvent';

export default (hasError = false) => {
	return {
		postMessage: (handler, params) => {
			VKWebAppEvent(!hasError ? authData : authDataError);
		}
	}
};
