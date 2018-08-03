import { apiData, apiDataError } from '../Data/VKWebAppCallAPIMethod';
import VKWebAppEvent from '../VKWebAppEvent';

const stringifyParans = (params) => {
	const paramsKeys = Object.keys(params);
	return paramsKeys.length > 0 ?
		paramsKeys.map((key) => `${key}=${params[key]}`).join('&')
		:
		'';
};

export default (hasError = false) => {
	return {
		postMessage: (params) => {
			fetch(`/${params.method}?${stringifyParans(params.params)}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				return data.response;
			})
			.catch((err) => {
				throw new Error(err);
			});
			VKWebAppEvent(!hasError ? apiData : apiDataError);
		}
	}
};
