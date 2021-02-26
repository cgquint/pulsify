import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
    return (
       <ImageBackground 
       blurRadius={3}
       style={styles.background}source={require("../assets/background.jpeg")}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo}source={require("../assets/pulsify-logo.png")}/>
            <Text style={styles.tagline}>Live In The Moment</Text>
        </View>
        <View style={styles.buttonsContainer}>
            <AppButton  title="Login"/>
            <AppButton title="Register"/>
        </View>
        
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonsContainer:{
        padding: 20,
        width: "100%",

    },
    
    logo: {
        width: 420,
        height: 420,
    },
    logoContainer: {
        position: "absolute",
        top: 45,
        alignItems: "center",
        
    },
    tagline:{
        position: "absolute",
        top: 300,
        alignItems: "center",
        color: "white",
        fontWeight: "600",
        fontSize: 25,
        paddingVertical: 20,
    }
   
})

export default WelcomeScreen;