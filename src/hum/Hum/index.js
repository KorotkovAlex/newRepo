/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow*/
import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  View
} from 'react-native';
import {connect} from 'react-redux';
import { Card, CardItem, Body, Container, Header, Content, List, ListItem, Text, FooterTab, Icon, Button } from 'native-base';
import FooterComponent from '../../app/components/Footer'
import { LineChart, YAxis, XAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Circle } from 'react-native-svg'
import {
  compose,
  defaultProps,
  setPropTypes,
  withState,
  withProps,
  withHandlers,
  lifecycle
} from 'recompose';

import { bindActionCreators } from 'redux';
import { addHum as addHumAction } from '../hum.action'
import LineChartComponent from '../../app/components/LineChartComponent'



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = ({ loginReducers, humReducers }) => ({ loginReducers, humReducers });

const mapDispatchToProps = dispatch => bindActionCreators({ addHum: addHumAction }, dispatch);

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withState('date', 'setDate', []),
  withState('params', 'setParams', []),

  lifecycle({
    componentWillMount() {
      console.log('this.props', this.props);
      const mac = this.props.loginReducers.loginReducers.macAddres;
      console.log('mac', mac);
      fetch(`http://192.168.0.107:3000/huminfo`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mac: mac,
          hours: 12
        })
      }).then((response) => {
        console.log('response._bodyInit temp', response._bodyInit);
        if(response._bodyInit) {
          const jsonData = JSON.parse(response._bodyInit);
          this.props.addHum(jsonData);
          this.props.setParams(jsonData.map(data => {
            return data.hum
          }));

          this.props.setDate(jsonData.map(data => {
            return data.date
          }));
          console.log('tempReducers', this.props.humReducers);
        }
      }).catch((error) => {
        // console.log('navigation, login, password ', navigation, login, password );
        console.error(error);
      });
    }
  })
);

const Hum = ({
  navigation,
  params,
  date
}) => (
  <Container>
    <View>
        <Text style = {{textAlign: 'center',color: '#FFFFFF',fontSize: 30}} >Влажность</Text>
    </View>
    <LineChartComponent date={date} params={params} />
    <FooterComponent navigation = {navigation} activeComponent = 'Hum' />
  </Container>
);

export default enhance(Hum);
