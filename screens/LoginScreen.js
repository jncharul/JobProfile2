import * as React from "react";
import { Text, View, TouchableOpacity, Image, KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import firebase from 'firebase';
import db from '../config';
export default class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    handleLogin = (email, password) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                this.props.navigation.navigate("Dashboard");
            })
            .catch(error => {
                Alert.alert(error.message);
            });
    };

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={{
                flex: 1,

            }}>

                <View style={{
                    flex: 0.5,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Image source={require("../assets/logo.png")}
                        style={{ width: 150, height: 150 }} />
                </View>
                <View style={{
                    flex: 0.5,
                    alignItems: "center"
                }}>
                    <TextInput
                        style={styles.textinput}
                        onChangeText={text => this.setState({ email: text })}
                        placeholder={"Enter Email"}
                        autoFocus
                    />
                    <TextInput
                        style={[styles.textinput, { marginTop: 20 }]}
                        onChangeText={text => this.setState({ password: text })}
                        placeholder={"Enter Password"}
                        secureTextEntry
                    />
                    <TouchableOpacity style={styles.button}
                        onPress={() => this.handleLogin(this.state.email, this.state.password)}>
                        <Text style={{
                            fontSize: 24,
                            color: "#FFFFFF",
                        }}>
                            LOGIN
                    </Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({
    textinput: {
        width: "75%",
        height: 55,
        padding: 10,
        borderColor: "#FFFFFF",
        borderWidth: 4,
        borderRadius: 10,
        fontSize: 18,
        color: "#FFFFFF",
        backgroundColor: "#5653D4"
    },
    button: {
        width: "43%",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F48D20",
        borderRadius: 15
    },
})