import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  tabView: {
    backgroundColor: colors.background,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.background,
    width: '100%',
    marginVertical: 15,
  },
  tabBarItem: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    height: 60,
    elevation: 40,
  },
  tabBarItemText: {
    fontFamily: 'Raleway-SemiBold',
    marginBottom: 5,
  },
});

class TabBar extends Component {
  navigationStateIndex = null;

  constructor(props) {
    super(props);
    this.renderTabBarButton = this.renderTabBarButton.bind(this);
  }

  renderTabBarButton(route, idx) {
    const {
      activeTintColor,
      inactiveTintColor,
      navigation,
      getLabelText,
      renderIcon,
    } = this.props;
    const { state: { index: currentIndex, routes } } = navigation;
    const focused = currentIndex === idx;
    const color = focused ? activeTintColor : inactiveTintColor;
    const label = getLabelText({ route, focused, index: idx });
    const { routeName } = route;
    const isStartTab = idx === 0;
    const isEndTab = idx === routes.length - 1;
    return (
      <TouchableOpacity
        key={idx}
        onPress={() => {
          navigation.navigate(routeName);
        }}
        style={{
          ...styles.tabBarItem,
          borderBottomLeftRadius: isStartTab ? 5 : 0,
          borderTopLeftRadius: isStartTab ? 5 : 0,
          borderBottomRightRadius: isEndTab ? 5 : 0,
          borderTopRightRadius: isEndTab ? 5 : 0,
        }}
      >
        {!focused ? renderIcon({ route, tintColor: color, focused: currentIndex === idx, index: idx }) : (
          [
            <Text key={0} style={{ ...styles.tabBarItemText, color }}>
              {label}
            </Text>,
            <Icon key={1} name="circle" size={5} solid color={color} />]
        )}

      </TouchableOpacity>
    );
  }

  render() {
    const { navigation, style } = this.props;
    const tabBarButtons = navigation.state.routes.map(this.renderTabBarButton);
    return (
      <View style={styles.tabView}>
        <View style={{ ...styles.tabBar, ...style }}>
          {tabBarButtons}
        </View>
      </View>

    );
  }
}

export default TabBar;
