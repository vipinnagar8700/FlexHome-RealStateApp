import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Feather, FontAwesome, FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Stack, useNavigation } from 'expo-router';
import colors from '@/constants/colors';

const agentData = {
  name: 'John Doe',
  contact: '123-456-7890',
  email: 'john.doe@example.com',
  profileImage: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800',
  JoinedOn:"23-05-2023",
  Description:"Queen to-day?' 'I should.",
  rating: 4.5,
  reviews: [
    { id: '1', reviewer: 'Jane Smith', text: 'Great agent!', rating: 5 },
    { id: '2', reviewer: 'Mike Johnson', text: 'Very helpful.', rating: 4 },
    // Add more reviews as needed
  ],
};

const mockResults = [
    {
      id: 1,
      title: 'Beautiful Family House',
      location: '123 Main St, Cityville',
      image: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'rent',
      category: 'villa',
      floor: 2,
      bedroom: 3,
      bathroom: 2,
      price: 2000,
      square: 1500,
    },
    {
      id: 2,
      title: 'Modern Apartment',
      location: '456 Elm St, Metropolis',
      image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'sale',
      category: 'condo',
      floor: 5,
      bedroom: 2,
      bathroom: 1,
      price: 3000,
      square: 1200,
    },
    {
      id: 3,
      title: 'Beautiful Family House',
      location: '123 Main St, Cityville',
      image: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'rent',
      category: 'villa',
      floor: 2,
      bedroom: 3,
      bathroom: 2,
      price: 2000,
      square: 1500,
    },
    {
      id: 4,
      title: 'Modern Apartment',
      location: '456 Elm St, Metropolis',
      image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'sale',
      category: 'condo',
      floor: 5,
      bedroom: 2,
      bathroom: 1,
      price: 3000,
      square: 1200,
    },
    {
      id: 5,
      title: 'Beautiful Family House',
      location: '123 Main St, Cityville',
      image: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'rent',
      category: 'villa',
      floor: 2,
      bedroom: 3,
      bathroom: 2,
      price: 2000,
      square: 1500,
    },
    {
      id: 6,
      title: 'Modern Apartment',
      location: '456 Elm St, Metropolis',
      image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'sale',
      category: 'condo',
      floor: 5,
      bedroom: 2,
      bathroom: 1,
      price: 3000,
      square: 1200,
    },
    {
      id: 7,
      title: 'Beautiful Family House',
      location: '123 Main St, Cityville',
      image: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'rent',
      category: 'villa',
      floor: 2,
      bedroom: 3,
      bathroom: 2,
      price: 2000,
      square: 1500,
    },
    {
      id: 8,
      title: 'Modern Apartment',
      location: '456 Elm St, Metropolis',
      image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'sale',
      category: 'condo',
      floor: 5,
      bedroom: 2,
      bathroom: 1,
      price: 3000,
      square: 1200,
    },
    {
      id: 9,
      title: 'Beautiful Family House',
      location: '123 Main St, Cityville',
      image: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'rent',
      category: 'villa',
      floor: 2,
      bedroom: 3,
      bathroom: 2,
      price: 2000,
      square: 1500,
    },
    {
      id: 10,
      title: 'Modern Apartment',
      location: '456 Elm St, Metropolis',
      image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'sale',
      category: 'condo',
      floor: 5,
      bedroom: 2,
      bathroom: 1,
      price: 3000,
      square: 1200,
    },
    {
      id: 11,
      title: 'Beautiful Family House',
      location: '123 Main St, Cityville',
      image: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'rent',
      category: 'villa',
      floor: 2,
      bedroom: 3,
      bathroom: 2,
      price: 2000,
      square: 1500,
    },
    {
      id: 12,
      title: 'Modern Apartment',
      location: '456 Elm St, Metropolis',
      image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'sale',
      category: 'condo',
      floor: 5,
      bedroom: 2,
      bathroom: 1,
      price: 3000,
      square: 1200,
    },
  
    {
      id: 13,
      title: 'Beautiful Family House',
      location: '123 Main St, Cityville',
      image: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'rent',
      category: 'villa',
      floor: 2,
      bedroom: 3,
      bathroom: 2,
      price: 2000,
      square: 1500,
    },
    {
      id: 14,
      title: 'Modern Apartment',
      location: '456 Elm St, Metropolis',
      image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'sale',
      category: 'condo',
      floor: 5,
      bedroom: 2,
      bathroom: 1,
      price: 3000,
      square: 1200,
    },{
      id: 15,
      title: 'Beautiful Family House',
      location: '123 Main St, Cityville',
      image: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'rent',
      category: 'villa',
      floor: 2,
      bedroom: 3,
      bathroom: 2,
      price: 2000,
      square: 1500,
    },
    {
      id: 16,
      title: 'Modern Apartment',
      location: '456 Elm St, Metropolis',
      image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'sale',
      category: 'condo',
      floor: 5,
      bedroom: 2,
      bathroom: 1,
      price: 3000,
      square: 1200,
    },
    // Add more mock results as needed
  ];

