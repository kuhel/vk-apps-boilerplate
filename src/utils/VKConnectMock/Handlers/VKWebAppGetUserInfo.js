import { userData, userDataError } from '../Data/VKWebAppGetUserInfoResult';
import VKWebAppEvent from '../VKWebAppEvent';

export default (hasError = false) => {
	return {
		postMessage: (handler, params) => {
			VKWebAppEvent(!hasError ? userData : userDataError);
		}
	}
};
