import { View, Text, StyleSheet } from 'react-native';
import styles from './Styling'
import Menu from '../Menu';

const Greeting = (props) => {

    return (
        <>
        <View>
            <Text style={styles.SubText}> Hello {props.name}!</Text>
        </View>
        <View>
            <Menu />
        </View>
        </>
    )
}


export default Greeting;