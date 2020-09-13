import React, { Component } from 'react';
import { Container, Header,Body,Switch,Button, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
import I18n from '../src/I18n/index';
import { StatusBar,View, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import FooterSection from '../shared/FooterSection'

export default class Setting extends Component {
    constructor(props) {
    super(props);
    this.state = {
    changeLanguage: 'english',
  };
}

  render() {
    return (
      <Container>
                 <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#232323" translucent = {true}/>
        <Content>
          <List>
          <ListItem icon  onPress={() => {
          Alert.alert(
            'Language Selection',
            'Multi language support',
            [
              {
                text: 'English',
                onPress: () => {
                  I18n.locale = 'en-Us';
                  this.setState({changeLanguage: 'English'});
                },
              },
              {
                text: 'Arabic',
                onPress: () => {
                  I18n.locale = 'ar-Us';
                  this.setState({changeLanguage: 'arabic'});
                },
              },
              {
                text: 'Cancel',
                onPress: () => {
                  console.log('Cancel Pressed');
                },
                style: 'cancel',
              },
            ],
            {cancelable: false},
          );
        }}>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="language" type='FontAwesome' />
              </Button>
            </Left>
            <Body>
              <Text>Language</Text>
            </Body>
            <Right>
              <Text>العربية</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          </List>

          {/* <View style={styles.container}>
     <View style={{flex: 2, width: '90%'}}>
       <Text style={styles.text}>{I18n.t('greeting')}</Text>
       <Text style={styles.text}>{I18n.t('title')}</Text>
       <Text style={styles.text}>{I18n.t('Message')}</Text>
     </View>
   </View> */}
        </Content>
        <FooterSection navigation={this.props.navigation} />
      
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {backgroundColor: '#F5FCFF', flex: 1, alignItems: 'center'},
  text: {
    paddingVertical: 5,
  },
  button: {
    backgroundColor: '#FF5733',
    paddingVertical: 20,
    alignSelf: 'center',
    marginVertical: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  mainTitle: {
    flex: 1,
    justifyContent: 'center',
  },
});
