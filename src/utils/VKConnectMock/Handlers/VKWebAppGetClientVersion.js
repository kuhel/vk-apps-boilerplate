import { clientData, clientDataError } from '../Data/VKWebAppGetClientVersion';
import VKWebAppEvent from '../VKWebAppEvent';

export default (hasError = false) => {
	return {
		postMessage: (handler, params) => {
			VKWebAppEvent(!hasError ? clientData : clientDataError);
		}
	}
};
