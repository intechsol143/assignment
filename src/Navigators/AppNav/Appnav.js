import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Homescreen from '../../screens/appscreens/Home';
import Profilescreen from '../../screens/appscreens/Profile';
import Next from '../../screens/appscreens/Next';
import New from '../../screens/appscreens/New';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
const Tab = createBottomTabNavigator();
const Home = createStackNavigator();
const Profile = createStackNavigator();

const Homestack = () => (
  <Home.Navigator>
    <Home.Screen name={'HomeScreen'} component={Homescreen} />
    <Home.Screen name={'Next'} component={Next} />
  </Home.Navigator>
);
const Profilestack = () => (
  <Profile.Navigator>
    <Profile.Screen name={'Profile'} component={Profilescreen} />
    <Profile.Screen name={'New'} component={New} />
  </Profile.Navigator>
);

const Appnav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 60,
        },
        activeTintColor: 'green',
        inactiveTintColor: 'grey',
        labelStyle: {
          fontSize: 12,
          marginLeft: 6,
          paddingVertical: 4,
          // paddingHorizontal: 12
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Homestack}
        options={({route}) => ({
          tabBarLabel: 'Home',

          // tabBarIcon: ({ focused }) => (
          //     focused ?
          //         <Image source={require('../../assets/home_icon.png')} style={{ height: 20, width: 20, resizeMode: 'contain', left: 4 }} />
          //         : <Image source={require('../../assets/home_icon_grey.png')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
          // ),
          tabBarVisible: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === 'Next') {
              return false;
            }
            return true;
          })(route),
        })}
      />

      <Tab.Screen
        name="Profile"
        component={Profilestack}
        options={({route}) => ({
          tabBarLabel: 'Profile',
          // tabBarIcon: ({ focused }) => (
          //     focused ?
          //         <Image source={require('../../assets/restaurant_icon_active.png')} style={{ height: 20, width: 20, resizeMode: 'contain', left: 4 }} />
          //         : <Image source={require('../../assets/restaurant_icon.png')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
          // ),
          tabBarVisible: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === 'New') {
              return false;
            }
            return true;
          })(route),
        })}
      />
    </Tab.Navigator>
  );
};

export default Appnav;
