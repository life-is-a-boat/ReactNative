import React, { Component } from 'react';
import {
    DatePickerIOS,
    View,
    StyleSheet,
    Text,
    TextInput,
} from 'react-native';

export default class App extends Component {
    //静态变量 需要类名访问 class.static
    static minimumDate = new Date(2019,0,1);
    static maximumDate = new Date(2019,11,31);

    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
    }
    
    setDate(newDate) {
        this.setState({chosenDate: newDate})
    }
    _onChangeDate(newDate) {
        console.log('date:'+newDate)
    }
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.time}>时间</Text>
                <TextInput style={styles.time} placeholder='输入些什么呢？' value={this.state.chosenDate.date}/>
                <DatePickerIOS 
                date={ new Date()}/>
                {/* <DatePickerIOS 
                date={this.state.chosenDate}
                onChange={this._onChangeDate}
                onDateChange={this.setDate}
                minimumDate= {App.minimumDate}
                maximumDate= {App.maximumDate}
                minuteInterval={1}
                mode='datetime'
                locale="zh-Hant,en"
                // timeZoneOffsetInMinutes={8*60}
                initialDate={App.minimumDate}
                /> */}
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        color:'#0000ff',
    },
    time:{
        paddingLeft:20,
        flexDirection:'column'
    }
});

/**
 * 日期/时间选择器
 * DatePickerIOS 
 * 
 * 
 * 必须监听onDateChange 回调函数并且及时更新date属性来使得组件更新 否则用户的修改会立刻被撤销来确保当前显示值和props.date一致。
 * 
 * 属性
 * 
 * 
 * */ 