import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';
import {
  Button,
  Container,
  Content,
  Card,
  CardItem,
  Left,
  Right,
  Center,
  Body,
  Thumbnail,
  Spinner,
  Icon,
  Header,
  Text,
  Form,
  Item,
  Label,
  Input
} from 'native-base';
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
import {connect} from 'react-redux';
import { addMacAddres as addMacAddresAction } from '../login.action';

console.log();


const mapStateToProps = ({ loginReducers }) => ({ loginReducers });
const mapDispatchToProps = dispatch => bindActionCreators({ addMacAddres: addMacAddresAction }, dispatch);

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  button: {
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withState('password', 'setPassword', ''),
  withState('login', 'setLogin', ''),

  withHandlers({
    _onPressButton: (params) => () => {
        console.log(params);
        console.log(this.state);
        // const fileContents = await FileSystem.readFile('my-directory/test.txt');
        // console.log(`read from file: ${fileContents}`);
        const { navigate } = this.props.navigation;
        this.props.selectMacAddres('eeeeee');
        navigate('Home');
        console.log("Post");
    },

    onLogin: ({ navigation, login, password, addMacAddres }) => () => {
      console.log('navigation, login, password ', navigation, login, password );
      fetch(`http://192.168.0.107:3000/user`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: login,
          password: password,
        })
      }).then((response) => {
        if(response._bodyInit) {
          const jsonData = JSON.parse(response._bodyInit);
          const mac = jsonData[0].mac;
          addMacAddres(mac);
          const { navigate } = navigation;
          navigate('Home');
          // getParams
          // const { navigate } = navigation;
          // navigate('Home');
        }
      }).catch((error) => {
        console.log('navigation, login, password ', navigation, login, password );
        console.error(error);
      });
    }
  })
);

const Login = ({
  navigation,
  setLogin,
  setPassword,
  onLogin,
  _onPressButton
}) => (
  <Container>
    <Content>
      <Item style={{ alignSelf: "center", width: 300, marginTop: 10}}>
        <Input
          placeholder="Login"
          onChangeText={(login) => setLogin({login})}
        />
      </Item>
      <Item style={{ alignSelf: "center", width: 300, margin: 10}}>
        <Input
          style={{ alignSelf: "center", width: 300, margin: 2}}
          placeholder="Password"
          onChangeText={(password) => setPassword({password})}
        />
      </Item>
      <View>
        <Button style={{ alignSelf: "center", width: 300, margin: 10}} onPress={() =>_onPressButton()} block info>
          <Text>Login</Text>
        </Button>
      </View>
      <View>
        <Button style={{ alignSelf: "center", width: 300, margin: 10}} onPress={() => onLogin()} block info>
          <Text>Login</Text>
        </Button>
      </View>
    </Content>
  </Container>
);

export default enhance(Login);
