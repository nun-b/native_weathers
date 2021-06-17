import React from 'react';
import Styled from 'styled-components/native';

import WeatherView from '~/components/WeatherView';

const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
`;

/*
    [ npm package ]
    // Geolocation API
    // 사용자가 원할 경우, 웹 애플리케이션에 위치 정보를 제공할 수 있는 API
    // const API_KEY = '73bd07d674cc4569f650bad6f22dc79d';
    npm install --save react-native-geolocation-service
    (ios) npm install --save @react-native-community/geolocation

    ios -> Podfile (필요한 라이브러리 링크)
    yarn add @react-native-community/geolocation
    pod 'react-native-geolocation', path: '../node_modules/@react-native-community/geolocation'
    [ 추가 후 pod install ]

    ios -> 사용자 권한 추가 (ios/native_weather/Info.plist)
    <key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
	<string>날씨 정보를 가져오기 위해서는 위치 정보 권한이 필요합니다</string>
	<key>NSLocationAlwaysUsageDescription</key>
	<string>날씨 정보를 가져오기 위해서는 위치 정보 권한이 필요합니다</string>
	<key>NSLocationWhenInUseUsageDescription</key>
	<string>날씨 정보를 가져오기 위해서는 위치 정보 권한이 필요합니다</string>

	android -> 사용자 권한 추가 (/android/app/src/main/AndroidManifest.xml)
	<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

	[ ESLint error ]
	eslint-disable-next-line @typescript-eslint/no-unused-vars
	rules -> '@typescript-eslint/no-unused-vars': 0,
*/

interface Props {}

const App = ({}: Props) => {
    return (
        <Container>
            <WeatherView />
        </Container>
    );
};

export default App;
