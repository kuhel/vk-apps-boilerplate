import { emailData, emailDataError } from '../Data/VKWebAppGetEmail';
import VKWebAppEvent from '../VKWebAppEvent';

export default (hasError = false) => {
	return {
		postMessage: (handler, params) => {
			VKWebAppEvent(!hasError ? emailData : emailDataError);
		}
	}
};
