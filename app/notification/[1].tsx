import colors from '@/constants/colors';
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const Notification = () => {
  // Dummy data for notifications (replace with actual data)
  const notifications = [
    { id: '1', title: 'New Property Listed', message: 'A new property is available in your area.' },
    { id: '2', title: 'Price Update', message: 'Price reduced on property ID: 12345.' },
    { id: '3', title: 'Appointment Scheduled', message: 'Your viewing appointment is confirmed.' },
  ];

  const renderNotificationItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={{fontFamily:'SpaceMono',color:colors.black}}>{item.message}</Text>
    </View>
  );

  return (
    <> 
     <Stack.Screen options={{
        headerTransparent: false, headerTitle: "Notifications",
       
      }} />
    <View style={styles.container}>
     
      <FlatList
        data={notifications}
        renderItem={renderNotificationItem}
        keyExtractor={item => item.id}
        style={styles.notificationList}
      />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',paddingTop: 100
  },
  header: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',fontFamily:'SpaceMono'
  },
  notificationList: {
    flex: 1, fontFamily:'SpaceMono'
  },
  notificationItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5, fontFamily:'SpaceMono'
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5, fontFamily:'SpaceMono'
  },
});

export default Notification;
