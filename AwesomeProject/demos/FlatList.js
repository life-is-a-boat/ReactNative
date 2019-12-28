import React, { Component } from 'react';
import {
    FlatList,
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

class MyListItem extends React.PureComponent {
    _onPress = () => {
      this.props.onPressItem(this.props.id);
    };
  
    render() {
      const textColor = this.props.selected ? "red" : "black";
      return (
        <TouchableOpacity onPress={this._onPress}>
          <View>
            <Text style={{ color: textColor }}>
              {this.props.title}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
  }
  
  class MultiSelectList extends React.PureComponent {
    state = {selected: (new Map():Map<string, boolean>)};
  
    _keyExtractor = (item, index) => item.id;
  
    _onPressItem = (id: string) => {   
      // updater functions are preferred for transactional updates
      this.setState((state) => {
        // copy the map rather than modifying state.
        const selected = new Map(state.selected);
        selected.set(id, !selected.get(id)); // toggle
        return {selected};
      });
    };
  
    _renderItem = ({item}) => (
      <MyListItem
        id={item.id}
        onPressItem={this._onPressItem}
        selected={!!this.state.selected.get(item.id)}
        title={item.title}
      />
    );
  
    render() {
      return (
        <FlatList
          data={this.props.data}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      );
    }
  }

// export default class App extends Component {
//     render(){
//         return(
//             <View  style={styles.container}>
//                 <FlatList
//                         data={[{key: 'a'}, {key: 'b'}]}
//                         // renderItem={({item}) => <Text>{item.key}</Text>}

//                         // renderItem={({item}) => <Text style={styles.customItem}>{item.key}</Text>}

//                         renderItem={({item}) => <MyListItem 
//                             style={styles.customItem}
//                             title={item.key}
//                             textColor={'#666'}
//                         />}
//                     />
//             </View>
//         )
//     }
// };

// const styles=StyleSheet.create({
//     container:{
//         flex: 1, 
//         flexDirection: 'row',
//         justifyContent:'center',
//         alignItems:'center',
//         backgroundColor: '#F5FCFF',
//         padding:50,
//     },
//     customItem:{
//         backgroundColor:'#333ccc',         
//         width:50,
//         height:50,
//         color:'#666'
//     }
// });
