
import 'react-native-gesture-handler';

import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Footer, FooterTab, Text, Button, Icon, Container, Right } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import About from './About';
import Home from './Home';
import Services from './Services';
import Doctors from './Doctors';
import Questions from './Questions';
import Reserve from './Reserve';
import Login from './Login';
import Register from './Register';
import Social from './Social';
import Setting from './Setting';
import Profile from './Profile';
import Appointments from './Appointments';


// import FooterSection from './temp';
// import FooterSection from './shared/FooterSection';
import { DrawerNavigator } from "react-navigation";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Login page
function LoginScreen({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
// Register page
function RegisterScreen({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Register"  screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'التسجيل ',
          headerStyle: {
            backgroundColor: '#232323',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: "Changa-Bold",
            fontSize: 18,
            textAlign: 'center',
          },
        }}
      />
    </Stack.Navigator>
  );
}
// Home page
function HomeScreen({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          // headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: '#6EDAF4',
            shadowColor: 'transparent',
            borderBottomWidth: 0,
            shadowRadius: 0,
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: "Changa-Bold",
            textAlign: 'center',
          }
        }}
      />
    </Stack.Navigator>
  );
}
// Social page
function SocialScreen({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Social" >
      <Stack.Screen
        name="Social"
        component={Social}
        options={{
          title: '',
          // headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: '#6EDAF4',
            shadowColor: 'transparent',
            borderBottomWidth: 0,
            shadowRadius: 0,
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: "Changa-Bold",
            textAlign: 'center',
          }
        }}
      />
    </Stack.Navigator>
  );
}




const DrawerComp = ({ navigation }) => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        // backgroundColor: '#000',
        width: 240,
      }}
      drawerPosition='right'
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        labelStyle: {
          marginVertical: 5,
          flex: 1,
          justifyContent: "center",
          textAlign: 'right',
position:"relative",
right:0
        },
        itemStyle: {
          flex: 1,
          justifyContent: "center",
          textAlign: 'right',
        },
        itemContainerStyle: {
          flex: 1,
          justifyContent: "center",
          textAlign: 'right',
        },
          // activeTintColor :'#ffffff',
           inactiveTintColor :'#1999CE',
           
           iconContainerStyle: {
             opacity: 1,
             color:'red'
           }
          // activeBackgroundColor :'#1999CE',
          // inactiveBackgroundColor :'#ffffff',
        // side="right"
      }}>


      {/* <Drawer.Screen
      name="Home"
      options={{ drawerLabel: 'الرئيسية' }}
      component={HomeScreen} /> */}
      <Drawer.Screen
        name="Login"
        options={{ drawerLabel: 'تسجيل الدخول',
        drawerIcon: () => (
          <Icon type="Entypo" name="login" style={styles.iconStyle}  />

        ),
      }}
        component={LoginScreen}
         />

      <Drawer.Screen
        name="Register"
        options={{ drawerLabel: 'التسجيل' ,
        drawerIcon: () => (
          <Icon type="Entypo" name="login" style={styles.iconStyle}  />

        )}}
        component={RegisterScreen} />
         <Drawer.Screen
        name="Social"
        options={{ drawerLabel: '' ,
        drawerIcon: () => (
          // <Icon type="Entypo" name="login" style={styles.iconStyle}  />

          <View style={{flexDirection:'row'}}>
          <View style={{flex:1, justifyContent:"center"}}>
          <Image style={styles.socialIcon} source={require('../assets/twitter.png')}/>
          </View>
          <View style={{flex:1, justifyContent:"center"}}>
          <Image style={styles.socialIcon} source={require('../assets/instagram.png')}/>
          </View>
          <View style={{flex:1, justifyContent:"center"}}>
          <Image style={styles.socialIcon} source={require('../assets/snapchat.png')}/>
          </View>
          </View>
        )}}
        component={SocialScreen} />

        
      {/* <Drawer.Screen
      name="Profile"
      options={{ drawerLabel: 'بروفايل' }}
      component={ProfileScreen} />

    <Drawer.Screen
      name="Appointments"
      options={{ drawerLabel: 'مواعيدي' }}
      component={AppointmentScreen} />
    <Drawer.Screen
      name="Settings"
      options={{ drawerLabel: 'الاعدادات' }}
      component={SettingScreen} /> */}
      {/* <Drawer.Screen
      name="About"
      options={{ drawerLabel: 'من نحن' }}
      component={AboutScreen} /> */}
      {/* <Drawer.Screen
      name="Services"
      options={{ drawerLabel: 'خدماتنا' }}
      component={ServicesScreen} />
    <Drawer.Screen
      name="Doctors"
      options={{ drawerLabel: 'أطباؤنا' }}
      component={DoctorsScreen} />
    <Drawer.Screen
      name="Reserve"
      options={{ drawerLabel: 'احجز موعدك' }}
      component={ReserveScreen} />
    <Drawer.Screen
      name="Questions"
      options={{ drawerLabel: 'استفساراتنا' }}
      component={QuestionsScreen} />
    <Drawer.Screen
      name="Setting"
      options={{ drawerLabel: 'الاعدادات' }}
      component={SettingScreen} />*/}
    </Drawer.Navigator>
  )

};
const styles = StyleSheet.create({

  iconStyle:{
    color:'#000',
  },
  socialIcon:{
    width:30,
    height:30,
    marginLeft:15
  }
});
export default DrawerComp;