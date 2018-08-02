import { phoneData, phoneDataError } from '../Data/VKWebAppGetPhoneNumber';
import VKWebAppEvent from '../VKWebAppEvent';

export default (hasError = false) => {
	return {
		postMessage: (handler, params) => {
			VKWebAppEvent(!hasError ? phoneData : phoneDataError);
		}
	}
};
