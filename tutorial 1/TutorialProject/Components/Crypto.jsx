import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import cryptoList from '../Crypto.js';

const Crypto = () => {

    const cryptoCoins = ({ coin }) => {
        return (
            <View style={styles.container}>
                <Text style={styles.MainText}>{coin.symbol}</Text>
                <Text style={styles.SubText}>{coin.name}</Text>
                <Text style={styles.SubText}>£{coin.price}</Text>
            </View>
        )
    }

    return (
        <View style={styles.cryptoDisplay}>
            <FlatList
                data={cryptoList}
                renderItem={cryptoCoins}
                keyExtractor={(item) => item.symbol}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2c2c2c',
        paddingTop: 15,
        paddingBottom: 15,
    },
    cryptoDisplay: {
        flexDirection: 'column'
    },
    MainText: {
        fontSize: 25,
        color: '#FF8000'
    },
    SubText: {
        fontSize: 17,
        color: '#FF8000',
    },
})

export default Crypto;