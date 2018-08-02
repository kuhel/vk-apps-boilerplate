import GetUserInfo from './Handlers/VKWebAppGetUserInfo';
import Init from './Handlers/VKWebAppInit';
import GetAuthToken from './Handlers/VKWebAppGetAuthToken';
import CallAPIMethod from './Handlers/VKWebAppCallAPIMethod';
import GetGeodata from './Handlers/VKWebAppGetGeodata';

export default {
	'VKWebAppInit': Init(),
	// Data
	'VKWebAppGetAuthToken': GetAuthToken(),
	// Data
	'VKWebAppCallAPIMethod': CallAPIMethod(),
	// Data
	'VKWebAppGetGeodata': GetGeodata(),
	// Datab
	'VKWebAppGetUserInfo': GetUserInfo(),
	// Data
	'VKWebAppGetPhoneNumber': {},
	// Data
	'VKWebAppGetClientVersion': {},
	// UI
	'VKWebAppOpenPayForm': {},
	// UI
	'VKWebAppShare': {},
	// UI
	'VKWebAppAllowNotifications': {},
	// UI
	'VKWebAppDenyNotifications': {},
	// ???
	'VKWebAppViewUpdateNavigationState': {},
	// ???
	'VKWebAppSetTitle': {},
	// UI
	'VKWebAppShowWallPostBox': {},
	// Data
	'VKWebAppGetEmail': {},
	// ???
	'VKWebAppSetLocation': {},
	// UI
	'VKWebAppAllowMessagesFromGroup': {},
	// UI
	'VKWebAppJoinGroup': {},
};