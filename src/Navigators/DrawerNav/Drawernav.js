import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabs from '../AppNav/Appnav';
import CustomSidebarMenu from '../customDrawer';
const Drawer = createDrawerNavigator();
export default function Drawerscreen({navigation}) {
  return (
    <Drawer.Navigator
      // initialRouteName="Home"
      drawerStyle={{
        width: '68%',
      }}
      drawerContent={props => (
        <CustomSidebarMenu {...props} navigation={navigation} />
      )}>
      <Drawer.Screen name="Home" component={BottomTabs} />
    </Drawer.Navigator>
  );
}
