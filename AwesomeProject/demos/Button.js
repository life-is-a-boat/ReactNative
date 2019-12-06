import React, { Component } from 'react';
import { Button,StyleSheet, View, Alert } from 'react-native';

export default class App extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }
    render() {
        return(
            <View style={styles.container}>
                <Button 
                        onPress={this._onPressButton}
                        title="Press Me"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                        disabled='false'
                        testID='123'
                        hasTVPreferredFocus='false'

                        nextFocusDown='1'
                        nextFocusForward='1'
                        nextFocusleft='1'
                        nextFocusRight='1'
                        nextFocusUp='1'
                        touchSoundDisabled='false'
                        />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignContent:'center',
    }
});

/**
 * 按钮
 * 属性
 * onPress  用户点击此按钮时所调用的处理函数           function     必填
 * title    按钮内显示的文本                         string      必填
 * color    文本的颜色(iOS)或按钮的背景色（Android）   color       非必填
 * disabled 设置为true时此按钮将不可点击               bool        非必填
 * 
 * accessibilityLabel   用于给残障人士显示的文本        string      非必填
 * testID   用来在端到端测试中定位此视图                 string
 * hasTVPreferredFocus  
 * 
 * nextFocusDown
 * nextFocusForward
 * nextFocusleft
 * nextFocusRight
 * nextFocusUp
 * touchSoundDisabled
 * 
 * */ 