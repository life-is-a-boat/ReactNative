import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

class NavigatorTest extends React.Component {
    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'flex-end'}}>
                <Text>Home Screen</Text>
            </View>
        )
    }
}

export default StackNavigator ({
    AppHome: {screen: NavigatorTest}
});