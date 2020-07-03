import React from 'react';
import { ViewStyle, StyleSheet } from 'react-native';
import { NativeRouter, Route, Switch } from "react-router-native";
import { connect } from "react-redux";
import BackHandlerHOC from '../components/HOC/BackHandlerHOC';
import BaseHome from '../pages/BaseHome';
import BaseNext from '../pages/BaseNext';
import { ApplicationConfig } from '../config/DefaultConfig';
import ConfigContext from '../config/AppConfigProvider';
import ThemedView from '../components/UI/ThemedView';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgetPassword from '../pages/ForgetPassword';
import VerifyCode from '../pages/VerifyCode';
import ChangePassword from '../pages/ChangePassword';
import Location from '../pages/Location';
import Filter from '../pages/Filter';

interface Props {
  configReducer: ApplicationConfig
}

const Router: React.FunctionComponent<Props> = ({
  configReducer
}: Props) => {
  return (
    <ConfigContext.Provider value={configReducer}>
      <ThemedView style={style.container}>
        <NativeRouter>
          <BackHandlerHOC>
            <Switch>
              <Route exact path="/" component={BaseHome} />
              <Route exact path="/base/" component={BaseNext} />
              <Route exact path="/login/" component={Login} />
              <Route exact path="/register/" component={Register} />
              <Route exact path="/forget/" component={ForgetPassword} />
              <Route exact path="/verify/" component={VerifyCode} />
              <Route exact path="/change/" component={ChangePassword} />
              <Route exact path="/location/" component={Location} />
              <Route exact path="/filter/" component={Filter} />
            </Switch>
          </BackHandlerHOC>
        </NativeRouter>
      </ThemedView>
    </ConfigContext.Provider>
  )
}

export default connect(({ configReducer }) => ({ configReducer }))(Router);

interface Style {
  container: ViewStyle
}

const style: Style = StyleSheet.create<Style>({
  container: {
      flex: 1
  }
})

