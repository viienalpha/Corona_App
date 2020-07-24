/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  ActivityIndicator,
  Animated,
} from 'react-native';
import {Block, TextView, Button} from './MyComponents';
import LineargGradient from 'react-native-linear-gradient';
import AnimateNumber from 'react-native-countup';
import Charts from './Charts';
import axios from 'axios';
import Patient from './Patients/Patients';
import { between } from 'react-native-redash';

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};
const W = Dimensions.get('window').width;
export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <Block block>
          <LineargGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0.3}}
            locations={[0, 0.3, 0.6]}
            style={styles.lineargGradient}
            colors={['#6C7FDF', '#C56AE0']}>
            <Image source={require('./images/map.png')} />
          </LineargGradient>
          <FadeInView>
            <Image
              style={styles.img}
              source={require('./images/nhiemcovid.png')}
            />
          </FadeInView>
          <Block>
            <Block
              height={'100%'}
              color="rgba(250,250,250,0.5)"
              style={styles.boxCase}>
              <Block padding={20}>
                <Block justifyContent="space-between" direction="row">
                  <Block>
                    <TextView h5 justifyContent={between}>
                      Số trường hợp mắc COVID-19 được phát hiện tại cộng
                      đồng:
                    </TextView>
                  </Block>
                </Block>
              </Block>
              <View>
                <ScrollView>
                  <Block style={styles.patient}>
                    <Patient />
                  </Block>
                </ScrollView>
              </View>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    marginHorizontal: 0,
  },
  lineargGradient: {
    position: 'absolute',
    height: 80000,
  },
  img: {
    top: 20,
    left: -60,
    width: '100%',
    height: '15%',
  },
  stayhome: {
    flex: 1,
    top: 110,
    left: 155,
  },
  boxCase: {
    width: W,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    top: -2060,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 50,
    // },
    // shadowOpacity: 0.4,
    // shadowRadius: 4,

    // elevation: 10,
  },
  patient: {
    top: -80,
  },
});
