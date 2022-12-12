import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c2c2c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    MainText: {
        fontSize: 25,
        color: '#FF8000'
    },
    SubText: {
        fontSize: 17,
        color: '#FF8000',
    },
    footer: {
        flex: 1,
        backgroundColor: '#2c2c2c',
        alignItems: 'center',
        justifyContent: 'center'
    },
    menu: {
        position: 'absolute',
        bottom: 10
    }
});

export default Styles;