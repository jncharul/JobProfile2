import * as React from 'react';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native'


export default class App extends React.Component {
  render() {
    return (

      <AppContainer />



    )
  }
}

const SwitchNavigator = createSwitchNavigator({
  Login: {
    screen: LoginScreen
  },
  Dashboard: {
    screen: DashboardScreen
  }
},
  {
    initialRouteName: "Login"
  }
)


const AppContainer = createAppContainer(SwitchNavigator);