import React from 'react';
import Router from './router';
import { Provider } from 'react-redux';
import store from './store';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
Icon.loadFont()
MaterialIcon.loadFont()
Octicons.loadFont()

const App: React.FunctionComponent = () => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
};

export default App;
