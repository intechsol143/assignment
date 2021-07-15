// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = ({props, navigation}) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.headerView}>
        <Text style={{fontSize: 16, top: 6, fontFamily: 'Poppins-Regular'}}>
          Hamid Shehzad
        </Text>
        <Text
          style={{
            fontSize: 12,
            paddingVertical: 10,
            color: '#fff',
            fontFamily: 'Poppins-Regular',
          }}>
          hamid@gmail.com
        </Text>
      </View>

      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
        <DrawerItem
          label="Home"
          onPress={() => navigation.navigate('HomeScreen')}
        />
        <DrawerItem
          label="Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    // resizeMode: 'center',
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    // alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  DrawerIconstyle: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Iconparrent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'space-between',
    width: '60%',
  },
  instagrameView: {
    height: 40,
    width: 40,
    borderRadius: 30,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerView: {
    paddingTop: 32,
    backgroundColor: 'grey',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;
