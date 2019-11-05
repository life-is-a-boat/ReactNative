import React, { Component } from 'react';
import { Text,View, TextInput } from 'react-native';

export default class PizzaTranslator extends Component {
    state = {
        text: ''
    }

    render() {
        return (
            <View style = {{padding: 10}}>
                <TextInput 
                style={{height: 40}}
                placeholder= 'Tap here to translate!'
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}>
                 </TextInput>
                <Text style={{padding: 10, fontSize: 40}}>
                    {this.state.text.split(' ').map((word) => word && '🍉').join(' ')}
                </Text>
            </View>
        );
    }
}