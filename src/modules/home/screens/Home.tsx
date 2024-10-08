import React from "react";
import { Text, Image, StyleSheet, SafeAreaView, View, FlatList, StatusBar } from "react-native";

const DATA = [
    {
        id: 1,
        title: 'Pix',
        image: require('../imgs/pix.png'),
    },
    {
        id: 2,
        title: 'Pagar',
        image: require('../imgs/code2.png'),
    },
    {
        id: 3,
        title: 'Transferir',
        image: require('../imgs/nota2.png'),
    },
    {
        id: 4,
        title: 'Depositar',
        image: require('../imgs/nota2.png'),
    },
    {
        id: 5,
        title: 'Pegar\nemprestado',
        image: require('../imgs/moeda2.png'),
    },
    {
        id: 6,
        title: 'Recarga\ncelular',
        image: require('../imgs/phone.png'),
    },
    {
        id: 7,
        title: 'Caixinhas',
        image: require('../imgs/cofre.png')
    }
];

const DATA2 = [
    {
        id: 1,
        descricao: 'Você tem R$ 3.000,00 disponível para empréstimo.'
    },
    {
        id: 2,
        descricao: 'Facilite seus planos futuros: guarde dinheiro nas Caixinhas'
    }
]

type ItemProps = {title: string, image: any};

const Item = ({title, image}: ItemProps) => (
    <View style={{alignItems: 'center'}}>
        <View style={styles.item}>
            <Image source={image} style={styles.image} />
        </View>
        <Text style={styles.title}>{title}</Text>
    </View>

);

type ItemProps2 = {descricao: string};

const Cards = ({descricao}: ItemProps2) => (
    <View style={styles.cards}>
        <Text style={styles.cards_text}>{descricao}</Text>
    </View>
)

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
                        renderItem={({item}) => <Item title={item.title} image={item.image} />}
                        keyExtractor={item => item.id.toString()}
                        horizontal={true}   // Rolar na horizontal
                        showsHorizontalScrollIndicator={false}  // Oculta barra de rolagem
                    />
                </View>

                <View style={styles.cartoes}>
                    <Image
                        style={styles.cartoes_img} 
                        source={require('../imgs/cartoes.png')}
                    />
                    <Text style={styles.cartoes_text}>Meus cartões</Text>
                </View>

                <View>
                    <FlatList 
                        data={DATA2}
                        renderItem={({item}) => <Cards descricao={item.descricao} />}
                        keyExtractor={item => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        height: '100%'
    },
    header: {
        width: '100%',
        height: '30%',
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
        backgroundColor: '#f1eff4',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 15,
        borderRadius: 50
    },
    image: {
        width: 25,  // Defina o tamanho da imagem
        height: 25,
    },
    title: {
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    container2: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    cartoes: {
        flexDirection: 'row',
        backgroundColor: '#f1eff4',
        margin: 20,
        borderRadius: 10,
        padding: 13
    },
    cartoes_img: {
        width: 40,
        height: 40,
        marginRight: 20
    },
    cartoes_text: {
        fontSize: 17,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'black'
    },
    cards: {
        width: 250,
        height: 70,
        backgroundColor: '#f1eff4',
        padding: 12,
        marginVertical: 8,
        marginHorizontal: 15,
        borderRadius: 12
    },
    cards_text: {
        fontSize: 15,
        color: 'black'
    }
})

export default Home;