import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import AnimeListing from './AnimeListing';

class SearchResults extends PureComponent {
    render() {
        const { searchList } = this.props; // Destructure searchList from props

        return (
            <View>
                <FlatList
                    keyExtractor={(item) => item.mal_id.toString()} // Use toString() to ensure key is a string
                    data={searchList} // Use searchList from props
                    numColumns={2}
                    renderItem={({ item }) => (
                        <AnimeListing anime={item} />
                    )}
                />
            </View>
        );
    }
}

export default SearchResults;
