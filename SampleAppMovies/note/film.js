import React,{ Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

/**
 * 为了避免骚扰，我们用了一个样例数据来替代Rotten Tomatoes的API
 * 请求，这个样例数据放在React Native的Github库中。
 * 当然，由于众所周知的原因，这个地址可能国内访问也比较困难。
 */
const REQUEST_URL =   "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export default class SampleAppMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // movies: null
            data: [],
            loaded: false
        };
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        fetch(REQUEST_URL)
        .then(response => response.json())
        .then(responseData => {
            // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
            this.setState({
                data: this.state.data.concat(responseData.movies),
                loaded: true,
                movies: responseData.movies 
            });
        });
    }

    // render() {
    //     if(!this.state.movies) {
    //         return this.renderLoadingView();
    //     }
    //     const movie= this.state.movies[0];
    //     return this.renderMovie(movie);
    // }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return(
            <FlatList 
                data={this.state.data}
                renderItem={this.renderMovie}
                style={styles.list}
                keyExtractor={item => item.id} />
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    正在加载电影数据......
                </Text>
            </View>
        );
    }
    renderMovie({item}) {
        // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
    // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
        return (
            <View style={styles.container}>
                <Image source={{uri: item.posters.thumbnail}}
                    style={styles.thumbnail}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{ item.title}</Text>
                    <Text style={styles.year}>{ item.year}</Text>
                </View>
            </View>
        );
    }
    // renderMovie(movie) {
    //     return (
    //         <View style={styles.container}>
    //             <Image 
    //                 source={{uri: movie.posters.thumbnail}}
    //                 style={styles.thumbnail}/>
    //                 <View style={styles.rightContainer}>
    //                 <Text style={styles.title}>{ movie.title}</Text>
    //                 <Text style={styles.year}>{ movie.year}</Text>
    //                 </View>
    //         </View>
    //     );
    // }
    //     const movie = MOCKED_MOVIEW_DATA[0];
    //     return (
    //         <View style={styles.container}>
    //             <Image source={{uri:movie.posters.thumbnail}} style={styles.thumbnail}/>
    //             <View style={styles.rightContainer}>
    //                 <Text>{ movie.title}</Text>
    //                 <Text>{ movie.year}</Text>
    //             </View>
    //         </View>
    //     );
    // }
}

const MOCKED_MOVIEW_DATA = [
    {
        title: '标题',
        year: '2015',
        posters: { thumbnail: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" }
    }
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    thumbnail: {
        width: 53,
        height: 81
    },
    rightContainer: {
        flex: 1,
        // backgroundColor: '#333333'
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center'
    },
    year: {
        textAlign: 'center'
    },
    list: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF'
    }
});