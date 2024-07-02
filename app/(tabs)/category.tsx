import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import colors from '@/constants/colors';
import { supabase } from '@/supabase/supabase';

const Category = () => {

// Retrived All Properties Categories
const [AllPropertiesCategories, setAllPropertiesCategories] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        const { data, error } = await supabase
            .from('Category')
            .select()
        if (error) {
            console.error('Error fetching data:', error);
        } else {
            setAllPropertiesCategories(data);
        }
    };

    fetchData();
}, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryBtn} key={item?.ID}>
      <Image source={{ uri: item.Image }} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.Name}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Stack.Screen options={{
        headerTransparent: false, headerTitle: "Browse Properties By Categories",
      }} />
      <FlatList
        data={AllPropertiesCategories}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.container}
      />
    </>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.bgColor,
    padding: 10,
  },
  categoryBtn: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 5,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#333333',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    maxWidth: '45%',
  },
  categoryImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.black, fontFamily:'SpaceMono'
  },
});
