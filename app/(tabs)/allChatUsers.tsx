import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';

const users = [
  { id: '1', name: 'John Doe', profileImage: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '2', name: 'Jane Smith', profileImage: 'https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '3', name: 'Sam Johnson', profileImage: 'https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '4', name: 'John Doe', profileImage: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=800' },
  // Add more users as needed
];

const AllChatUsers = () => {
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const newUsers = users.filter((user) => {
        return user.name.toLowerCase().includes(text.toLowerCase());
      });
      setFilteredUsers(newUsers);
    } else {
      setFilteredUsers(users);
    }
  };

  const renderItem = ({ item }) => (
    <Link href={`/chat/${item?.id}`} asChild>
    <TouchableOpacity style={styles.userContainer} >
      <Image source={{ uri: item?.profileImage }} style={styles.profileImage} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userStatus}>Online</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={24} color="#ccc" />
    </TouchableOpacity>
    </Link>

  );

  return (
    <>
     <Stack.Screen options={{ headerTransparent: true, headerTitle: "All Users",}}/>
     <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search users"
        value={search}
        onChangeText={(text) => handleSearch(text)}
        placeholderTextColor="#888"
      />
      <FlatList
        data={filteredUsers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.userList}
      />
    </View>
    </>
   
  );
};

export default AllChatUsers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingTop: 100
  },
  searchInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333', fontFamily:'SpaceMono'
  },
  userList: {
    paddingHorizontal: 10, fontFamily:'SpaceMono'
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',width:'100%'
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  userInfo: {
    flex: 1, fontFamily:'SpaceMono'
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', fontFamily:'SpaceMono'
  },
  userStatus: {
    fontSize: 14,
    color: '#666', fontFamily:'SpaceMono'
  },
});
