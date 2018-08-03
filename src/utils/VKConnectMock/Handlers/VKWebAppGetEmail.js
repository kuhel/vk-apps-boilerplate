import { emailData, emailDataError } from '../Data/VKWebAppGetEmail';
import VKWebAppEvent from '../VKWebAppEvent';

export default (hasError = false) => {
	return {
		postMessage: (params) => {
			VKWebAppEvent(!hasError ? emailData : emailDataError);
		}
	}
};
