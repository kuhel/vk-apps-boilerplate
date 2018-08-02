export const authData = {
	type: 'VKWebAppAccessTokenReceived',
	data: {
		access_token: 'cc9521551d93ddb290b32648a37a006d87438a67f953dd37e564eb6db1ec28f79d05c16e207f00a623ef0'
	}
};

export const authDataError = { 
	error_type: 'api_error',
	error_data: {
		error_code: 1,
		error_msg: 'Error message',
		request_params: [],
	}
};
