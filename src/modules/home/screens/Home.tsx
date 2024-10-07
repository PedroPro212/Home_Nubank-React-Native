import React from "react";
import { Text, Image, StyleSheet, SafeAreaView, View } from "react-native";

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.header}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
                        <View style={styles.header_img_user_backg}>
                            <Image
                                style={styles.header_img_user}
                                source={require('../imgs/user.png')}
                            />
                        </View>
                        <View style={{flexDirection: 'row', gap: 15}}>
                            <Image
                                style={styles.header_img_opcoes}
                                source={require('../imgs/olho2.png')}
                            />
                            <Image
                                style={styles.header_img_opcoes}
                                source={require('../imgs/interrogacao2.png')}
                            />
                            <Image
                                style={styles.header_img_opcoes}
                                source={require('../imgs/email2.png')}
                            />
                        </View>
                    </View>

                    <Text style={styles.header_nome}>Olá, Pedro</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    header: {
        width: '100%',
        height: '40%',
        backgroundColor: '#8A05BE'
    },
    header_img_user:{
        width: 35,
        height: 35,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header_img_user_backg: {
        width: 55,
        height: 55,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header_img_opcoes: {
        width: 30,
        height: 30
    },
    header_nome: {
        color: '#FFF',
        fontSize: 20,
        paddingLeft: 20
    }
})

export default Home;