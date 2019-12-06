import React,{ Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

export default class HomeClass extends Component {
    render(){
        return(
            // <View style={styles.container}>
            //     <Text style={styles.item}>首页</Text>
            // </View>

            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems:'flex-end',
                // paddingTop:100,
                // paddingBottom:10
                
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue',flex:1}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue',flex:1}}/>
                {/* <View style={{width: 50, height: 50, backgroundColor: 'steelblue',flex:1}}/>
                <View style={{width: 50, height: 50, backgroundColor: '#00000033',flex:1}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue',flex:1}}/> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column-reverse',
        backgroundColor: '#333'
    },
    item: {
        // width: 60,
        // height: 60,
        padding: 5,
        backgroundColor: '#00000033'
    }
});
