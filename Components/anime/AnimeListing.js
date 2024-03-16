import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AnimeListing = ({ anime }) => {
    const navigation = useNavigation();

    const handleImagePress = () => {
        // Navigate to AnimeCard screen when the image is pressed
        navigation.navigate('AnimeCard',  anime );
    };

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={handleImagePress}>
                <Image
                    style={styles.animeImages}
                    source={{ uri: anime.images.jpg.image_url }}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    animeImages: {
        width: 150,
        height: 200,
        resizeMode: 'cover',
    },
    card: {
        margin: 10,
        alignItems: 'center',
    },
});

export default AnimeListing;
