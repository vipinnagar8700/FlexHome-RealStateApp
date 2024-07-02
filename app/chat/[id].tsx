import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image, Platform } from 'react-native';
import { Stack,useNavigation } from 'expo-router';
// import EmojiPicker from 'react-native-emoji-picker';
import * as ImagePicker from 'react-native-image-picker';
import { Ionicons } from '@expo/vector-icons';
import colors from '@/constants/colors';

const chats = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
const navigation = useNavigation()
  const sendMessage = (type, content) => {
    const newMessage = {
      id: messages.length + 1,
      type: type,
      content: content,
      status: 'unread', // 'unread' or 'read'
      sender: 'user', // or 'other'
      userProfileImage: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=800',
    };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });
    if (!result.didCancel && result.assets) {
      sendMessage('image', result.assets[0].uri);
    }
  };

  const pickVideo = async () => {
    const result = await ImagePicker.launchImageLibrary({
      mediaType: 'video',
      quality: 1,
    });
    if (!result.didCancel && result.assets) {
      sendMessage('video', result.assets[0].uri);
    }
  };

  const renderItem = ({ item }) => (
    <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.otherMessage]}>
      <Image source={{ uri: item.userProfileImage }} style={styles.profileImage} />
      <View style={styles.messageContent}>
        {item.type === 'text' && <Text style={styles.messageText}>{item.content}</Text>}
        {item.type === 'image' && <Image source={{ uri: item.content }} style={styles.messageImage} />}
        {item.type === 'video' && (
          <View>
            <Video
              source={{ uri: item.content }}
              style={styles.messageVideo}
              resizeMode="cover"
              shouldPlay
              isLooping
            />
          </View>
        )}
        {item.type === 'emoji' && <Text style={styles.emoji}>{item.content}</Text>}
        <Ionicons name={item.status === 'unread' ? "checkmark-outline" : "checkmark-done-outline"} size={16} color="grey" />
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTransparent: true, headerTitle: "",
         headerLeft: () => (
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={colors.black} />
          </TouchableOpacity>
          <View  style={{ marginLeft: 20 }}>
          <Image source={{ uri: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=800" }} style={styles.profileImage} />
            </View>
          <Text style={{fontSize:16,color:colors.black,fontFamily:'SpaceMono'}}>Vipin Nagar</Text>
          </View>
        ),
       }}
       />
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.messagesList}
      />
      {/* {showEmojiPicker && (
        <EmojiPicker
          onEmojiSelected={(emoji) => {
            sendMessage('emoji', emoji);
            setShowEmojiPicker(false);
          }}
          onPressClose={() => setShowEmojiPicker(false)}
        />
      )} */}
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => setShowEmojiPicker(true)} style={styles.IoniconsButton}>
          <Ionicons name="happy-outline" size={24} color="grey" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={() => pickImage()} style={styles.IoniconsButton}>
          <Ionicons name="image-outline" size={24} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pickVideo()} style={styles.IoniconsButton}>
          <Ionicons name="videocam-outline" size={24} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => sendMessage('text', input)} style={styles.sendButton}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',paddingTop:100
  },
  messagesList: {
    padding: 10, fontFamily:'SpaceMono'
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-end',
  },
  userMessage: {
    alignSelf: 'flex-end', fontFamily:'SpaceMono'
  },
  otherMessage: {
    alignSelf: 'flex-start', fontFamily:'SpaceMono'
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageContent: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#e4e6eb', fontFamily:'SpaceMono'
  },
  messageText: {
    fontSize: 16, fontFamily:'SpaceMono',color:colors.black
  },
  messageImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  messageVideo: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  emoji: {
    fontSize: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10, fontFamily:'SpaceMono'
  },
  IoniconsButton: {
    marginHorizontal: 5,
  },
  sendButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 20,
  },
});
