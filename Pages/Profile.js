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

export default class Profile extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            patientId:"",
            User_Name:"",
            Full_Name_En:"",
            LocalFilePath:"",
            FTPFilePath:"",
            Extension:"",
            Server_Name:"",
            Appointments:[],
          
        };
    }
  async   componentDidMount() {
        const patientId = await AsyncStorage.getItem('patientId');
        const User_Name = await AsyncStorage.getItem('User_Name');
        const Full_Name_En = await AsyncStorage.getItem('Full_Name_En');
        const LocalFilePath = await AsyncStorage.getItem('LocalFilePath');
        const FTPFilePath = await AsyncStorage.getItem('FTPFilePath');
        const Extension = await AsyncStorage.getItem('Extension');
        const Server_Name = await AsyncStorage.getItem('Server_Name');
        const patient = await AsyncStorage.getItem('patient');
       this.setState({patientId:patientId})
       this.setState({User_Name:User_Name})
       this.setState({Full_Name_En:Full_Name_En})
       this.setState({LocalFilePath:LocalFilePath})
       this.setState({FTPFilePath:FTPFilePath})
       this.setState({Extension:Extension})
       this.setState({Server_Name:Server_Name})
     FTP.setup("192.168.1.100", 21) //Setup host
     FTP.login("FTUser", "asd@123").then(
     (result) => {
        FTP.list(".").then(
          (result) => {
            console.log(result);
        }
      );
    },
   (error) => {
    alert(error);
   }
  )
    }
    render() {
    const arr= this.state.User_Name.split('"')
    // const path= this.state.FTPFilePath.split('"')
    const ext= this.state.Extension.split('"')
    const path=this.state.FTPFilePath.split('"')[1]+this.state.Server_Name.split('"')[1]+this.state.Extension.split('"')[1]
// console.log('ftp://192.168.1.100/username:password@ftp.example.com'+path+'');

        return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri:"https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image.png"}}/>
          {/* <Image style={styles.image} source={{uri:user.image}} /> */}
          {/* <Image style={styles.avatar} source={{uri:"ftp://192.168.1.100/Uploads/Patient/a84d9bb1-243b-47fd-82de-3896b20a3b5d/21ff9a9b-1ec9-46f9-a74b-8eda1f4ac227.png"}}/> */}
          <View style={styles.body}>
            <View style={styles.bodyContent}>
    <Text style={styles.name}>{arr[0]} {arr[1]}</Text>
              <Text style={styles.info}> </Text>
              <Text>

              </Text>
              <TouchableOpacity style={styles.buttonContainer} onPress={()=>{this.props.navigation.navigate('Appointments')}}>
                <Text style={styles.btnTxtx}>مواعيدي</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer} onPress={()=>{this.props.navigation.navigate('Profile')}}>
                <Text style={styles.btnTxtx}> ملفى الطبي</Text> 
              </TouchableOpacity>
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
 


