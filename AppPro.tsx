import React, { useState } from "react";
import { View, Text, StyleSheet, useColorScheme, TouchableOpacity } from 'react-native';

const age = 10;
let name = "Manpreet";

function AppPro(): JSX.Element {
    let [counter, setCounter] = useState(20);
    // let counter = 20;

    // const abc = () => {
    //     setCounter(counter + 1);
    // };

    let Son = "Krit";
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={styles.container}>
            {/* Custom button with increased size */}
            <TouchableOpacity onPress={()=>(counter - 1)} style={styles.button}>
                <Text style={styles.buttonText}>Increment</Text>
            </TouchableOpacity>

            <Text>{counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    WhiteText: {
        color: '#FFFFFF'
    },
    BlackText: {
        color: '#000000'
    },
    button: {
        backgroundColor: '#007BFF',  // Button color
        paddingVertical: 15,         // Increase the vertical padding for height
        paddingHorizontal: 30,       // Increase the horizontal padding for width
        borderRadius: 10,            // Rounded corners
        marginTop: 10,               // Spacing above the button
    },
    buttonText: {
        color: '#FFFFFF',            // Text color
        fontSize: 20,                // Increase text size
        fontWeight: 'bold',          // Bold text
        textAlign: 'center',         // Center the text within the button
    }
});

export default AppPro;
