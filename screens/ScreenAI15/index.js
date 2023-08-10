import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Here are nearby mobile mechanics with your tire in stock</Text>
      <View style={styles.mapContainer}>
        {
        /* Map component */
      }
      </View>
      <View style={styles.filtersContainer}>
        {
        /* Filters component */
      }
      </View>
      <View style={styles.providersContainer}>
        {
        /* List of service providers */
      }
        <TouchableOpacity style={styles.providerItem}>
          <Image style={styles.logo} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <View style={styles.providerInfo}>
            <Text style={styles.providerName}>Provider Name</Text>
            <View style={styles.ratingContainer}>
              {
              /* Rating component */
            }
            </View>
            <Text style={styles.reviews}>100 Reviews</Text>
            <Text style={styles.cost}>$50</Text>
            <Text style={styles.distance}>2 miles away</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Book</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Call</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  mapContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  providersContainer: {
    flex: 1
  },
  providerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  providerInfo: {
    flex: 1
  },
  providerName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  reviews: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5
  },
  cost: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5
  },
  distance: {
    fontSize: 12,
    color: '#888'
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  }
};
export default Screen;