import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Link, Stack, useNavigation } from 'expo-router'
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons'
import colors from '@/constants/colors'
import { useHeaderHeight } from '@react-navigation/elements'
import { supabase } from '../../supabase/supabase';
import { DrawerActions } from '@react-navigation/native'

const page = () => {
    const scrollRef = useRef<ScrollView>(null);
    const itemRef = useRef<TouchableOpacity[] | null[]>([]);
    const [activeIndex, setActiveIndex] = useState(0)
    const headerHeight = useHeaderHeight();
    const navigation = useNavigation();
// Retrive Featured Properties
    const [FeaturedProperties, setFeaturedProperties] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        const { data, error } = await supabase
            .from('Properties')
            .select()
            .eq('"Is Featured?"', '1')
            .limit(5); 
        if (error) {
            console.error('Error fetching data:', error);
        } else {
            setFeaturedProperties(data);
        }
    };

    fetchData();
}, []);

// Retrived All Properties
const [AllProperties, setAllProperties] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        const { data, error } = await supabase
            .from('Properties')
            .select()
            // .eq('"Is Featured?"', '1')
            .limit(5); 
        if (error) {
            console.error('Error fetching data:', error);
        } else {
            setAllProperties(data);
        }
    };

    fetchData();
}, []);

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

// Retrived All Location Properties Categories
const [AllPropertiesLocation, setAllPropertiesLocation] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        const { data, error } = await supabase
            .from('Location')
            .select()
            .limit(5); 
        if (error) {
            console.error('Error fetching data:', error);
        } else {
            setAllPropertiesLocation(data);
        }
    };

    fetchData();
}, []);

// Retrived All Sale Properties Categories
const [AllPropertieSale, setAllPropertieSale] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        const { data, error } = await supabase
            .from('Properties')
            .select()
            .eq('"Type"', 'sale')
            .limit(5); 
        if (error) {
            console.error('Error fetching data:', error);
        } else {
            setAllPropertieSale(data);
        }
    };

    fetchData();
}, []);

// Retrived All Sale Properties Categories
const [AllPropertieRent, setAllPropertieRent] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        const { data, error } = await supabase
            .from('Properties')
            .select()
            .eq('"Type"', 'rent')
            .limit(5); 
        if (error) {
            console.error('Error fetching data:', error);
        } else {
            setAllPropertieRent(data);
        }
    };

    fetchData();
}, []);

