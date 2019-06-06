import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import posed from 'react-native-pose';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    fontFamily: 'Raleway-Regular',
    flexDirection: 'row',
  },
  icon: {
    alignSelf: 'center',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Raleway-Regular',
    paddingHorizontal: 20,
  },
  instructions: {
    fontSize: 30,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontFamily: 'Raleway-Regular',
  },
});

const Container = posed.View({
  active: {
    opacity: 1,
    transition: { duration: 1000 },
  },
  inactive: {
    opacity: 0.1,
    transition: { duration: 1000 },
  },
});

class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDiv1Active: true,
      isDiv2Active: false,
    };
  }

  render() {
    const { isDiv1Active, isDiv2Active } = this.state;
    const div1Pose = isDiv1Active ? 'active' : 'inactive';
    const div2Pose = isDiv2Active ? 'active' : 'inactive';
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Container
            initialPose={div1Pose}
            pose={div1Pose}
          >
            <TouchableOpacity onPress={() => {
              this.setState({ isDiv1Active: true, isDiv2Active: false });
              this.setState({ isDiv1Active: true, isDiv2Active: false });
              this.setState({ isDiv1Active: true, isDiv2Active: false });
              this.setState({ isDiv1Active: true, isDiv2Active: false });
            }}
            >
              <Text style={styles.welcome}>Screen 1</Text>
              <Icon style={styles.icon} name="circle" size={20} solid />
            </TouchableOpacity>
          </Container>
          <Container
            initialPose={div2Pose}
            pose={div2Pose}
            style={{
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity onPress={() => {
              this.setState({ isDiv1Active: false, isDiv2Active: true });
            }}
            >
              <Icon style={styles.icon} name="circle" size={50} />
            </TouchableOpacity>
          </Container>
        </View>

      </View>
    );
  }
}

export default Screen1;
