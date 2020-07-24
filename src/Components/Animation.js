import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
export default class Animation extends Component {

render() {
  return (
    <HeaderImageScrollView
      maxHeight={200}
      minHeight={300}
      headerImage={require('./images/nhiemcovid.png')}
    >
      <View style={{ height: 1000 }}>
        <TriggeringView onHide={() => console.log('text hidden')} >
          <Text>Scroll Me!</Text>
        </TriggeringView>
      </View>
    </HeaderImageScrollView>
  );
}
}