// Retrived All News Properties 
const [AllPropertieNews, setAllPropertieNews] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        const { data, error } = await supabase
            .from('News')
            .select()
            .limit(5); 
        if (error) {
            console.error('Error fetching data:', error);
        } else {
            setAllPropertieNews(data);
        }
    };

    fetchData();
}, []);
// Retrived All Agent Properties 
const [AllPropertieAgent, setAllPropertieAgent] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        const { data, error } = await supabase
            .from('Agent')
            .select()
            .limit(5); 
        if (error) {
            console.error('Error fetching data:', error);
        } else {
            setAllPropertieAgent(data);
        }
    };

    fetchData();
}, []);



    const handleSelectCategory = (index: number) => {
        const selected = itemRef.current[index];
        setActiveIndex(index);
        selected?.measure((x) => {
            scrollRef.current?.scrollTo({ x: x, y: 0, animated: true })
        })
    }

    const truncateText = (text, wordLimit) => {
        if (!text) return '';
        const words = text.split(' ');
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(' ') + '...';
      };

    return (
        <>
            <Stack.Screen options={{
                headerTransparent: true, headerTitle: "",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={{ marginLeft: 20 }}>
                        <Image source={{ uri: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=800' }} style={{ width: 40, height: 40, borderRadius: 10 }} />
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <Link href={`/notification/${1}`} asChild>
                    <TouchableOpacity onPress={() => { }} style={{ marginRight: 20, backgroundColor: colors.white, padding: 10, borderRadius: 10, shadowColor: '#171717', shadowOffset: { width: 2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3 }}>
                        <Ionicons name='notifications' size={20} color={colors.black} />
                    </TouchableOpacity>
                    </Link>

                )
            }}
            >

            </Stack.Screen>
            <View style={[styles.container, { paddingTop: headerHeight }]}>
                <Text style={styles.headingText}>Find your favorite homes</Text>
                <View style={styles.searchSectionWrapper}>
                    <View style={styles.searchBar}>
                        <Ionicons name='search' size={18} style={{ marginRight: 5 }} color={colors.black} />
                        <TextInput placeholder='Search...' style={{  fontFamily:'SpaceMono'}} />
                    </View>
                    <TouchableOpacity onPress={() => { }} style={styles.filterBtn}>
                        <Ionicons name='options' size={20} color={colors.white} />
                    </TouchableOpacity>
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} >
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={styles.headingTextCategory}>Featured Properties</Text>

                    <Link href="/search" asChild>
                        <Text style={{  fontFamily:'SpaceMono',color:colors.primaryColor}}>All</Text>

                        </Link>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', gap: 5, paddingVertical: 10, marginBottom: 10 }}>
                        {
                            FeaturedProperties && FeaturedProperties.map((data,index)=>{
                                const truncatedName = truncateText(data?.Name, 3);
                                const truncatedLocation = truncateText(data?.Location, 3);
                                return(
                                    <Link href={`/property/${data?.ID}`} asChild>
                                    <TouchableOpacity key={data?.ID}>
                                    <View style={styles.FeaturedListing}>
                                        <Image source={{
                                            uri: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'
                                        }} style={styles.FeaturedImages} />
                                        <View style={styles.FeaturedIcon}>
                                            <View>
                                                <Text style={{fontSize:16,color:colors.white,fontWeight:'800',  fontFamily:'SpaceMono'}} numberOfLines={1} ellipsizeMode="tail">{truncatedName}</Text>
                                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                                <FontAwesome5 name='map-marker-alt' size={18} color={colors.primaryColor} />
                                                <Text style={{fontSize:16,color:colors.white,fontWeight:'500',marginLeft:5,  fontFamily:'SpaceMono'}}  numberOfLines={1} ellipsizeMode="tail">{truncatedLocation}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.badgeContainer}>
                                                <View style={styles.badgeContainer}>
                                                    <View style={styles.featuredBadge}>
                                                        <Text style={styles.featuredText}>{data?.Categories}</Text>
                                                    </View>
                                                    <View style={styles.featuredBadge}>
                                                        <Text style={styles.featuredText}>For {data?.Type}</Text>
                                                    </View>
                                                    <View style={styles.featuredBadge}>
                                                        <Text style={styles.featuredText}>{data?.Square}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.bookmarkBadge}>
                                                    <Ionicons name="bookmark" size={20} color={colors.white} />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                </Link>

                                )
                            })
                        }
                    </ScrollView>
                    <Text style={styles.headingTextCategory}>What are your looking for ?</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', gap: 10, paddingVertical: 10, marginBottom: 10 }}>
                        {
                            AllPropertiesCategories && AllPropertiesCategories.map((data, index) => {
                                return (
                                    <TouchableOpacity key={data?.ID} ref={(el) => itemRef.current[index] == el} onPress={() => { handleSelectCategory(index) }} style={activeIndex == index ? styles.categoryBtnActive : styles.categoryBtn}>
                                        <MaterialIcons name={data?.icon as any} size={20} color={activeIndex == index ? colors.white : colors.black} />
                                        <Text style={activeIndex == index ? styles.categoryBtnActiveText : styles.categoryBtnText}>
                                            {data?.Name}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', gap: 5, paddingVertical: 10, marginBottom: 10 }}>
                        {
                            AllProperties && AllProperties.map((data,index)=>{
                                const truncatedName = truncateText(data?.Name, 3);
                                const truncatedLocation = truncateText(data?.Location, 2);
                                return(
                                    <Link href={`/property/${data?.ID}`} asChild>
                                    <TouchableOpacity key={data?.ID}>
                                    <View style={styles.CategoryListing}>
                                        <Image source={{
                                           uri: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'
                                        }} style={styles.CategoryImages} />
                                        <View style={styles.bookmarkIcon}>
                                            <Ionicons name="bookmark" size={20} color={colors.white} />
                                        </View>
                                        <View style={{position:'absolute',top:10,left:10,borderRadius:10}}>
            <Text style={{backgroundColor:colors.primaryColor,color:colors.white,padding:5,borderRadius:10,  fontFamily:'SpaceMono'}}>
                {data?.Categories}
            </Text>
        </View>
                                        <Text style={styles.categorylistPlaceText} numberOfLines={1} ellipsizeMode="tail">{truncatedName}</Text>
                                        <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>

                                            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                                                <FontAwesome5 name='map-marker-alt' size={18} color={colors.primaryColor} />
                                                <Text style={{ marginLeft: 5, fontSize: 12, color: colors.black , fontFamily:'SpaceMono' }}>{truncatedLocation}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                                                <Text style={{ marginLeft: 5, fontSize: 12, color: colors.primaryColor ,  fontFamily:'SpaceMono'}}> $ {data?.Price}</Text>
                                            </View>
                                        </View>
        
                                    </View>
        
                                </TouchableOpacity>
                                </Link>
                                )
                            })
                        }
                    </ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={styles.headingTextCategory}>Property By Location</Text>
                        <Link href="/search" asChild>
                        <Text style={{  fontFamily:'SpaceMono',color:colors.primaryColor}} >All</Text>

                        </Link>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', gap: 5, paddingVertical: 10, marginBottom: 10 }}>
                    {
                            AllPropertiesLocation && AllPropertiesLocation.map((data,index)=>{
                                return(
                                    <TouchableOpacity key={data?.ID}>
                                    <View style={styles.CategoryListing}>
                                        <Image source={{
                                            uri: data?.Image
                                        }} style={styles.CategoryImages} />
                                      
                                        <View style={{position:'absolute',top:100,left:"40%",borderRadius:10}}>
            <Text style={{backgroundColor:colors.primaryColor,color:colors.white,padding:5,borderRadius:10 , fontFamily:'SpaceMono'}} numberOfLines={1} ellipsizeMode="tail">
                {data?.Name}
            </Text>
        </View>
                                    </View>
        
                                </TouchableOpacity>
                                )
                            })
                        }

                    </ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={styles.headingTextCategory}>Properties for Sale</Text>
                        <Text style={{fontFamily:'SpaceMono',color:colors.primaryColor}}>All</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', gap: 5, paddingVertical: 10, marginBottom: 10 }}>
                        {
                            AllPropertieSale && AllPropertieSale.map((data,index)=>{
                                const truncatedLocation = truncateText(data?.Location, 2);
                                return(
                                    <Link href={`/property/${data?.ID}`} asChild>
                                    <TouchableOpacity key={data?.ID}>
                                    <View style={styles.CategoryListing}>
                                        <Image source={{
                                            uri: "https://images.pexels.com/photos/51212/pexels-photo-51212.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        }} style={styles.CategoryImages} />
                                        <View style={styles.bookmarkIcon}>
                                            <Ionicons name="bookmark" size={20} color={colors.white} />
                                        </View>
                                        <View style={{position:'absolute',top:10,left:10,borderRadius:10}}>
            <Text style={{backgroundColor:colors.primaryColor,color:colors.white,padding:5,borderRadius:10, fontFamily:'SpaceMono'}}>
                {data?.Categories}
            </Text>
        </View>
                                        <Text style={styles.categorylistPlaceText} numberOfLines={1} ellipsizeMode="tail">{data?.Name}</Text>
                                        <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>

                                            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                                                <FontAwesome5 name='map-marker-alt' size={18} color={colors.primaryColor} />
                                                <Text style={{ marginLeft: 5, fontSize: 12, color: colors.black , fontFamily:'SpaceMono'}}>{truncatedLocation}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                                                <Text style={{ marginLeft: 5, fontSize: 12, color: colors.primaryColor, fontFamily:'SpaceMono' }}> $ {data?.Price}</Text>
                                            </View>
                                        </View>
        
                                    </View>
        
                                </TouchableOpacity>
                                </Link>
                                )
                            })
                        }
                    </ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={styles.headingTextCategory}>Properties for Rent</Text>
                        <Link href="/search" asChild>
                        <Text style={{fontFamily:'SpaceMono',color:colors.primaryColor}}>All</Text>
                        </Link>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', gap: 5, paddingVertical: 10, marginBottom: 10 }}>
                        {
                            AllPropertieRent && AllPropertieRent.map((data,index)=>{
                                const truncatedLocation = truncateText(data?.Location, 2);
                                return(
                                    <Link href={`/property/${data?.ID}`} asChild>
                                    <TouchableOpacity key={data?.ID}>
                                    <View style={styles.CategoryListing}>
                                        <Image source={{
                                            uri: "https://images.pexels.com/photos/144632/pexels-photo-144632.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        }} style={styles.CategoryImages} />
                                        <View style={styles.bookmarkIcon}>
                                            <Ionicons name="bookmark" size={20} color={colors.white} />
                                        </View>
                                        <View style={{position:'absolute',top:10,left:10,borderRadius:10}}>
            <Text style={{backgroundColor:colors.primaryColor,color:colors.white,padding:5,borderRadius:10}}>
                {data?.Categories}
            </Text>
        </View>
                                        <Text style={styles.categorylistPlaceText} numberOfLines={1} ellipsizeMode="tail">{data?.Name}</Text>
                                        <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>

                                            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                                                <FontAwesome5 name='map-marker-alt' size={18} color={colors.primaryColor} />
                                                <Text style={{ marginLeft: 5, fontSize: 12, color: colors.black , fontFamily:'SpaceMono'}}>{truncatedLocation}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                                                <Text style={{ marginLeft: 5, fontSize: 12, color: colors.primaryColor, fontFamily:'SpaceMono' }}> $ {data?.Price}</Text>
                                            </View>
                                        </View>
        
                                    </View>
                                </TouchableOpacity>
                                </Link>
                                )
                            })
                        }
                    </ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={styles.headingTextCategory}>Our Top Agent</Text>
                        <Link href="/search" asChild>
                        <Text style={{  fontFamily:'SpaceMono',color:colors.primaryColor}}>All</Text>
                        </Link>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', gap: 5, paddingVertical: 10, marginBottom: 10 }}>
                        {
                            AllPropertieAgent && AllPropertieAgent.map((data,index)=>{
                                return(
                                    <Link href={`/agent/${data?.ID}`} asChild>
                                    <TouchableOpacity key={data?.ID}>
                                    <View style={styles.CategoryListing}>
                                        <Image source={{
                                            uri: data?.Image
                                        }} style={styles.CategoryImages} />
                                        <View style={{position:'absolute',backgroundColor:colors.primaryColor,padding:5,borderRadius:30,right:12,top:12}}>
                                        <Ionicons name='eye' size={20} color={colors.white} />
                                        </View>
                                        <Text style={{fontSize:16,fontWeight:'800',color:colors.black,marginTop:10, fontFamily:'SpaceMono'}} numberOfLines={1} ellipsizeMode="tail">{data?.Username}</Text>
                                        <Text style={{fontSize:14,fontWeight:'600',color:colors.black,marginTop:5, fontFamily:'SpaceMono'}} numberOfLines={1} ellipsizeMode="tail">{data?.Email}</Text>
                                        <Text style={{fontSize:14,fontWeight:'600',color:colors.black,marginTop:5, fontFamily:'SpaceMono'}} numberOfLines={1} ellipsizeMode="tail">{data?.Phone}</Text>
                                        <Text style={{fontSize:12,fontWeight:'500',color:colors.black,marginTop:5,alignItems:'center', fontFamily:'SpaceMono'}} numberOfLines={1} ellipsizeMode="tail"> <Ionicons name='home' size={15} color={colors.primaryColor} /> 10 Properities</Text>
                                    </View>
                                </TouchableOpacity>
                                </Link>
                                )
                            })
                        }
                    </ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={styles.headingTextCategory}>News</Text>
                        <Link href="/search" asChild>
                        <Text style={{fontFamily:'SpaceMono',color:colors.primaryColor}} >All</Text>

                        </Link>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', gap: 5, paddingVertical: 10, marginBottom: 100 }}>
                        {
                            AllPropertieNews && AllPropertieNews.map((data,index)=>{
                                return(
                                    <TouchableOpacity key={data?.ID}>
                                    <View style={styles.CategoryListing}>
                                        <Image source={{
                                            uri: data?.Image
                                        }} style={styles.CategoryImages} />
                                       
                                        <Text style={styles.categorylistPlaceText} numberOfLines={1} ellipsizeMode="tail">{data?.Name}</Text>
                                        <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                                                <Text style={{ marginLeft: 5, fontSize: 12, color: colors.black , fontFamily:'SpaceMono'}}>{data?.Description}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </ScrollView>
            </View>

        </>

    )
}

export default page

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: colors.bgColor
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
        color: colors.white,  fontFamily:'SpaceMono'
    },
    featuredRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    featuredRowText: {
        marginLeft: 5,
        fontSize: 12,
        color: colors.black,  fontFamily:'SpaceMono'
    },
    bookmarkBadge: {
        backgroundColor: colors.primaryColor,
        padding: 10,
        marginLeft: 30,
        borderRadius: 30,
        borderWidth: 2, borderColor: colors.white
    },
    FeaturedIcon: {
        position: 'absolute', bottom: 20, left: 30
    },
    CategoryListing: {
        backgroundColor: colors.white, padding: 10, borderRadius: 10, marginRight: 20, width: 220
    },
    FeaturedListing: {
        backgroundColor: colors.white, padding: 10, borderRadius: 10, marginRight: 20, width: 320
    },
    FeaturedImages: {
        width: 300, height: 300, borderRadius: 10
    },
    CategoryImages: {
        width: 200, height: 200, borderRadius: 10
    },
    categorylistPlaceText: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.black, marginBottom: 10, marginTop: 15,  fontFamily:'SpaceMono'
    },
    bookmarkIcon: {
        position: 'absolute',
        top: 185, right: 20, backgroundColor: colors.primaryColor,
        padding: 10,
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
        shadowRadius: 3, height: 45
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
        shadowRadius: 3, height: 45
    },
    categoryBtnText: {
        marginLeft: 10,
        color: colors.black,  fontFamily:'SpaceMono'
    },
    categoryBtnActiveText: {
        marginLeft: 10,
        color: colors.white,
          fontFamily:'SpaceMono'
    },
    headingText: {
        fontSize: 28,
        fontWeight: "700",
        color: colors.black,
        marginTop: 10,
        fontFamily:'SpaceMono'
    },
    headingTextCategory: {
        fontSize: 22,
        fontWeight: "800",
        color: colors.black,
        marginTop: 10,
          fontFamily:'SpaceMono'
    },
    searchSectionWrapper: {
        flexDirection: 'row', marginVertical: 10
    }, searchBar: {
        flexDirection: 'row', backgroundColor: colors.white, padding: 10, borderRadius: 10, flex: 1, textAlign: 'center', alignItems: 'center', alignContent: 'center'
    }, filterBtn: {
        backgroundColor: colors.primaryColor, padding: 12, borderRadius: 12, marginLeft: 20
    }
})