import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Linking, Button, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Entypo, Feather, FontAwesome5, Fontisto, Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import { Stack, useNavigation } from 'expo-router';
import colors from '@/constants/colors';

const propertyDetails = {
  title: "Beautiful Beach House",
  description: "This beautiful beach house offers stunning ocean views and a relaxing atmosphere.",
  images: [
    'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=800'

  ],
  youtubeLink: 'https://www.youtube.com/watch?v=y9j-BL5ocW8&pp=ygUQcmVhbCBzdGF0ZSB2aWRlbw%3D%3D',
  location: {
    latitude: 37.78825,
    longitude: -122.4324,
  },
  overview: "This beach house is perfect for a family vacation. It features 3 bedrooms, 2 bathrooms, and a large living area.",
  details: "Built in 2010, this house is made with high-quality materials. It includes a modern kitchen, spacious bedrooms, and a beautiful garden.",
  status: "For Sale",
  agent: {
    name: "John Doe",
    email: "johndoe@example.com",
    contact: "123-456-7890",
    propertiesCount: 10,
  },
  reviews: [
    { id: 1, text: "Amazing place! Loved the view.", rating: 5 },
    { id: 2, text: "Nice house but a bit pricey.", rating: 4 }
  ]
};

const SinglePropertyDetails = () => {
  const navigation = useNavigation();


  const handleShare = () => {

  }
  const handleCallPress = () => {
    Linking.openURL(`tel:${8700504218}`);
  };

  const handleMaillPress = () => {
    Linking.openURL(`mailto:${134333}`);
  };

  const [reviews, setReviews] = useState(propertyDetails.reviews);
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
    <View style={styles.container}>
      <Stack.Screen options={{
        headerTransparent: true, headerTitle: "",
        headerLeft: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: colors.primaryColor, padding: 4, borderRadius: 10, margin: 5 }}>
              <Ionicons name="arrow-back" size={24} color={colors.white} />
            </TouchableOpacity>

          </View>
        ),
      }}
      />
      <Image source={{ uri: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800" }} style={{ width: '100%', height: 300, borderRadius: 0, marginBottom: 10 }} />
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={{paddingHorizontal:10}}>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageGallery}>
          {propertyDetails.images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          ))}
        </ScrollView>
        <Text style={styles.title}>{propertyDetails.title}</Text>
        <View style={{ flexDirection: 'row', alignContent: 'center' }}>
          <FontAwesome5 name='map-marker-alt' size={18} color={colors.primaryColor} />
          <Text style={{ marginLeft: 5, fontSize: 12, color: colors.black
, fontFamily:'SpaceMono'

           }}>San Francisco, California</Text>
          <Ionicons name='eye' size={18} color={colors.black} style={{ marginLeft: 20 }} />
          <Text style={{ marginLeft: 5, fontSize: 12, color: colors.black 
            , fontFamily:'SpaceMono'
          }}>4,233</Text>
          <FontAwesome5 name='calendar' size={18} color={colors.black} style={{ marginLeft: 20 }} />
          <Text style={{ marginLeft: 5, fontSize: 12, color: colors.black, fontFamily:'SpaceMono' }}> Nov 18, 2019</Text>
        </View>

        <TouchableOpacity style={styles.youtubeLink} onPress={() => Linking.openURL(propertyDetails.youtubeLink)}>
          <Ionicons name="logo-youtube" size={24} color="red" />
          <Text style={styles.youtubeText}>Watch Video</Text>
        </TouchableOpacity>
        
        <View style={styles.card}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.sectionTitle}>Agent Details</Text>
          <TouchableOpacity style={{backgroundColor:colors.primaryColor,padding:10,borderRadius:20}}>
          <Entypo name="chat" size={18} color={colors.white} /> 
          </TouchableOpacity>
          </View>
         
          <Text style={styles.sectionContent}>
            <FontAwesome5 name="user" size={18} color="#000" /> {propertyDetails.agent.name}
          </Text>
          <TouchableOpacity >
            <Text style={styles.sectionContent}>
              <Fontisto name="email" size={18} color="#000" /> {propertyDetails.agent.email}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCallPress}>
            <Text style={styles.sectionContent}>
              <Feather name="phone" size={18} color="#000" /> {propertyDetails.agent.contact}
            </Text>
          </TouchableOpacity>
          <Text style={styles.sectionContent}>
            <Feather name="home" size={18} color="#000" /> {propertyDetails.agent.propertiesCount} Properties
          </Text>
          </View>
          <Text style={styles.sectionTitle}>Property Overview</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Status:</Text>
              <Text style={styles.tableCell}>{propertyDetails.status}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Number of blocks:</Text>
              <Text style={styles.tableCell}>2</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Category:</Text>
              <Text style={styles.tableCell}>House</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Number of floors:</Text>
              <Text style={styles.tableCell}>4</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Investor:</Text>
              <Text style={styles.tableCell}>Ping An</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Number of flats:</Text>
              <Text style={styles.tableCell}>125</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Square:</Text>
              <Text style={styles.tableCell}>377 m²</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Number of bedrooms</Text>
              <Text style={styles.tableCell}>5</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Number of bathrooms:</Text>
              <Text style={styles.tableCell}>4</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Price</Text>
              <Text style={[styles.tableCell,{color:'green'}]}>$12325</Text>
            </View>
          </View>
          <Text style={styles.sectionTitle}>Features</Text>
          <View style={styles.featuresContainer}>
            <Text style={styles.feature}>✅ Wifi</Text>
            <Text style={styles.feature}>✅ Parking</Text>
            <Text style={styles.feature}>✅ Swimming pool</Text>
            <Text style={styles.feature}>✅ Balcony</Text>
            <Text style={styles.feature}>✅ Garden</Text>
            <Text style={styles.feature}>✅ Security</Text>
            <Text style={styles.feature}>✅ Fitness center</Text>
            <Text style={styles.feature}>✅ Air Conditioning</Text>
            <Text style={styles.feature}>✅ Central Heating</Text>
            <Text style={styles.feature}>✅ Laundry Room</Text>
            <Text style={styles.feature}>✅ Pets Allow</Text>
            <Text style={styles.feature}>✅ Spa & Massage</Text>
          </View>
          <Text style={styles.sectionTitle}>Distance key between facilities</Text>
          <View style={styles.featuresContainer}>
            <Text style={styles.feature}>✅ Hospital - 15km</Text>
            <Text style={styles.feature}>✅ Super Market - 20km</Text>
            <Text style={styles.feature}>✅ Entertainment - 10km</Text>
            <Text style={styles.feature}>✅ School - 17km</Text>
            <Text style={styles.feature}>✅ Pharmacy - 2km</Text>
            <Text style={styles.feature}>✅ Airport - 10km</Text>
            <Text style={styles.feature}>✅ Railways - 14km</Text>
            <Text style={styles.feature}>✅ Bus Stop - 9km</Text>
            <Text style={styles.feature}>✅ Beach - 19km</Text>
            <Text style={styles.feature}>✅ Mall - 15km</Text>
            <Text style={styles.feature}>✅ Bank - 20km</Text>
          </View>

          <Text style={styles.sectionTitle}>Property Description</Text>
          <Text style={styles.sectionContent}>A profoundly special project amidst history and Istanbul. In the heart of the Historical Peninsula, Select Lifestyle Alternatives ranging from 1+1 to 6+1, in limited numbers…. A timeless aesthetic enriched in perfect details .
            {"\n"}
            Why you should buy a house from this project?{"\n"}
            1. Within the historical peninsula, there is a very special area where you will never find a similar one.{"\n"}
            2. Unique sea view with a historical texture of Istanbul.{"\n"}
            3. In the bustling city life, in the middle of all transportation possibilities.{"\n"}
            4. 1+1 to 6+1 very special, suitable for all needs loft apartments{"\n"}
            5.Large landscaping areas, cafes, shopping opportunities.{"\n"}</Text>

       
          <Text style={styles.sectionTitle}> Location</Text>
          <Text style={styles.sectionContent}>  San Francisco </Text>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: propertyDetails.location.latitude,
              longitude: propertyDetails.location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker coordinate={propertyDetails.location} />
          </MapView>
          <View style={styles.shareContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={() => handleShare()}>
              <Ionicons name="logo-twitter" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton} onPress={() => handleShare()}>
              <Ionicons name="logo-whatsapp" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton} onPress={() => handleShare()}>
              <Ionicons name="logo-facebook" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton} onPress={() => handleShare()}>
              <Ionicons name="logo-instagram" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton} onPress={() => handleShare()}>
              <Ionicons name="logo-linkedin" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton} onPress={() => handleShare()}>
              <Ionicons name="mail-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionTitle}>Write a Review</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Review"
            value={newReview}
            onChangeText={setNewReview}
          />
          {renderReviewStars(newRating, setNewRating)}
          <TouchableOpacity style={{ backgroundColor: colors.primaryColor, padding: 5, justifyContent: 'space-between', borderRadius: 10, alignContent: 'center', alignItems: 'center', marginVertical: 10 }} onPress={handleAddReview}>
            <Text style={{ color: colors.white, padding: 5, justifyContent: 'space-between', fontSize: 17 , fontFamily:'SpaceMono'}}>Submit Review </Text>
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
  );
};

