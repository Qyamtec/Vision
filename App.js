import 'react-native-gesture-handler';

import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Footer, FooterTab, Text, Button, Icon, Container } from 'native-base';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import AppNavigator from './Pages/AppNavigator';
import Splash from './Pages/splash';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      changeLanguage: 'english',
    };
  }

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }
  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }
  render() {
    if (this.state.isLoading) {
      return <Splash />;
    }
    return (
      <Container>
        <AppNavigator />
      </Container>

    )
  }
}

  // export default createAppContainer(AppNavigator);

