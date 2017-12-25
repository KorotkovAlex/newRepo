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
import { Card, CardItem, Body, Container, Header, Content, List, ListItem, Text, FooterTab, Icon, Button } from 'native-base';
import {
  compose,
  defaultProps,
  setPropTypes,
  withState,
  withProps,
  withHandlers,
  lifecycle
} from 'recompose';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import FooterComponent from '../../app/components/Footer'
import { addParamsInHome as addParamsInHomeAction } from '../home.action'

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

const mapStateToProps = ({ homeReducers, loginReducers }) => ({ homeReducers, loginReducers });

const mapDispatchToProps = dispatch => bindActionCreators({ addParamsInHome: addParamsInHomeAction }, dispatch);

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  
  lifecycle({
    componentWillMount() {
      console.log('mac', mac);
      console.log('this.props', this.props);
      const mac = this.props.loginReducers.loginReducers.macAddres;
      fetch(`http://192.168.0.107:3000/allinfo`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mac: mac
        })
      }).then((response) => {
        console.log(response._bodyInit);
        if(response._bodyInit) {
          const jsonData = JSON.parse(response._bodyInit);
          const lastIndex = jsonData.length - 1;
          console.log(jsonData[lastIndex]);
          this.props.addParamsInHome(jsonData[lastIndex]);
        }
      }).catch((error) => {
        // console.log('navigation, login, password ', navigation, login, password );
        console.error(error);
      });
    }
  })
);

const Home = ({
  navigation,
  loginReducers,
  homeReducers
}) => (
  <Container>
    <View style={{flex: 1}}>
      <View style={{flex: 3, backgroundColor: 'powderblue'}} >
      <Text style = {{fontSize: 30}}>       </Text>
        <Text style = {{textAlign: 'center',color: '#FFFFFF',fontSize: 30}} >Температура воздуха</Text>
        <Text/>
        <Text style = {{textAlign: 'center',color: '#FFFFFF',fontSize: 60}} >{homeReducers.homeReducers.temp}°C</Text>
      </View>
      <View style={{flex: 3, backgroundColor: 'skyblue'}}>
      <Text style = {{fontSize: 30}}>       </Text>
       <Text style = {{textAlign: 'center',color: '#FFFFFF',fontSize: 30}}>Влажность воздуха</Text>
        <Text/>
        <Text style = {{textAlign: 'center',color: '#FFFFFF',fontSize: 60}} >{homeReducers.homeReducers.hum}%</Text>
      </View>
      <View style={{flex: 3, backgroundColor: 'steelblue'}}>
      <Text style = {{fontSize: 30}}>       </Text>
        <Text style = {{textAlign: 'center',color: '#FFFFFF',fontSize: 30}}>Давление</Text>
        <Text/>
        <Text style = {{textAlign: 'center',color: '#FFFFFF',fontSize: 60}}>{homeReducers.homeReducers.press}</Text>
      </View>
    </View>
    <FooterComponent navigation = {navigation} activeComponent = 'Home' />
  </Container>
);

export default enhance(Home);