export default SinglePropertyDetails;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.white,
    padding: 15,
    shadowColor: colors.white,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#f7f7f7', padding: 0
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10, fontFamily:'SpaceMono'
  },
  imageGallery: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
  youtubeLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, marginTop: 10, fontFamily:'SpaceMono'
  },
  youtubeText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'red', fontFamily:'SpaceMono'
  },
  map: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
, fontFamily:'SpaceMono'

  },
  sectionContent: {
    fontSize: 16,
    marginBottom: 10
    , fontFamily:'SpaceMono'
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
    fontSize: 16
, fontFamily:'SpaceMono'

  },
  input: {
    height: 40,
    borderColor: '#e3e3e3',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10, borderRadius: 10
, fontFamily:'SpaceMono'

  },
  reviewItem: {
    padding: 10,
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1
, fontFamily:'SpaceMono'

  },
  reviewText: {
    fontSize: 16
, fontFamily:'SpaceMono'

  },
  reviewRating: {
    fontSize: 14,
    color: 'gray'
, fontFamily:'SpaceMono'

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
    fontSize: 14
, fontFamily:'SpaceMono'

  },
  table: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
, fontFamily:'SpaceMono'

  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
, fontFamily:'SpaceMono'

  },
  tableCell: {
    fontSize: 16
, fontFamily:'SpaceMono'

  },
});
