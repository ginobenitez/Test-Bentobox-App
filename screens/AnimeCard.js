import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, Pressable, FlatList} from 'react-native';
import React, { PureComponent } from 'react';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AnimeCard = ({anime}) =>  {
        return (
            <View style={styles.card} key={anime.mal_id}>
            
                
            </View>
        );

        };

const styles = StyleSheet.create({
    card: {
        margin: windowWidth / 47,
        alignItems: 'center',
        backgroundColor:"#fff"
    }
});

export default AnimeCard;