import React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import * as firebase from 'firebase'

export default class RegisterScreen extends React.Component{
    static navigationOptions = {
        header: null
    };

    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    };

    handleSignUp = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(userCredentials => {
            return userCredentials.user.updateProfile({
                displayName: this.state.name
            });
        })
        .catch(error => this.setState({errorMessage: error.message}));
    };

    render(){
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>

                <Image 
                    style={{width: 300, height: 190, marginLeft: 60, marginTop: 20}} 
                    source={require('../assets/logo.png')}>
                </Image>

                <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
                    <Ionicons name="ios-arrow-dropleft-circle" size={32} color="#FFF"></Ionicons>
                </TouchableOpacity>

                <Text style={styles.greeting}>
                    {'Sign up to get started. :)'}
                </Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Username</Text>
                        <TextInput style={styles.input} 
                        autoCapitalize="none" 
                        onChangeText={name => this.setState({name})}
                        value={this.state.name}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput style={styles.input} 
                        autoCapitalize="none" 
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput style={styles.input} secureTextEntry 
                        autoCapitalize="none"
                        onChangeText={password => this.setState({password})}
                        value={this.state.password}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{color: "#FFF", fontWeight: "500"}}>Sign up</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={{alignSelf: "center", marginTop: 32, marginBottom: 15}}
                onPress={() => this.props.navigation.navigate("Login")}>
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                        Have an account? <Text style={{ fontWeight: "500", color: "#009933" }}>Login</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#e6ffff"
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error:{
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#009933",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    back:{
        position: "absolute",
        top: 15,
        left: 16,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#A2E59B",
        alignItems: "center",
        justifyContent: "center"
    }
})