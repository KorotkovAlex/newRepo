import React, {Component} from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';


export default class FooterComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.activeComponent);
    const { navigate } = this.props.navigation;
    const activeComponent = this.props.activeComponent;

    if( activeComponent === 'Home') {
      return (
        <Footer>
          <FooterTab>
            <Button onPress={() => navigate('Home')} active>
              <Text>Home</Text>
            </Button>
            <Button onPress={() => navigate('Gas')}>
              <Text>Gas</Text>
            </Button>
            <Button onPress={() => navigate('Hum')}>
              <Text>Hum</Text>
            </Button>
            <Button onPress={() => navigate('Press')}>
              <Text>Press</Text>
            </Button>
            <Button onPress={() => navigate('Temp')}>
              <Text>Temp</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    };

    if (activeComponent === 'Gas') {
      return (
        <Footer>
          <FooterTab>
            <Button onPress={() => navigate('Home')}>
              <Text>Home</Text>
            </Button>
            <Button onPress={() => navigate('Gas')} active>
              <Text>Gas</Text>
            </Button>
            <Button onPress={() => navigate('Hum')}>
              <Text>Hum</Text>
            </Button>
            <Button onPress={() => navigate('Press')}>
              <Text>Press</Text>
            </Button>
            <Button onPress={() => navigate('Temp')}>
              <Text>Temp</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    };

    if (activeComponent === 'Hum') {
      return (
        <Footer>
          <FooterTab>
            <Button onPress={() => navigate('Home')}>
              <Text>Home</Text>
            </Button>
            <Button onPress={() => navigate('Gas')}>
              <Text>Gas</Text>
            </Button>
            <Button onPress={() => navigate('Hum')} active>
              <Text>Hum</Text>
            </Button>
            <Button onPress={() => navigate('Press')}>
              <Text>Press</Text>
            </Button>
            <Button onPress={() => navigate('Temp')}>
              <Text>Temp</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    };

    if (activeComponent === 'Press') {
      return (
        <Footer>
          <FooterTab>
            <Button onPress={() => navigate('Home')}>
              <Text>Home</Text>
            </Button>
            <Button onPress={() => navigate('Gas')}>
              <Text>Gas</Text>
            </Button>
            <Button onPress={() => navigate('Hum')}>
              <Text>Hum</Text>
            </Button>
            <Button onPress={() => navigate('Press')} active>
              <Text>Press</Text>
            </Button>
            <Button onPress={() => navigate('Temp')}>
              <Text>Temp</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    };

    if (activeComponent === 'Temp') {
      return (
        <Footer>
          <FooterTab>
            <Button onPress={() => navigate('Home')}>
              <Text>Home</Text>
            </Button>
            <Button onPress={() => navigate('Gas')}>
              <Text>Gas</Text>
            </Button>
            <Button onPress={() => navigate('Hum')}>
              <Text>Hum</Text>
            </Button>
            <Button onPress={() => navigate('Press')}>
              <Text>Press</Text>
            </Button>
            <Button onPress={() => navigate('Temp')} active>
              <Text>Temp</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    };


    return (
      <Footer>
        <FooterTab>
          <Button onPress={() => navigate('Home')}>
            <Text>Home</Text>
          </Button>
          <Button onPress={() => navigate('Gas')}>
            <Text>Gas</Text>
          </Button>
          <Button onPress={() => navigate('Hum')}>
            <Text>Hum</Text>
          </Button>
          <Button onPress={() => navigate('Press')}>
            <Text>Press</Text>
          </Button>
          <Button onPress={() => navigate('Temp')}>
            <Text>Tempt</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}
