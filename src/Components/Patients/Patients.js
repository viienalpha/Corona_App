/* eslint-disable no-undef */
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Accordian from './Accordion';
import {Colors} from './Colors';
import axios from 'axios';
import Loading from '../Loading';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
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
        data: data.data.data,
      });
    });
  };

  render() {if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Loading />
        </View>
      );
    } else {
    return <View style={styles.container}>{this.renderAccordians()}</View>;
    }
  }

  renderAccordians = () => {
    const items = [];
    for (let item of this.state.data) {
      items.push(
        <Accordian
          title={item.name}
          data1={item.address}
          data2={item.patientGroup}
          data3={item.note}
          data4={item.verifyDate}
        />,
      );
    }
    return items;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
});
