import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

const PaymentHistoryScreen = () => {
  const payments = [{
    id: 1,
    payerName: 'John Doe',
    paymentDateTime: '2022-10-10 10:00 AM',
    amountPaid: '$50',
    receiptUrl: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 2,
    payerName: 'Jane Smith',
    paymentDateTime: '2022-10-11 02:30 PM',
    amountPaid: '$75',
    receiptUrl: 'https://tinyurl.com/42evm3m3'
  } // Add more payment objects as needed
  ];

  const renderPaymentItem = payment => {
    return <TouchableOpacity key={payment.id} style={styles.paymentItemContainer}>
        <View style={styles.paymentInfoContainer}>
          <Text style={styles.payerName}>{payment.payerName}</Text>
          <Text style={styles.paymentDateTime}>{payment.paymentDateTime}</Text>
          <Text style={styles.amountPaid}>{payment.amountPaid}</Text>
        </View>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Download Receipt</Text>
        </TouchableOpacity>
      </TouchableOpacity>;
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Payment History</Text>
      <View style={styles.paymentListContainer}>
        {payments.map(payment => renderPaymentItem(payment))}
      </View>
      <TouchableOpacity style={styles.downloadReportButton}>
        <Text style={styles.downloadReportButtonText}>Download Full Report</Text>
      </TouchableOpacity>
      <View style={styles.datePickerContainer}>
        <Text style={styles.datePickerLabel}>Choose Date (From/To)</Text>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Download</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  paymentListContainer: {
    marginBottom: 16
  },
  paymentItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  paymentInfoContainer: {
    flex: 1
  },
  payerName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  paymentDateTime: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4
  },
  amountPaid: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  downloadButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  },
  downloadReportButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    marginBottom: 16
  },
  downloadReportButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  datePickerLabel: {
    fontSize: 16,
    fontWeight: 'bold'
  }
};
export default PaymentHistoryScreen;