const AgentProfile = () => {


    const navigation = useNavigation()

    const [reviews, setReviews] = useState(agentData.reviews);
    const [newReview, setNewReview] = useState('');
    const [newRating, setNewRating] = useState('');
  
    const handleAddReview = () => {
      if (newReview && newRating) {
        const review = {
          id: reviews.length + 1,
          text: newReview,
          rating: newRating,
        };
        setReviews([...reviews, review]);
        setNewReview('');
        setNewRating(0);
      }
    };
  
    const renderStars = (rating) => {
      return (
        <View style={styles.starsContainer}>
          {[...Array(5)].map((_, index) => (
            <Ionicons
              key={index}
              name="star"
              size={20}
              color={index < rating ? "#FFD700" : "#D3D3D3"}
            />
          ))}
        </View>
      );
    };
  
    const renderReviewStars = (rating, setRating) => {
      return (
        <View style={styles.starsContainer}>
          {[...Array(5)].map((_, index) => (
            <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
              <Ionicons
                name="star"
                size={25}
                color={index < rating ? "#FFD700" : "#D3D3D3"}
              />
            </TouchableOpacity>
          ))}
        </View>
      );
    };
  return (
    <>
    <Stack.Screen options={{
                headerTransparent: true, headerTitle: "",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{backgroundColor:colors.primaryColor,borderRadius:10,padding:5}}>
            <Ionicons name="arrow-back" size={24} color={colors.white} />
          </TouchableOpacity>
                ),
                headerRight: () => (
                    <>
                    </>

                )
            }}
            >
            </Stack.Screen>
    <View style={styles.container}>
      <Image source={{ uri: agentData.profileImage }} style={styles.profileImage} />

      <Text style={styles.name}>{agentData.name}</Text>
      <Text style={styles.contact}><Feather name="phone" size={18} color={colors.primaryColor} />  {agentData.contact}</Text>
      <Text style={styles.email}><Fontisto name="email" size={18} color={colors.primaryColor} />  {agentData.email}</Text>
        <Text style={styles.email}><MaterialCommunityIcons name="wallet-membership" size={18} color={colors.primaryColor}  /> {agentData.JoinedOn}</Text>
        <Text style={styles.email}>{agentData.Description}</Text>
        <Text style={styles.sectionTitle}>Properties by this agent</Text>
        <ScrollView style={styles.resultsContainer} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} 
         >
            
          {mockResults.length > 0 ? (
            mockResults.map(result => (
              <View key={result.id} style={styles.resultItem}>
                <Image source={{ uri: result.image }} style={styles.resultImage} />
                <View style={styles.resultInfo}>
                  <Text style={styles.resultTitle}>{result.title}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <FontAwesome5 name='map-marker-alt' size={18} color={colors.primaryColor} />
                    <Text style={styles.propertyLocation}>{result.location}</Text>
                  </View>
                  <View style={styles.badgeContainer}>
                    <View style={styles.featuredBadge}>
                      <Text style={styles.featuredText}>Featured</Text>
                    </View>
                    <View style={styles.featuredBadge}>
                      <Text style={styles.featuredText}>For Rent</Text>
                    </View>
                    <View style={styles.featuredBadge}>
                      <Text style={styles.featuredText}>3 Bhk</Text>
                    </View>
                    <View style={styles.bookmarkBadge}>
                      <Ionicons name="bookmark" size={20} color={colors.white} />
                    </View>
                  </View>
                  <View style={[styles.badgeContainer,{paddingTop:0,marginTop:0}]}>
                    <View style={styles.featuredBadge}>
                      <Text style={[styles.featuredText,{fontSize:16,fontWeight:'600'}]}> <FontAwesome name="bed" size={20} color={colors.white} style={{marginRight:10}} />{""} {""}{""} {""}{result?.bedroom}</Text>
                    </View>
                    <View style={styles.featuredBadge}>
                      <Text style={[styles.featuredText,{fontSize:16,fontWeight:'600'}]}><FontAwesome name="bathtub" size={20} color={colors.white} /> {""} {""}{""} {""} {result?.bathroom}</Text>
                    </View>
                    <View style={styles.featuredBadge}>
                      <Text style={[styles.featuredText,{fontSize:16,fontWeight:'600'}]}><MaterialCommunityIcons name="tape-measure" size={20} color={colors.white} /> {""} {""}{""} {""} {result?.square}</Text>
                    </View>
                    <View style={styles.bookmarkBadge}>
                    <Text style={[styles.featuredText,{fontSize:16,fontWeight:'600'}]}>
                    $2000

                    </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.noResultsText}>No results found</Text>
          )}
          <Text style={styles.sectionTitle}>Write a Review</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Review"
            value={newReview}
            onChangeText={setNewReview}
          />
          {renderReviewStars(newRating, setNewRating)}
          <TouchableOpacity style={{ backgroundColor: colors.primaryColor, padding: 5, justifyContent: 'space-between', borderRadius: 10, alignContent: 'center', alignItems: 'center', marginVertical: 10 }} onPress={handleAddReview}>
            <Text style={{ color: colors.white, padding: 5, justifyContent: 'space-between', fontSize: 17 }}>Submit Review </Text>
          </TouchableOpacity>
          <Text style={styles.sectionTitle}>9 Reviews</Text>
          <FlatList
            data={reviews}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.reviewItem}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>

                  <Image source={{ uri: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800" }} style={{ width: 40, height: 40, borderRadius: 40 }} />
                  <View>
                    {renderStars(item.rating)}
                    <Text style={[styles.reviewText, { fontWeight: "800" }]}>Aishwarya Garg</Text>
                    <Text style={[styles.reviewText, { fontSize: 11 }]}>18 min ago</Text>
                  </View>
                </View>
                <Text style={styles.reviewText}>{item.text}</Text>
              </View>
            )}
          />
        </ScrollView>
        
        

    </View>
    </>

  );
};

