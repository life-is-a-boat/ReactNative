/*
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends Component {
    render(){
        return(
            <View style={{alignContent:'center'}}>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigBlue}>just bigBlue</Text>
                <Text style={[styles.bigBlue,styles.red]}>just bigBlue red</Text>
                <Text style={[styles.red,styles.bigBlue]}>just red bigBlue</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    bigBlue: {
        color:'blue',
        fontWeight:'bold',
        fontSize:30,
    },
    red: {
        color:'red'
    },
});
*/ 

import React, { Component } from  'react';
import { View } from 'react-native';

export default class FixedDimensionsBasics extends Component {
    render() {
        return (
            // <View>
            //     <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            //     <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
            //     <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
            // </View>

            /*
            在组件样式中使用flex可以使其在可利用的空间中动态地扩张或收缩。一般而言我们会使用flex:1来指定某个组件扩张以撑满所有剩余的空间。如果有多个并列的子组件使用了flex:1，则这些子组件会平分父容器中剩余的空间。如果这些并列的子组件的flex值不一样，则谁的值更大，谁占据剩余空间的比例就更大（即占据剩余空间的比等于并列组件间flex值的比）。

            组件能够撑满剩余空间的前提是其父容器的尺寸不为零。如果父容器既没有固定的width和height，也没有设定flex，则父容器的尺寸为零。其子组件如果使用了flex，也是无法显示的。
            */ 
            <View style={{flex:1 }}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                <View style={{flex: 1, backgroundColor: 'skyblue'}} />
                <View style={{flex: 3, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}