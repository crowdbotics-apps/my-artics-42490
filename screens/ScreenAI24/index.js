import React from 'react';
import { View, Text, SafeAreaView, TextInput, Switch, Button } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Where are you going</Text>
      
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Enter destination" />
      </View>
      
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>Avoid tolls</Text>
        <Switch style={styles.toggleSwitch} />
      </View>
      
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>Prefer fuel efficient routes</Text>
        <Switch style={styles.toggleSwitch} />
      </View>
      
      <Button title="Find the best routes" onPress={() => {}} />
      
      <Text style={styles.subHeading}>Recent destinations</Text>
      
      <Button title="See all" onPress={() => {}} />
      
      <View style={styles.recentDestinationsContainer}>
        {
        /* List of recent destination locations */
      }
      </View>
      
      <Text style={styles.subHeading}>Downtime stats</Text>
      
      <Text style={styles.statsLabel}>Monthly/Yearly</Text>
      <Text style={styles.statsValue}>Total Duration</Text>
      <Text style={styles.statsValue}>Total Distance</Text>
      
      {
      /* Graphical representation */
    }
      
      <Text style={styles.subHeading}>Docking</Text>
      
      {
      /* Truck stops */
    }
      
      <Text style={styles.subHeading}>Maintenance</Text>
      
      {
      /* Roadside */
    }
      
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  toggleLabel: {
    flex: 1,
    fontSize: 16
  },
  toggleSwitch: {
    marginLeft: 10
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  statsLabel: {
    fontSize: 16,
    marginBottom: 5
  },
  statsValue: {
    fontSize: 14,
    marginBottom: 5
  },
  recentDestinationsContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  }
};
export default Screen;