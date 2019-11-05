import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render(){
        return(
            <ScrollView>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
                <Image style={{backgroundColor:'#333'}} source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            </ScrollView>
        );
    }
}