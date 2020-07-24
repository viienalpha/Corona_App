import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import {TextView} from './MyComponents';

const propTypes = {
  item: PropTypes.object,
};

class ItemPatient extends Component {
  state = {
    isSelected: false,
  };
  render() {
    console.warn("betran");
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback>
          <View style={styles.titleContainer}>
            <TextView h2>Be Tran</TextView>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
ItemPatient.propTypes = propTypes;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
export {ItemPatient};
