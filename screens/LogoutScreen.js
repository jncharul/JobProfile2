import * as React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
export default class LogoutScreen extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={() => firebase.auth().signOut()}>
                    <Text>
                        Logout
                </Text>
                </TouchableOpacity>
            </View>
        )
    }
}