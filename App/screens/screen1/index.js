import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import posed, { Transition } from 'react-native-pose';
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
  enter: {
    scaleY: 1,
    scaleX: 1,
    transition: {
      duration: 50,
    },
  },
  exit: {
    scaleY: 0.3,
    scaleX: 0.3,
    transition: {
      duration: 50,
    },
  },
});

class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }

  render() {
    const { active } = this.state;

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Transition
            enterPose="enter"
            exitPose="exit"
            preEnterPose="exit"
            enterAfterExit
            animateOnMount
          >
            {active ?
              (
                <Container
                  key="active"
                >
                  <TouchableOpacity onPress={() => {
                    this.setState({ active: !active });
                  }}
                  >
                    <Text style={styles.welcome}>Screen 1</Text>
                  </TouchableOpacity>
                </Container>
              ) : (
                <Container
                  key="inactive"
                  style={{
                    justifyContent: 'center',
                  }}
                >
                  <TouchableOpacity onPress={() => {
                    this.setState({ active: !active });
                  }}
                  >
                    <Icon style={styles.icon} name="circle" size={50} />
                  </TouchableOpacity>
                </Container>
              )
            }
          </Transition>
        </View>
      </View>
    );
  }
}

export default Screen1;