export default AgentProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',paddingTop:100
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  contact: {
    fontSize: 13,
    textAlign: 'center',
    marginVertical: 5,
  },
  email: {
    fontSize: 13,
    textAlign: 'center',
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  ratingText: {
    fontSize: 18,
    marginRight: 5,
  },
  reviewHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  reviewItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  reviewer: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  comment: {
    fontSize: 14,
    marginVertical: 5,
  },
  reviewRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewRatingText: {
    fontSize: 14,
    marginRight: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    marginBottom: 10,
  },
  shareContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 10,
    width: '15%',
  },
  shareButtonText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: '#e3e3e3',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10, borderRadius: 10
  },
  resultsContainer: {
    flex: 1,
  },
  resultItem: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#333333',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  resultImage: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  resultInfo: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
    marginTop: 20
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
  },
  propertyLocation: {
    fontSize: 14,
    color: colors.primaryColor,
    marginLeft: 10
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  featuredBadge: {
    backgroundColor: colors.primaryColor,
    padding: 5,
    borderRadius: 10,
  },
  featuredText: {
    fontSize: 12,
    color: colors.white,
  },
  bookmarkBadge: {
    backgroundColor: colors.primaryColor,
    padding: 10,
    marginLeft: 30,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.white,
  },
  noResultsText: {
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
    marginTop: 20,
  },
  reviewText: {
    fontSize: 16,
  },
  reviewRating: {
    fontSize: 14,
    color: 'gray',
  },
  starsContainer: {
    flexDirection: 'row'
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  feature: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 14,
  },
  table: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableCell: {
    fontSize: 16,
  },
});
