import React,{ Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MineClass extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.item}>我</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    item: {
        width: 60,
        height: 60,
        padding: 0,
        backgroundColor: '#00000033'
    }
});
