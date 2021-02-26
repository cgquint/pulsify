import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
    <View styles={styles.container}>
    <View style={styles.closeIcon}></View>
    <View style={styles.deleteIcon}></View>
   
    <Image 
    resizeMode="contain" 
    style={styles.image} 
    source={require("../assets/palm-tree.jpeg")}
    />
    </View>
    );
}


const styles = StyleSheet.create({
    
    closeIcon:{
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "relative",
        top: 50,
        left: 30,

    },
    container: {
     backgroundColor: "#000",
     flex: 1,   

    },
    
   deleteIcon:{
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 50,
    right: 30,
   },
    
    image: {
        width: "100%",
        height: "100%",
    },
});

export default ViewImageScreen;