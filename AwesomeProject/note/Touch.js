/*
import React, { Component } from 'react';
import { Button, StyleSheet, Alert, View } from 'react-native';

export default class ButtonBasics extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.buttonContainer}>
                    <Button 
                        onPress={this._onPressButton}
                        title="Press Me"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        onPress={this._onPressButton}
                        title="Press Me"
                        color="#841584"
                    />
                </View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button 
                        onPress={this._onPressButton}
                        title="This looks great!"
                    />
                    <Button 
                        onPress={this._onPressButton}
                        title="OK!"
                        color='#841584'
                    />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    buttonContainer: {
        margin: 20,
        backgroundColor:'#CC00FF'
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
});
*/ 

import React,{ Component } from 'react';
import { TouchableHighlight, Alert, StyleSheet, View, Text } from 'react-native';
// import { Alert, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!');
    }

    _onLongPressButton() {
        Alert.alert('You long-pressed the button!');
    }

    render() {
        return(
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onPressButton} underlayColor='white'>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 60,
        alignItems:'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white'
    }
})