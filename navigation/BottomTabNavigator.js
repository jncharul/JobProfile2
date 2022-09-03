import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ReadProfiles from '../screens/ReadProfiles';
import AddProfile from '../screens/AddProfile';

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends React.Component {
    render() {
        return (

            <Tab.Navigator>
                <Tab.Screen name="Create Profile" component={AddProfile} />
                <Tab.Screen name="Read Profile" component={ReadProfiles} />
            </Tab.Navigator>

        )
    }
}