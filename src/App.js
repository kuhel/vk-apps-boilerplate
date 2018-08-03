import React from 'react';
// import * as VKConnect from '@vkontakte/vkui-connect';
import VKConnect from  './utils/VKConnectMock/Observer';
import { ConfigProvider, View } from '@vkontakte/vkui';
import { isWebView } from '@vkontakte/vkui/src/lib/webview';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './containers/Home';
import Persik from './containers/Persik';

if (process.env.NODE_ENV !== 'production' && !isWebView) {
}

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			mockedUser: {
				photo_200: 'https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg',
				first_name: 'Karl Heinrich',
				last_name: 'Marx',
				city: {
					title: 'London',
				},
			},
			fetchedUser: {},
			access_token: '255f511f85047d79cf5aea962e4c5ade60fc89475874ab1efe4fd7552f44245c111850d6bedd6894027e5'
		};
	}

	componentWillMount() {
		// VK Connect
		VKConnect.subscribe((e) => {
			if (!e.detail) {
			} else if (e.detail.type === 'VKWebAppGetUserInfoResult') {
				this.setState({
					fetchedUser: {
						...e.detail.data 
					},
				});
			} else if (e.detail.type === 'VKWebAppAccessTokenReceived') {
				this.setState({
					access_token: {
						...e.detail.data.access_token
					},
				});
			}
		});
		VKConnect.send('VKWebAppGetAuthToken', {});
		VKConnect.send('VKWebAppGetUserInfo', {});
		VKConnect.send('VKWebAppCallAPIMethod', {
			method: 'users.get',
			params: {
				user_ids: '1,2,6492',
				v: '5.80',
				access_token: this.state.access_token
			}
		});
	}

	render() {
		return (
			<ConfigProvider isWebView={isWebView}>
				<View activePanel={this.state.activePanel} header={false}>
					<Home id="home" fetchedUser={this.state.fetchedUser} mockedUser={this.state.mockedUser} clickHandler={() => this.setState({ activePanel: 'persik' })} />
					<Persik id="persik" clickHandler={() => this.setState({ activePanel: 'home' })} />
				</View>
			</ConfigProvider>
		);
	}
}

export default App;
