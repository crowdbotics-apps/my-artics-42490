import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.mapContainer}>
        {
        /* Google Maps View */
      }
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.map} />
        {
        /* Zoom In and Zoom Out Buttons */
      }
        <View style={styles.zoomButtonsContainer}>
          <TouchableOpacity style={styles.zoomButton}>
            <Text style={styles.zoomButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.zoomButton}>
            <Text style={styles.zoomButtonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.notificationContainer}>
        {
        /* Notification Icon */
      }
        <TouchableOpacity style={styles.notificationIcon}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.icon} />
        </TouchableOpacity>
        {
        /* Save Icon */
      }
        <TouchableOpacity style={styles.saveIcon}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.requestsContainer}>
        {
        /* List of Pending Requests */
      }
        <View style={styles.requestItem}>
          <Text style={styles.requestTitle}>Request 1</Text>
          <Text style={styles.waitingTime}>Waiting Time: 10 mins</Text>
          <Text style={styles.earnings}>Earnings: $50</Text>
          <Text style={styles.distance}>Distance: 5 miles</Text>
          {
          /* Smart Assign Button */
        }
          <TouchableOpacity style={styles.smartAssignButton}>
            <Text style={styles.smartAssignButtonText}>Smart Assign</Text>
          </TouchableOpacity>
          {
          /* Message Button */
        }
          <TouchableOpacity style={styles.messageButton}>
            <Text style={styles.messageButtonText}>Message</Text>
          </TouchableOpacity>
        </View>
        {
        /* More Request Items */
      }
        {
        /* ... */
      }
      </View>
      <View style={styles.fleetContainer}>
        {
        /* Truck Details */
      }
        <Text style={styles.truckDetails}>Truck Details</Text>
        {
        /* Fleet Overview Button */
      }
        <TouchableOpacity style={styles.fleetOverviewButton}>
          <Text style={styles.fleetOverviewButtonText}>Fleet Overview</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.invoicesContainer}>
        {
        /* List of Pending Invoices */
      }
        <View style={styles.invoiceItem}>
          {
          /* Invoice Details */
        }
        </View>
        {
        /* More Invoice Items */
      }
        {
        /* ... */
      }
      </View>
      <View style={styles.activityLogContainer}>
        {
        /* List of Actions Performed */
      }
        <View style={styles.actionItem}>
          <Text style={styles.actionTitle}>Action 1</Text>
          <Text style={styles.actionTime}>Time: 10:00 AM</Text>
        </View>
        {
        /* More Action Items */
      }
        {
        /* ... */
      }
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    width: '100%',
    height: '100%'
  },
  zoomButtonsContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row'
  },
  zoomButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
  zoomButtonText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  notificationContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  saveIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 20,
    height: 20
  },
  requestsContainer: {
    padding: 10
  },
  requestItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f2f2f2'
  },
  requestTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  waitingTime: {
    fontSize: 16,
    marginBottom: 5
  },
  earnings: {
    fontSize: 16,
    marginBottom: 5
  },
  distance: {
    fontSize: 16,
    marginBottom: 5
  },
  smartAssignButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 5
  },
  smartAssignButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  messageButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    marginTop: 5
  },
  messageButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  fleetContainer: {
    padding: 10
  },
  truckDetails: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  fleetOverviewButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 5
  },
  fleetOverviewButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  invoicesContainer: {
    padding: 10
  },
  invoiceItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f2f2f2'
  },
  activityLogContainer: {
    padding: 10
  },
  actionItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f2f2f2'
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  actionTime: {
    fontSize: 16,
    marginBottom: 5
  }
};
export default Screen;