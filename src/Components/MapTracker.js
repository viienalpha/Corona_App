import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import {TextView, Block} from './MyComponents';
import axios from 'axios';
import Loading from './Loading';

const mapDarkMode = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1b1b1b',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2c2c2c',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8a8a8a',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4e4e4e',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d',
      },
    ],
  },
];

export default class MapTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataMap: [],
    };
  }
  componentDidMount() {
    this.getPatient();
  }

  getPatient = async () => {
    let promise = new Promise(async (resolve, reject) => {
      await axios({
        method: 'get',
        url: 'https://maps.vnpost.vn/apps/covid19/api/patientapi/list',
      })
        .then(function(data) {
          resolve(data);
        })
        .catch(function(err) {
          reject(err);
          console.warn('ERR');
          console.warn(err);
        });
    });
    promise.then(data => {
      this.setState({
        isLoading: false,
        dataMap: data.data.data,
      });
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Loading />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <MapView
            customMapStyle={mapDarkMode}
            style={styles.map}
            region={{
              latitude: 16.060648,
              longitude: 108.222513,
              latitudeDelta: 10,
              longitudeDelta: 20,
            }}>
            {this.state.dataMap.map((data, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: data.lat,
                  longitude: data.lng,
                }}>
                <Image source={require('./images/MapChecker.png')} />
                <Callout>
                  <Block block>
                    <Block width={240} color="#C56AE0">
                      <TextView h6 color="#fafafa">
                        {data.name}
                      </TextView>
                      <TextView h7 color="#fafafa">
                        {data.patientGroup}
                      </TextView>
                      <TextView h7 color="#fafafa">
                        {data.address}
                      </TextView>
                    </Block>
                  </Block>
                </Callout>
              </Marker>
            ))}
          </MapView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
