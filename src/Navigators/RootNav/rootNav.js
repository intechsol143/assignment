import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/authscrrens/Login';
import Register from '../../screens/authscrrens/Register';
import Landing from '../../screens/authscrrens/Landinscreen';
import DrawerNav from '../DrawerNav/Drawernav';
const Stack = createStackNavigator();

function rootNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitleAlign: 'center',
            headerLeft: null,
            headerStyle: {
              elevation: 0,
            },
          }}
        />
        <Stack.Screen name="Reg" component={Register} />
        <Stack.Screen
          name="Drawer"
          component={DrawerNav}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default rootNav;
