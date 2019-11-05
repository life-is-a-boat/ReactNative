// /**
// eg :一张图片
import React, { Component } from 'react';
import { Image ,Text} from 'react-native';

export default class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{width:193,height:110}}/>
            // <Image style={{backgroundColor:'#333'}} source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
        );
    }
}
// */ 

/** 
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <View style={{alignItems:'center',marginTop: 5}}>
                <Text>Hello {this.props.name}!</Text>
            </View>
        );
    }
}

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems:'center'}}>
                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />
            </View>
        )
    }
}
*/