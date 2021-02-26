import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
function AppText({children}) {
    return (
       <Text style={styles.text}>{props.children}</Text>
    );
}

Platform.select({
    iso:{
        fontsize: 20,
        fontFamily: "Avenir",
    },
    android: {
        fontSize: 18,
        fontFamily: "Roboto",
    },
})
const styles = StyleSheet.create({
    text:{
      color: "tomato",

    },
})

export default AppText;