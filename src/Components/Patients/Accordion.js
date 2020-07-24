import React, {Component} from 'react';
import UserAvatar from 'react-native-user-avatar';

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import {Colors} from './Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextView} from '../MyComponents';

export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          ref={this.accordian}
          style={styles.row}
          onPress={() => this.toggleExpand()}>
          <UserAvatar size={40} name={this.props.title} />
          <Text style={[styles.title, styles.font]}>
            {this.props.title}
          </Text>
          <Icon
            name={
              this.state.expanded
                ? 'keyboard-arrow-up'
                : 'keyboard-arrow-down'
            }
            size={30}
            color={Colors.DARKGRAY}
          />
        </TouchableOpacity>
        <View style={styles.parentHr} />
        {this.state.expanded && (
          <View style={styles.child}>
            <View style={styles.detail}>
              <TextView bold>Địa chỉ: </TextView>
              <TextView>{this.props.data1}</TextView>
            </View>
            <View style={styles.detail}>
              <TextView bold>Nhóm bệnh nhân: </TextView>
              <TextView>{this.props.data2}</TextView>
            </View>
            <View style={styles.detail}>
              <TextView bold>Ghi chú: </TextView>
              <TextView>{this.props.data3}</TextView>
            </View>
            <View style={styles.detail}>
              <TextView bold>Ngày nhiễm bệnh: </TextView>
              <TextView>{this.props.data4}</TextView>
            </View>
          </View>
        )}
      </View>
    );
  }

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: !this.state.expanded});
  };
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    left: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    backgroundColor: '#00000030',
  },
  parentHr: {
    height: 1,
    color: Colors.WHITE,
    width: '100%',
  },
  child: {
    backgroundColor: '#fafafa06',
    padding: 16,
  },
  detail: {
    left: -10,
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
