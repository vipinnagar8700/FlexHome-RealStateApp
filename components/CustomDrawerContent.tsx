import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import colors from '@/constants/colors';

export default function CustomDrawerContent(props: any) {
  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation();

  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} scrollEnabled={false} >
        <View style={{ padding: 20 }}>
          <Image
            style={{ height: 35 }}
            resizeMode="contain"
            source={{ uri: "https://flex-home.botble.com/storage/logo/logo.png" }}
          />
        </View>
        <View
          style={{
            margin: 20,
            flexDirection: 'column',
            gap: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            onPress={closeDrawer}
            style={{
              backgroundColor: colors.primaryColor,
              borderRadius: 10,
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Text
              style={{
                padding: 10,
                color: colors.white,
                fontSize: 18,
                fontWeight: '500',
              }}
            >
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={closeDrawer}
            style={{
              backgroundColor: colors.primaryColor,
              borderRadius: 10,
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Text
              style={{
                padding: 10,
                color: colors.white,
                fontSize: 18,
                fontWeight: '500',
              }}
            >
              Category
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={closeDrawer}
            style={{
              backgroundColor: colors.primaryColor,
              borderRadius: 10,
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Text
              style={{
                padding: 10,
                color: colors.white,
                fontSize: 18,
                fontWeight: '500',
              }}
            >
              Add Properties
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={closeDrawer}
            style={{
              backgroundColor: colors.primaryColor,
              borderRadius: 10,
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Text
              style={{
                padding: 10,
                color: colors.white,
                fontSize: 18,
                fontWeight: '500',
              }}
            >
              My Properties
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={closeDrawer}
            style={{
              backgroundColor: colors.primaryColor,
              borderRadius: 10,
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Text
              style={{
                padding: 10,
                color: colors.white,
                fontSize: 18,
                fontWeight: '500',
              }}
            >
              Favourite
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={closeDrawer}
            style={{
              backgroundColor: colors.primaryColor,
              borderRadius: 10,
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Text
              style={{
                padding: 10,
                color: colors.white,
                fontSize: 18,
                fontWeight: '500',
              }}
            >
              Our Subscription
            </Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          margin: 20,
          flexDirection: 'column',
          gap: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          onPress={closeDrawer}
          style={{
            backgroundColor: colors.primaryColor,
            borderRadius: 10,
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Text
            style={{
              padding: 10,
              color: colors.white,
              fontSize: 18,
              fontWeight: '500',
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
