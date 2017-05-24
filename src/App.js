import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';

import Login from './Component/Login';
import ContentFeed from './Component/ContentFeed';
import register from './Component/register';
import Menuice from './Component/Menuice';
import Foot from './Component/Foot'

export default class App extends Component {
  render() {
    return (
      <Router>
      <Scene key="root">
        <Scene key="login" component={Login} title="Login" hideNavBar/>
        <Scene key="contentfeed" component={ContentFeed} title="Content" hideNavBar/>
        <Scene key="Register" component={register} title="register" hideNavBar/>
        <Scene key="menuice" component={Menuice} title="Menuice" hideNavBar/>
        <Scene key="foot" component={Foot} title="Foot" hideNavBar/>
      </Scene>
    </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});