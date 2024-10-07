import React from "react";
import { Text, StyleSheet, SafeAreaView, View } from "react-native";

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.header}>
                    
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: '100%',
        height: 130,
        backgroundColor: '#8A05BE'
    }
})

export default Home;