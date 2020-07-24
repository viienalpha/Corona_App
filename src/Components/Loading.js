import React, {Component} from 'react';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  Animated,
  ActivityIndicator,
} from 'react-native';
import LineargGradient from 'react-native-linear-gradient';
import {TextView} from './MyComponents';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;
export default class Example extends Component {
  render() {
    return( <View style={styles.lineargGradient}>
        <PacmanIndicator color='#fff'/>
    </View>);
  }
}
const styles = StyleSheet.create({
  lineargGradient: {
      backgroundColor: '#111111',
      width: W, 
    top: -100,
    height: H,
  },
});
