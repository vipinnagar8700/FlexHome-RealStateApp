import { Alert, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { Stack } from 'expo-router';
import { FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import colors from '@/constants/colors';
import { destinationCategories } from '@/constants/db';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const pageSize = 10; 



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
    title: 'Modern Apartment Villa',
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
];
const Profile = () => {
  const scrollRef = useRef<ScrollView>(null);
  const itemRef = useRef<TouchableOpacity[] | null[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSelectCategory = (index: number) => {
    const selected = itemRef.current[index];
    setActiveIndex(index);
    selected?.measure((x) => {
        scrollRef.current?.scrollTo({ x: x, y: 0, animated: true })
    })
}

const renderScreen = () => {
  switch (activeIndex) {
    case 0:
      return <DashboardScreen />;
    case 1:
      return <PropertiesScreen />;
    case 2:
      return <SubscriptionPackageScreen />;
      case 3:
      return <FavourateProperties />;
    default:
      return <DashboardScreen />;
  }
};
  return (
    <>
      <Stack.Screen options={{
        headerTransparent: true, headerTitle: "",
       
      }} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=800' }} style={styles.profileImage} />
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>john.doe@example.com</Text>
          <Text style={styles.userEmail}>+91 8700504218</Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexDirection: 'row', gap: 10, paddingVertical: 10, marginBottom: 10 }}
        ref={scrollRef}
      >
        <TouchableOpacity
          ref={(el) => (itemRef.current[0] = el)}
          onPress={() => { handleSelectCategory(0) }}
          style={activeIndex === 0 ? styles.categoryBtnActive : styles.categoryBtn}
        >
          <Text style={activeIndex === 0 ? styles.categoryBtnActiveText : styles.categoryBtnText}>
            Dashboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          ref={(el) => (itemRef.current[1] = el)}
          onPress={() => { handleSelectCategory(1) }}
          style={activeIndex === 1 ? styles.categoryBtnActive : styles.categoryBtn}
        >
          <Text style={activeIndex === 1 ? styles.categoryBtnActiveText : styles.categoryBtnText}>
            Properties
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          ref={(el) => (itemRef.current[2] = el)}
          onPress={() => { handleSelectCategory(2) }}
          style={activeIndex === 2 ? styles.categoryBtnActive : styles.categoryBtn}
        >
          <Text style={activeIndex === 2 ? styles.categoryBtnActiveText : styles.categoryBtnText}>
            Subscription Package
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          ref={(el) => (itemRef.current[3] = el)}
          onPress={() => { handleSelectCategory(3) }}
          style={activeIndex === 3 ? styles.categoryBtnActive : styles.categoryBtn}
        >
          <Text style={activeIndex === 3 ? styles.categoryBtnActiveText : styles.categoryBtnText}>
            Favourate Properties
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={{ flex: 1 }}>
        {renderScreen()}
      </View>
          
        </View>
        </ScrollView>

      </View>
    </>
  )
}

export default Profile;

const DashboardScreen = () => (
  <View >
    <ScrollView style={styles.container}>
    <View style={styles.graphContainer}>
        <Text style={styles.graphTitle}>Properties Overview</Text>
        <LineChart
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug',"Sep",'Oct','Nov','Dec',],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43,90,100,10,20,60,100],
              },
            ],
          }}
          width={screenWidth } // from react-native
          height={220}
          yAxisLabel=""
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Properties</Text>
        <Text style={styles.cardValue}>120</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Processing Properties</Text>
        <Text style={styles.cardValue}>30</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sold Properties</Text>
        <Text style={styles.cardValue}>50</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Properties in Rent</Text>
        <Text style={styles.cardValue}>20</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Rejected Properties</Text>
        <Text style={styles.cardValue}>20</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Our Subscription</Text>
        <Text style={styles.cardValue}>Premium</Text>
      </View>
     
    </ScrollView>
  </View>
);

const PropertiesScreen = () => (

  <View >
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
        </ScrollView>
    
  </View>
);

const subscriptionPackages = [
  { id: '1', name: 'Free', price: '$0', benefits: 'Add 1 property', buttonLabel: 'Activate Free' },
  { id: '2', name: 'Basic', price: '$50', benefits: 'Add up to 50 properties', buttonLabel: 'Activate Basic', amount: 5000 },
  { id: '3', name: 'Premium', price: '$130', benefits: 'Add unlimited properties', buttonLabel: 'Activate Premium', amount: 13000 },
];

