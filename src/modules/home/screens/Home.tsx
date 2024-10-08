import React from "react";
import { Text, Image, StyleSheet, SafeAreaView, View, FlatList, StatusBar, ScrollView } from "react-native";

import styles from "../styles/styles";

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

            <ScrollView>
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
                                style={styles.seta}
                                source={require('../imgs/proximo.png')}
                            />
                        </View>
                        <Text style={{fontSize: 28, color: 'black', fontWeight: 'bold'}}>R$ 674,65</Text>
                    </View>

                    <View>
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

                    <View style={styles.linha}></View>

                    <View style={styles.credito}>
                        <View style={styles.cartao}>
                            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>Cartão de crédito</Text>
                            <Image 
                                style={styles.seta}
                                source={require('../imgs/proximo.png')}
                            />
                        </View>
                        <View>
                            <Text style={{fontSize: 16, color: 'black'}}>Fatura atual</Text>
                            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold', marginTop: 3}}>R$ 306,95</Text>
                            <Text style={{fontSize: 14, color: 'black', marginTop: 9}}>Limite disponível de R$ 753,84</Text>
                        </View>
                    </View>

                    <View style={styles.linha}></View>

                    <View style={styles.credito}>
                        <View style={styles.cartao}>
                            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>Empréstimo</Text>
                            <Image 
                                style={styles.seta}
                                source={require('../imgs/proximo.png')}
                            />
                        </View>
                        <Text style={{fontSize: 16, color: 'black', marginTop: 7}}>
                            Dinheiro parado no FGTS? Você pode antecipar até 12 parcelas do seu saque aniversário.
                        </Text>
                    </View>

                </View>
            </ScrollView>


        </SafeAreaView>
    )
}

export default Home;