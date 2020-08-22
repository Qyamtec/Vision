import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Alert,
    Image,
    TouchableOpacity
} from 'react-native';
import ListView from 'deprecated-react-native-listview';
import { Icon } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import FTP from 'react-native-ftp';

export default class Social extends Component {

    render() {

        return (
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:1}}>
          <Image style={styles.avatar} source={require('../assets/twitter.png')}/>
          </View>
          <View style={{flex:1}}>
          <Image style={styles.avatar} source={require('../assets/instagram.png')}/>
          </View>
          <View style={{flex:1}}>
          <Image style={styles.avatar} source={require('../assets/snapchat.png')}/>
          </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#0195B6",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#000",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#0195B6",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#0195B6",
  },
  btnTxtx:{
    color:'#fff'
  }
});
 


