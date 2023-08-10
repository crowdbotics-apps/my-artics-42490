import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList } from 'react-native';

const Screen = () => {
  const dummyData = [{
    id: '1',
    image: 'https://tinyurl.com/42evm3m3',
    title: 'Place 1',
    description: 'Short description of Place 1'
  }, {
    id: '2',
    image: 'https://tinyurl.com/42evm3m3',
    title: 'Place 2',
    description: 'Short description of Place 2'
  }, {
    id: '3',
    image: 'https://tinyurl.com/42evm3m3',
    title: 'Place 3',
    description: 'Short description of Place 3'
  }];

  const renderPlaceItem = ({
    item
  }) => <View style={styles.placeItemContainer}>
      <Image source={{
      uri: item.image
    }} style={styles.placeItemImage} />
      <View style={styles.placeItemTextContainer}>
        <Text style={styles.placeItemTitle}>{item.title}</Text>
        <Text style={styles.placeItemDescription}>{item.description}</Text>
      </View>
    </View>;

  return <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>For you</Text>

      <Text style={styles.subHeading}>Explore based on your next route</Text>

      {
      /* Google map view displaying the stops of the next route */
    }
      <View style={styles.mapContainer}>
        {
        /* Google map view component */
      }
      </View>

      <Text style={styles.subHeading}>List Places in the route you might stop</Text>

      {
      /* List of places user might stop */
    }
      <FlatList data={dummyData} renderItem={renderPlaceItem} keyExtractor={item => item.id} horizontal showsHorizontalScrollIndicator={false} />

      <Text style={styles.heading}>Recently viewed places</Text>

      {
      /* List of places viewed by the user */
    }
      <FlatList data={dummyData} renderItem={renderPlaceItem} keyExtractor={item => item.id} horizontal showsHorizontalScrollIndicator={false} />

      <Text style={styles.heading}>Trending</Text>

      <Text style={styles.subHeading}>News from your recent destinations</Text>

      {
      /* Image, title, and short description of news */
    }
      <View style={styles.newsContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.newsImage} />
        <View style={styles.newsTextContainer}>
          <Text style={styles.newsTitle}>News Title</Text>
          <Text style={styles.newsDescription}>Short description of the news</Text>
        </View>
      </View>

      <Text style={styles.heading}>Explore by category</Text>

      {
      /* List of categories */
    }
      <FlatList data={dummyData} renderItem={renderPlaceItem} keyExtractor={item => item.id} horizontal showsHorizontalScrollIndicator={false} />
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#fff'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  mapContainer: {
    height: 200,
    backgroundColor: '#f2f2f2',
    marginBottom: 16
  },
  placeItemContainer: {
    marginRight: 16
  },
  placeItemImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 8
  },
  placeItemTextContainer: {
    width: 120
  },
  placeItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  placeItemDescription: {
    fontSize: 14,
    color: '#888'
  },
  newsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  newsImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 8
  },
  newsTextContainer: {
    flex: 1
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  newsDescription: {
    fontSize: 14,
    color: '#888'
  }
};
export default Screen;