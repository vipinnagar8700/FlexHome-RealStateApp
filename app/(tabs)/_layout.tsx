import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import colors from '@/constants/colors';

const Layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarStyle:{
        backgroundColor:colors.bgColor,
        borderWidth:0,
        padding:0
      },tabBarShowLabel:false,
      tabBarActiveTintColor:colors.black,
      tabBarInactiveTintColor:'#999'
    }}>
      <Tabs.Screen name="index" options={{tabBarIcon:({color})=>(<Ionicons name='compass' color={color} size={28}/>)}} />
      <Tabs.Screen name="category" options={{tabBarIcon:({color})=>(<MaterialIcons name='space-dashboard' color={color} size={28}/>)}}/>
      <Tabs.Screen name="search" options={{tabBarIcon:({color})=>(
        <View style={{backgroundColor:colors.primaryColor,paddingHorizontal:10,paddingVertical:12,borderRadius:10,height:50}}>
        <Ionicons name='search' color={colors.white} size={28}/>
        </View>
      )
      }}
        />
      <Tabs.Screen name="allChatUsers" options={{tabBarIcon:({color})=>(<Ionicons name='chatbox-ellipses-outline' color={color} size={28}/>)}} />
      <Tabs.Screen name="profile" options={{tabBarIcon:({color})=>(<FontAwesome name='user' color={color} size={28}/>)}}/>
    </Tabs>
  )
}

export default Layout

const styles = StyleSheet.create({})