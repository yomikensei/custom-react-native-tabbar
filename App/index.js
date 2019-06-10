import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TabBar from './components/TabBar';
import Screen1 from './screens/screen1';
import Screen2 from './screens/screen2';
import Screen3 from './screens/screen3';
import Screen4 from './screens/screen4';
import colors from './constants/colors';

const App = createBottomTabNavigator(
  {
    Screen1: {
      screen: Screen1,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="list-alt" size={18} color={tintColor} />
        ),
      }),
    },
    Screen2: {
      screen: Screen2,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="users" size={18} color={tintColor} />
        ),
      }),
    },
    Screen3: {
      screen: Screen3,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="list" size={18} color={tintColor} />
        ),
      }),
    },
    Screen4: {
      screen: Screen4,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="book" size={18} color={tintColor} />
        ),
      }),
    },
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: colors.activeText,
      inactiveTintColor: colors.inactiveText,
    },
  },
);


export default createAppContainer(App);
