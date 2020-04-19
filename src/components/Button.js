import React from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    buttonDouble: {
        width: (Dimension.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimension.get('window').width / 4) * 3,
    }
})

export default props => {
    const stylesButton = [styles.button] //estilo inicial. Array com styles.button, entra no if para ver qual propriedade terá.
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triplo) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)
    return (
        <TouchableHighlight onPress = {props.onClick}>
            <Text style = {stylesButton}>{props.label}</Text> 
        </TouchableHighlight>
    )
}