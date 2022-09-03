import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator'
import LogoutScreen from '../screens/LogoutScreen';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component {
    render() {
        return (

            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={BottomTabNavigator} />
                <Drawer.Screen name="Logout" component={LogoutScreen} />
            </Drawer.Navigator>

        )
    }
}