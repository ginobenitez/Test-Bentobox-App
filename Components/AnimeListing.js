import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, Pressable, FlatList} from 'react-native';
import React, { PureComponent } from 'react';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class AnimeListing extends PureComponent {
    render() {
        const { anime } = this.props;
        return (
            <View style={styles.card} key={anime.mal_id}>
            <Pressable>
               <Image style={styles.animeImages} source={{ uri: anime.images.jpg.image_url }} />
           </Pressable> 
            
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    animeTitleText: {
        color: "#ffffff",
        zIndex: 2,
        alignSelf: 'center'
    },
    animeImages: {
        width: windowWidth / 2.2,
        height: windowHeight / 2.5,
        alignSelf: 'center'
    },
    card: {
        margin: windowWidth / 47,
        alignItems: 'center'
    }
});
