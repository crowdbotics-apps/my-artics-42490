import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList } from 'react-native';

const Screen = () => {
  const dummyData = [{
    id: '1',
    image: 'https://tinyurl.com/42evm3m3',
    title: 'Place 1',
    description: 'Short description 1'
  }, {
    id: '2',
    image: 'https://tinyurl.com/42evm3m3',
    title: 'Place 2',
    description: 'Short description 2'
  }, {
    id: '3',
    image: 'https://tinyurl.com/42evm3m3',
    title: 'Place 3',
    description: 'Short description 3'
  }];

  const renderPlaceItem = ({
    item
  }) => <View style={_styles.IowNvdxq}>
      <Image source={{
      uri: item.image
    }} style={_styles.WTnksMty} />
      <View>
        <Text style={_styles.ggpILFus}>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </View>;

  return <SafeAreaView style={_styles.pzeEGudl}>
      <Text style={_styles.mLTOPzet}>For you</Text>
      <Text style={_styles.oEFkbvfo}>Explore based on your next route</Text>
      {
      /* Google map view displaying the stops of the next route */
    }
      <View style={_styles.fFEIhPAd} />
      <Text style={_styles.cNsYGhIz}>List Places in the route you might stop</Text>
      <Text style={_styles.duKdrTyt}>Heading</Text>
      <Text style={_styles.bErPkOFd}>Location/Address</Text>
      <Text style={_styles.AOcZFbKr}>Recently viewed places</Text>
      <FlatList data={dummyData} renderItem={renderPlaceItem} keyExtractor={item => item.id} style={_styles.wwARkXAr} />
      <Text style={_styles.sqKXKZir}>Trending</Text>
      <Text style={_styles.rfMAGfKh}>News from your recent destinations</Text>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={_styles.XnuaHixd} />
      <Text style={_styles.BABXVCWZ}>Explore by category</Text>
      <FlatList data={['Fast food', 'Truck Stops', 'Fuel Stations', 'Weight Station', 'News Stories', 'Service Providers']} renderItem={({
      item
    }) => <Text style={_styles.zLQyQjPh}>{item}</Text>} keyExtractor={item => item} />
    </SafeAreaView>;
};

export default Screen;

const _styles = StyleSheet.create({
  IowNvdxq: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  WTnksMty: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  ggpILFus: {
    fontWeight: "bold"
  },
  pzeEGudl: {
    flex: 1
  },
  mLTOPzet: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  oEFkbvfo: {
    fontSize: 18,
    marginBottom: 10
  },
  fFEIhPAd: {
    height: 200,
    backgroundColor: "lightgray",
    marginBottom: 10
  },
  cNsYGhIz: {
    fontSize: 18,
    marginBottom: 10
  },
  duKdrTyt: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  bErPkOFd: {
    marginBottom: 10
  },
  AOcZFbKr: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  wwARkXAr: {
    marginBottom: 10
  },
  sqKXKZir: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  rfMAGfKh: {
    fontSize: 18,
    marginBottom: 10
  },
  XnuaHixd: {
    width: "100%",
    height: 200,
    marginBottom: 10
  },
  BABXVCWZ: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  zLQyQjPh: {
    marginBottom: 10
  }
});