import React from "react";
import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    header: {
        width: '100%',
        height: 150,
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
    seta: {
        width: 20, 
        height: 35
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
    },
    linha: {
        borderBottomColor: '#f1eff4',
        borderBottomWidth: 2,
        marginVertical: 10,
    },
    credito: {
        margin: 20
    },
    cartao: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default styles;