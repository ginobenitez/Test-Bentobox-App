import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ratingFormat, formatDuration, formatPlot } from '../functions/function';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
//<View style={styles.blurOverlay}>
const AnimeInfoScreen = ({ route }) => {
    const { anime } = route.params;
    const navigation = useNavigation();

    // Check if anime object is defined before accessing its properties
    if (!anime) {
        return (
            <View style={styles.card}>
                <Text>Anime data not available.</Text>
            </View>
        );
    }

    return (
        <View >

                    
                        
                    <ScrollView>
                   
                    <Image style={styles.imageBackground} source={{ uri: anime.images.jpg.large_image_url }} />
                    <LinearGradient
                        colors={['transparent', 'rgba(23,23,23,0.5)','rgba(23,23,23, 1)']}
                        style ={{width:windowWidth, height:windowHeight*0.50, position:'relative'}}
                        start={{x:0.5, y:0}}
                        end={{x:0.5, y:1}}
                        
                    />
                    
                    
                   
                    <View 
                    style={styles.container}
                    >
                         <Text style = {styles.animeTitleText}> {anime.title_english} </Text>
                         

                     <Text
                    style = {styles.animeSubTitle}
                    >{anime.type}{'         '}
                    {anime.type=='TV'? `Episodes: ${anime.episodes}` : `${formatDuration(anime.duration)} min`}
                    {'          '}{anime.aired.prop.from.year}{'            '}
                   {ratingFormat(anime.rating)}</Text>

                    <Text
                    style = {styles.animeSubTitle}
                    >Rating: {anime.score}</Text>
                    <Text  style = {styles.animeSubTitle}>Plot: </Text>
                   <Text  style = {styles.animeSubTitle}>{formatPlot(anime.synopsis)}</Text>
                   
                    <Text  style = {styles.animeSubTitle}>Where to Watch</Text>

                   <Text  style = {color="#fff"}>User Reviews</Text>
                    </View>
               </ScrollView>

                  
           
        </View>
    );
};

const styles = StyleSheet.create({
    animeTitleText: {
        color: "#ffffff",
        zIndex: 2,
        alignSelf:'center',
        fontSize:windowWidth/16,
        fontWeight:'bold',
        marginTop:55
    },
    animeSubTitle:{
        color: "#ffffff",
    },
    imageBackground: {
        width: windowWidth,
        height: windowHeight*0.70,
        transform:[{translateY:-25}],
        alignSelf: 'center',
        position:'absolute'
    },
    card: {
        backgroundColor: "#111920",
        width: windowWidth,
        height: windowHeight,
        alignItems: 'center',
        borderTopLeftRadius:"25%",
        borderTopRightRadius:"25%",
        position:'absolute'
    },
    poster:{
        width: 200,
        height: 300,
        alignSelf: 'center',
        transform:[{translateY:50}],
        zIndex:3
    },
    container:
    {
        backgroundColor:'rgba(23,23,23, 1)'
    }
});

export default AnimeInfoScreen;
