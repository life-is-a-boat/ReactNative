import React, { Component } from 'react';
import { 
    ActivityIndicator,
    AppRegister,
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class App extends Component {
    render(){
        return(
            <View 
            style={styles.container}>
                <ActivityIndicator size='large' color='#0000ff' animating='true'/>
                <ActivityIndicator size='small' color='#00ff00' hidesWhenStopped='true'/>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection:'row',
    }
});

/**
 *  指示器
 *  重要属性
 *  size 大小 iOS只能选择“large” 、“small"  Android可以填写数值
 *  color  滚轮的前景颜色（iOS上默认为灰色、安卓上默认为深绿色）
 *  animating 是否要显示指示器动画 默认为true表示显示，false则隐藏
 *  hidesWhenStopped 在animating 为false的时候 是否要隐藏指示器（默认为true）
 *  如果animating和hidesWhenStopped都为 false，则显示一个静止的指示器。
 * */ 