import { View, Text, StyleSheet } from 'react-native';
import styles from './Styling'

const Greeting = (props) => {

    return (
        <View>
            <Text style={styles.SubText}> Hello {props.name}!</Text>
        </View>
    )
}


export default Greeting;