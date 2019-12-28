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
 * date         当前被被选中的日期        Date        必填
 * onChange     时间选择器滑动时回调      function    非必填
 * onDateChange 日期/时间变化的监听函数    function    非必填
 * maximumDate  可选的最大日期            Date       非必填
 * minimumDate  限制可选的日期/时间范围     Date       非必填
 * minuteInterval 可选的最小的分钟单位。
 *  enum(1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30)	   非
 * mode     选择器模式  
 * enum('date', 'time', 'datetime', 'countdown')	非
 * locale   本地设置        String
 * 
 * timeZoneOffsetInMinutes 时区差，单位是分钟。
 * 默认情况下，选择器会选择设备的默认时区。
 * 通过此参数，可以指定一个时区。举个例子，
 * 要使用北京时间（东八区），可以传递 8 * 60。
 * 
 * initialDate
 * */ 