const SubscriptionPackageScreen = () => {
  const handleActivate = (name) => {
    Alert.alert('Subscription Activated', `You have activated the ${name} package.`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.packageName}>{item.name}</Text>
      <Text style={styles.packagePrice}>{item.price}</Text>
      <Text style={styles.packageBenefits}>{item.benefits}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleActivate(item.name)}
      >
        <Text style={styles.buttonText}>{item.buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={subscriptionPackages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const FavourateProperties = () => (
  
  <View>
   <Text style={styles.sectionTitle}>Saved Properties</Text>
          <View style={styles.propertyList}>
            {/* Render saved properties here */}
            <View style={styles.propertyItem}>
              <Image source={{ uri: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=800' }} style={styles.propertyImage} />
              <View style={styles.propertyInfo}>
                <Text style={styles.propertyTitle}>Beautiful Family House</Text>
                <View style={{flexDirection:'row'}}>
                <FontAwesome5 name='map-marker-alt' size={18} color={colors.primaryColor} />
                <Text style={styles.propertyLocation}>123 Main St, Cityville</Text>
                
                </View>
                <View style={styles.badgeContainer}>
                                        <View style={styles.badgeContainer}>

                                            <View style={styles.featuredBadge}>
                                                <Text style={styles.featuredText}>Featured</Text>
                                            </View>
                                            <View style={styles.featuredBadge}>
                                                <Text style={styles.featuredText}>For Rent</Text>
                                            </View>
                                            <View style={styles.featuredBadge}>
                                                <Text style={styles.featuredText}>3 Bhk.</Text>
                                            </View>
                                        </View>
                                        <View style={styles.bookmarkBadge}>
                                            <Ionicons name="bookmark" size={20} color={colors.white} />
                                        </View>
                                    </View>
              </View>
            </View>
            <View style={styles.propertyItem}>
              <Image source={{ uri: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=800' }} style={styles.propertyImage} />
              <View style={styles.propertyInfo}>
                <Text style={styles.propertyTitle}>Beautiful Family House</Text>
                <View style={{flexDirection:'row'}}>
                <FontAwesome5 name='map-marker-alt' size={18} color={colors.primaryColor} />
                <Text style={styles.propertyLocation}>123 Main St, Cityville</Text>
                </View>
                <View style={styles.badgeContainer}>
                                        <View style={styles.badgeContainer}>

                                            <View style={styles.featuredBadge}>
                                                <Text style={styles.featuredText}>Featured</Text>
                                            </View>
                                            <View style={styles.featuredBadge}>
                                                <Text style={styles.featuredText}>For Rent</Text>
                                            </View>
                                            <View style={styles.featuredBadge}>
                                                <Text style={styles.featuredText}>3 Bhk.</Text>
                                            </View>
                                        </View>
                                        <View style={styles.bookmarkBadge}>
                                            <Ionicons name="bookmark" size={20} color={colors.white} />
                                        </View>
                                    </View>
              </View>
            </View>
            {/* Add more properties as needed */}
          </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    paddingTop: 100
  },  packageName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  packagePrice: {
    fontSize: 16,
    color: 'green',
    marginTop: 4,
    fontWeight:'800', fontFamily:'SpaceMono'
  },
  packageBenefits: {
    fontSize: 14,
    color: '#999',
    marginVertical: 8,fontWeight:'500', fontFamily:'SpaceMono'
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16, fontFamily:'SpaceMono'
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: colors.primaryColor,
    paddingBottom:20
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.white, fontFamily:'SpaceMono'
  },
  userEmail: {
    fontSize: 16,
    color: colors.white, fontFamily:'SpaceMono'
  },
  body: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
    marginBottom: 10, fontFamily:'SpaceMono'
  },
  propertyList: {
    // Additional styling for property list
  },
  propertyItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#333333',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3, fontFamily:'SpaceMono'
  },
  propertyImage: {
    width: 100,
    height: 100,
  },
  propertyInfo: {
    flex: 1,
    padding: 10, fontFamily:'SpaceMono'
  },
  propertyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black, fontFamily:'SpaceMono'
  },
  propertyLocation: {
    fontSize: 14,
    color: colors.primaryColor,marginLeft:10, fontFamily:'SpaceMono'
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10
},
featuredBadge: {
    backgroundColor: colors.primaryColor,
    padding: 5,
    borderRadius: 10,
},
featuredText: {
    fontSize: 12,
    color: colors.white, fontFamily:'SpaceMono'
},
featuredRow: {
    flexDirection: 'row',
    alignItems: 'center',
},
featuredRowText: {
    marginLeft: 5,
    fontSize: 12,
    color: colors.black, fontFamily:'SpaceMono'
},
bookmarkBadge: {
    backgroundColor: colors.primaryColor,
    padding: 10,
    marginLeft: 30,
    borderRadius: 30,
    borderWidth: 2, borderColor: colors.white
},
categoryBtn: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: colors.white,
  paddingHorizontal: 16,
  paddingVertical: 10, borderRadius: 10,
  shadowColor: '#333333',
  shadowOffset: { width: 1, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 3, height: 45, fontFamily:'SpaceMono'
},
categoryBtnActive: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: colors.primaryColor,
  paddingHorizontal: 16,
  paddingVertical: 10, borderRadius: 10,
  shadowColor: '#333333',
  shadowOffset: { width: 1, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 3, height: 45, fontFamily:'SpaceMono'
},
categoryBtnText: {
  marginLeft: 10,
  color: colors.black,fontWeight:'600', fontFamily:'SpaceMono'
},
categoryBtnActiveText: { 
  marginLeft: 10,
  color: colors.white,fontWeight:'600', fontFamily:'SpaceMono'
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
  shadowRadius: 3, fontFamily:'SpaceMono'
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
  marginTop: 20, fontFamily:'SpaceMono'
},
resultTitle: {
  fontSize: 16,
  fontWeight: '700',
  color: colors.black, fontFamily:'SpaceMono'
},

noResultsText: {
  fontSize: 16,
  color: colors.black,
  textAlign: 'center',
  marginTop: 20, fontFamily:'SpaceMono'
},
card: {
  backgroundColor: colors.white,
  borderRadius: 8,
  padding: 16,
  marginVertical: 8,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 1, fontFamily:'SpaceMono'
},
cardTitle: {
  fontSize: 16,
  color: colors.black,fontWeight:'800', fontFamily:'SpaceMono'
},
cardValue: {
  fontSize: 20,
  color: colors.primaryColor,fontWeight:'800',
  marginTop: 4, fontFamily:'SpaceMono'
},
graphContainer: {
  marginTop: 16,
},
graphTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#333',
  marginBottom: 8,
  textAlign: 'center', fontFamily:'SpaceMono'
},

});
