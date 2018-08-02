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
			}
		});
		VKConnect.send('VKWebAppGetUserInfo', {});
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
