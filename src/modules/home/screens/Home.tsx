import React from "react";
import { Text, Image, StyleSheet, SafeAreaView, View, FlatList, StatusBar } from "react-native";

const DATA = [
    {
        id: 1,
        title: 'Pix',
    },
    {
        id: 2,
        title: 'Pagar',
    },
    {
        id: 3,
        title: 'Transferir',
    },
    {
        id: 4,
        title: 'Depositar',
    },
    {
        id: 5,
        title: 'Pegar emprestado',
    },
    {
        id: 6,
        title: 'Recarga celular'
    }
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

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

                <View style={{padding: 20}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 24, color: 'black'}}>Conta</Text>
                        <Image
                            style={{width: 20, height: 35}}
                            source={require('../imgs/proximo.png')}
                        />
                    </View>
                    <Text style={{fontSize: 28, color: 'black', fontWeight: 'bold'}}>R$ 674,65</Text>
                </View>

                <View /*style={styles.container2}*/>
                    <FlatList 
                        data={DATA}
                        renderItem={({item}) => <Item title={item.title} />}
                        keyExtractor={item => item.id.toString()}
                        horizontal={true}   // Rolar na horizontal
                        showsHorizontalScrollIndicator={false}  // Oculta barra de rolagem
                    />
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
        height: '35%',
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
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 50
    },
    title: {
        fontSize: 32,
    },
    container2: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
})

export default Home;