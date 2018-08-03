import { initData, initDataError } from '../Data/VKWebAppInit';
import VKWebAppEvent from '../VKWebAppEvent';

export default (hasError = false) => {
	return {
		postMessage: (params) => {
			VKWebAppEvent(!hasError ? initData : initDataError);
		}
	}
};
