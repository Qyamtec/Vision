
import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { StyleSheet} from 'react-native';
import { Footer, FooterTab, Text, Button, Icon } from 'native-base';
import I18n from '../src/I18n/index';


// import Home from './Pages/Home';
// import Setting from './Pages/Setting';
// import Questions from './Pages/Questions';

//Defination of Navigaton bottom options
export default class FooterSection extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <Footer style={styles.footerView}>
        <FooterTab  style={styles.footer}>
          <Button  vertical onPress={() => {
            this.props.navigation.navigate('Setting');
          }}>
            <Icon type="AntDesign" name="setting" style={styles.iconStyle} />
            <Text style={styles.link}>{I18n.t('setting')}</Text>
          </Button>
          <Button vertical onPress={() => this.props.navigation.navigate('location')}>
            <Icon type="AntDesign" name="enviromento" style={styles.iconStyle}/>
            <Text style={styles.link}>{I18n.t('Location')}</Text>
          </Button>
          <Button style={styles.ReserveBtn}  onPress={() =>  this.props.navigation.navigate('Reserve')}>
            <Icon name="date" type="Fontisto" style={{ marginBottom: 5, color:'#fff' }} />
    
            <Text style={{ fontWeight: "bold",fontFamily: "Changa-Regular", fontSize: 16, flex:1, justifyContent:"center", textAlign:"center", color:'#fff' }}>احجز موعد</Text>
          </Button>
          <Button vertical onPress={() => this.props.navigation.navigate('Questions')}>
            <Icon active type="AntDesign" name="question" style={styles.iconStyle}/>
            <Text style={styles.link}>{I18n.t('Questions')}</Text>
          </Button>
          <Button vertical onPress={() =>  this.props.navigation.navigate('Home')}>
            <Icon type="AntDesign" name="home" style={styles.iconStyle}  />
            <Text style={styles.link}>{I18n.t('Home')}</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"

  },
  ReserveBtn: {
      height: 80,
      bottom: 10,
      borderWidth: 2,
      borderColor: 'lightgrey',
      borderRadius: 50,
    backgroundColor:"#FFFBFF",
    backgroundColor: '#e7305b',
    

  },
  footerView:{
    backgroundColor:"#FFFBFF",
    borderColor:'#CCCACD',   
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  footer:{
    backgroundColor:"#FFFBFF",
    borderColor:'#CCCACD',
    borderWidth:2,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    // marginVertical:50
  },
  link:{
    color:'#000',
    fontSize:9,
    fontFamily: "Changa-Regular",

  },
  iconStyle:{
    color:'#000',
  }
});