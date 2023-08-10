import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const TireScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Confirm Tire Type, Size, and Quantity</Text>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.tireImage} />
      <TouchableOpacity style={styles.editIcon}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.editIconImage} />
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailTitle}>Name:</Text>
        <Text style={styles.detailValue}>Tire Name</Text>
        <Text style={styles.detailTitle}>Size:</Text>
        <Text style={styles.detailValue}>Tire Size</Text>
        <Text style={styles.detailTitle}>Width:</Text>
        <Text style={styles.detailValue}>Tire Width</Text>
        <Text style={styles.detailTitle}>Diameter:</Text>
        <Text style={styles.detailValue}>Tire Diameter</Text>
        <Text style={styles.detailTitle}>Speed Rating:</Text>
        <Text style={styles.detailValue}>Tire Speed Rating</Text>
        <Text style={styles.detailTitle}>Vehicle Type:</Text>
        <Text style={styles.detailValue}>Tire Vehicle Type</Text>
        <Text style={styles.detailTitle}>Season:</Text>
        <Text style={styles.detailValue}>Tire Season</Text>
        <Text style={styles.detailTitle}>Quantity:</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.iconContainer}>
            <Text style={styles.iconText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>1</Text>
          <TouchableOpacity style={styles.iconContainer}>
            <Text style={styles.iconText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm Tire Type</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  tireImage: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  editIcon: {
    position: 'absolute',
    top: 20,
    right: 20
  },
  editIconImage: {
    width: 20,
    height: 20
  },
  detailsContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  detailValue: {
    fontSize: 16,
    marginBottom: 10
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  iconText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10
  },
  confirmButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};
export default TireScreen;