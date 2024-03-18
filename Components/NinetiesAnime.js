import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import AnimeListing from './AnimeListing';

class NinetiesAnime extends PureComponent {
    render() {
        const { ninetiesAnime } = this.props;

        return (
            <View>
                <FlatList
                    data={ninetiesAnime}
                    horizontal={true}
                    keyExtractor={(item) => item.mal_id.toString()}
                    renderItem={({ item }) => (
                        <AnimeListing anime={item} />
                    )}
                />
            </View>
        );
    }
}

export default NinetiesAnime;
