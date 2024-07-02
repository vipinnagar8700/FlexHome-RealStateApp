import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Image, Modal } from 'react-native';
import { FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '@/constants/colors';
import { Stack } from 'expo-router';
import { supabase } from '@/supabase/supabase';



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

const Search = () => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
const [AllPropertie, setAllPropertie] = useState([]);

  const [category, setCategory] = useState('');
  const [floor, setFloor] = useState('');
  const [bedroom, setBedroom] = useState('');
  const [bathroom, setBathroom] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [squareRange, setSquareRange] = useState('');


  const [results, setResults] = useState(AllPropertie);
  const [modalVisible, setModalVisible] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const scrollViewRef = useRef();


  // Retrived All Sale Properties Categories

useEffect(() => {
  const fetchData = async () => {
      const { data, error } = await supabase
          .from('Properties')
          .select()
          // .limit(); 
      if (error) {
          console.error('Error fetching data:', error);
      } else {
        setAllPropertie(data);
      }
  };

  fetchData();
}, []);


  const handleSearch = () => {
    let filteredResults = AllPropertie;

    if (query) {
      filteredResults = filteredResults.filter(item =>
        item.Name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (type) {
      filteredResults = filteredResults.filter(item =>
        item.Type.toLowerCase().includes(type.toLowerCase())
      );
    }

    if (category) {
      filteredResults = filteredResults.filter(item =>
        item.Categories.toLowerCase().includes(category.toLowerCase())
      );
    }

    if (floor) {
      filteredResults = filteredResults.filter(item =>
        item.Number_floor.toString() === floor
      );
    }

    if (bedroom) {
      filteredResults = filteredResults.filter(item =>
        item.Number_bedroom.toString() === bedroom
      );
    }

    if (bathroom) {
      filteredResults = filteredResults.filter(item =>
        item.Number_bathroom.toString() === bathroom
      );
    }

    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split('-').map(Number);
      filteredResults = filteredResults.filter(item =>
        item.Price >= minPrice && item.Price <= maxPrice
      );
    }

    if (squareRange) {
      const [minSquare, maxSquare] = squareRange.split('-').map(Number);
      filteredResults = filteredResults.filter(item =>
        item.Square >= minSquare && item.Square <= maxSquare
      );
    }

    setResults(filteredResults.slice(0, pageSize)); // Load initial page of results
    setPageNumber(1); 
  };

  const handleApplyFilters = () => {
    handleSearch(); // Apply filters on modal apply button press
    setModalVisible(false); // Close modal after applying filters
  };

  const loadMoreResults = () => {
    const startIndex = pageNumber * pageSize;
    const endIndex = startIndex + pageSize;
    const newResults = mockResults.slice(startIndex, endIndex);

    setResults(prevResults => [...prevResults, ...newResults]);
    setPageNumber(pageNumber + 1);
  };


  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const contentHeight = event.nativeEvent.contentSize.height;
    const scrollViewHeight = event.nativeEvent.layoutMeasurement.height;

    if (offsetY + scrollViewHeight >= contentHeight - 20) {
      // Load more results when user is near the end of the list
      loadMoreResults();
    }
  }; 


  return (
    <>
      <Stack.Screen options={{ headerTransparent: true, headerTitle: "Discover Our Properties" }} />
      <View style={styles.container}>
        <View style={styles.searchSectionWrapper}>
          <View style={styles.searchBar}>
            <Ionicons name='search' size={18} style={{ marginRight: 5 }} color={colors.black} />
            <TextInput
              placeholder='Search...'
              value={query}
              onChangeText={setQuery}
              onSubmitEditing={handleSearch}
              style={{ flex: 1 , fontFamily:'SpaceMono'}}
            />
          </View>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.filterBtn}>
            <Ionicons name='options' size={20} color={colors.white} />
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
            <ScrollView>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Filter Options</Text>
                <TextInput
                  placeholder='Type (rent/sale)'
                  value={type}
                  onChangeText={setType}
                  style={styles.filterInput}
                  placeholderTextColor={colors.white}
                />
                <TextInput
                  placeholder='Category (villa/condo)'
                  value={category}
                  onChangeText={setCategory}
                  style={styles.filterInput}
                  placeholderTextColor={colors.white}
                />
                <TextInput
                  placeholder='Floor'
                  value={floor}
                  onChangeText={setFloor}
                  style={styles.filterInput}
                  placeholderTextColor={colors.white}
                />
                <TextInput
                  placeholder='Bedrooms'
                  value={bedroom}
                  onChangeText={setBedroom}
                  style={styles.filterInput}
                  placeholderTextColor={colors.white}
                />
                <TextInput
                  placeholder='Bathrooms'
                  value={bathroom}
                  onChangeText={setBathroom}
                  style={styles.filterInput}
                  placeholderTextColor={colors.white}
                />
                <TextInput
                  placeholder='Price Range (min-max)'
                  value={priceRange}
                  onChangeText={setPriceRange}
                  style={styles.filterInput}
                  placeholderTextColor={colors.white}
                />
                <TextInput
                  placeholder='Square Range (min-max)'
                  value={squareRange}
                  onChangeText={setSquareRange}
                  style={styles.filterInput}
                  placeholderTextColor={colors.white}
                />
                <TouchableOpacity onPress={handleApplyFilters} style={styles.applyButton}>
                  <Text style={styles.applyButtonText}>Apply Filters</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </Modal>

        <ScrollView style={styles.resultsContainer} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} ref={scrollViewRef}  onScroll={handleScroll}
          scrollEventThrottle={16}>
          {AllPropertie.length > 0 ? (
            AllPropertie.map(result => (
              <View key={result.ID} style={styles.resultItem}>
                <Image source={{ uri: "https://images.pexels.com/photos/2319424/pexels-photo-2319424.jpeg?auto=compress&cs=tinysrgb&w=800" }} style={styles.resultImage} />
                <View style={styles.resultInfo}>
                  <Text style={styles.resultTitle}>{result.Name}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <FontAwesome5 name='map-marker-alt' size={18} color={colors.primaryColor} />
                    <Text style={styles.propertyLocation}>{result.Location}</Text>
                  </View>
                  <View style={styles.badgeContainer}>
                    <View style={styles.featuredBadge}>
                      <Text style={styles.featuredText}>Featured</Text>
                    </View>
                    <View style={styles.featuredBadge}>
                      <Text style={styles.featuredText}>For {result?.Type}</Text>
                    </View>
                    <View style={styles.featuredBadge}>
                      <Text style={styles.featuredText}>{result?.Number_floor} floors</Text>
                    </View>
                    <View style={styles.bookmarkBadge}>
                      <Ionicons name="bookmark" size={20} color={colors.white} />
                    </View>
                  </View>
                  <View style={[styles.badgeContainer,{paddingTop:0,marginTop:0}]}>
                    <View style={styles.featuredBadge}>
                      <Text style={[styles.featuredText,{fontSize:16,fontWeight:'600'}]}> <FontAwesome name="bed" size={20} color={colors.white} style={{marginRight:10}} />{""} {""}{""} {""}{result?.Number_bathroom}</Text>
                    </View>
                    <View style={styles.featuredBadge}>
                      <Text style={[styles.featuredText,{fontSize:16,fontWeight:'600'}]}><FontAwesome name="bathtub" size={20} color={colors.white} /> {""} {""} {result?.Number_bedroom}</Text>
                    </View>
                    <View style={styles.featuredBadge}>
                      <Text style={[styles.featuredText,{fontSize:16,fontWeight:'600'}]}><MaterialCommunityIcons name="tape-measure" size={20} color={colors.white} /> {""} {""} {result?.Square}</Text>
                    </View>
                    <View style={styles.bookmarkBadge}>
                    <Text style={[styles.featuredText,{fontSize:16,fontWeight:'600'}]}>
                  $ {result?.Price}
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
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    padding: 20,
    paddingTop: 50
  },
  searchSectionWrapper: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center', fontFamily:'SpaceMono'
  },
  filterBtn: {
    backgroundColor: colors.primaryColor,
    padding: 12,
    borderRadius: 12,
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position:'absolute',width:'100%',height:'100%'
  },
  modalContent: {
    top:200,
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
    width: '100%',
    maxHeight: '100%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center', fontFamily:'SpaceMono'
  },
  filterInput: {
    backgroundColor: colors.primaryColor,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  fontFamily:'SpaceMono'
  },
  applyButton: {
    backgroundColor: colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  applyButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold', fontFamily:'SpaceMono'
  },
  closeButton: {
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold', fontFamily:'SpaceMono'
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
    marginTop: 20, fontFamily:'SpaceMono'
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black, fontFamily:'SpaceMono'
  },
  propertyLocation: {
    fontSize: 14,
    color: colors.primaryColor,
    marginLeft: 10, fontFamily:'SpaceMono'
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
    color: colors.white, fontFamily:'SpaceMono'
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
    marginTop: 20, fontFamily:'SpaceMono'
  },
});
