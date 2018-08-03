import { clientData, clientDataError } from '../Data/VKWebAppGetClientVersion';
import VKWebAppEvent from '../VKWebAppEvent';

export default (hasError = false) => {
	return {
		postMessage: (params) => {
			VKWebAppEvent(!hasError ? clientData : clientDataError);
		}
	}
};
