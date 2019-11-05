import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {
    // 声明state对象
    state = { isShowingText: true };
    componentDidMount() {
        //每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState({
                isShowingText: !this.state.isShowingText
            });
        }, 1000);
    }

    render() {
        if(!this.state.isShowingText) {
            return null;
        }
        return (
            <Text>{ this.props.text }</Text>
        );
    }
}

export default class BlinkApp extends Component {
    render() {
        return (
            <View style={{ alignContent:'center'}}>
                <Blink text='I love to blink'/>
                <Blink text='Yes blinking is so great'/>
                <Blink text='Why did they ever take this out of HTML'/>
                <Blink text='Look at me look at me look at me'/>
            </View>
        );
    }
}

/*
    提示一些初学者应该牢记的要点：

    一切界面变化都是状态state变化
    state的修改必须通过setState()方法
    this.state.likes = 100; // 这样的直接赋值修改无效！
    setState 是一个 merge 合并操作，只修改指定属性，不影响其他属性
    setState 是异步操作，修改不会马上生效
 */ 