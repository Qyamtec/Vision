
// import * as React from 'react';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import { StyleSheet,View, TouchableOpacity, Image } from 'react-native';
// import {  Icon } from 'native-base';

// import Home from './Home';
// import Login from './Login';
// import Register from './Register';


// import About from './About';
// import Services from './Services';
// import Doctors from './Doctors';
// import Questions from './Questions';
// import Reserve from './Reserve';
// import Setting from './Setting';
// import DrawerNav from './DrawerNav';

// const Drawer = createDrawerNavigator();

// function MyDrawer() {

//   return (
// <NavigationContainer>
//     <Drawer.Navigator
//     >
//       <Drawer.Screen name="Login" component={Login} />
//       <Drawer.Screen name="Register" component={Register} />
//     </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
// const AppNavigator = createStackNavigator(
//     {
//         DrawerNav: {
//             screen: DrawerNav,
//             navigationOptions: {
//                 title: 'العيادة الافتراضية',
//                 // headerRight: () => 
//                 // <Icon  name="menu"
//                 // onPress={() => navigation.goBack()}
//                 // />,

//                 headerStyle: {
//                   backgroundColor: '#232323',
//                 },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                   fontFamily: "Changa-Bold",
//                   textAlign: 'center',
//                 },
//             }
//         },
//         Home: {
//           screen: Home,
//           navigationOptions: {
//               title: 'العيادة الافتراضية',
//               // headerRight: () => 
//               // <Icon  name="menu"
//               // onPress={() => this.props.navigation.goBack()}
//               // />,
//               headerStyle: {
//                 backgroundColor: '#232323',
//               },
//               headerTintColor: '#fff',
//               headerTitleStyle: {
//                 fontFamily: "Changa-Bold",
//                 textAlign: 'center',
//               },
//           }
//       },
//         About: {
//             screen: About,
//             navigationOptions: {
//                 title: 'من نحن ',
//                 // headerRight: () => {this.MyDrawer()} ,

//                 headerStyle: {
//                   backgroundColor: '#232323',
//                 },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                   fontFamily: "Changa-Bold",
//                   textAlign: 'center',
//                 },
//             }
//         },
//         Services: {
//             screen: Services,
//             navigationOptions: {
//                 title: 'الخدمات',
//                 headerStyle: {
//                   backgroundColor: '#232323',
//                 },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                   fontFamily: "Changa-Bold",
//                   textAlign: 'center',
//                 },
//             }
//         },
//         Doctors: {
//             screen: Doctors,
//             navigationOptions: {
//                 title: ' أطباؤنا',
//                 headerStyle: {
//                   backgroundColor: '#232323',
//                 },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                   fontFamily: "Changa-Bold",
//                   textAlign: 'center',
//                 },
//             }
//         },
//         Questions: {
//             screen: Questions,
//             navigationOptions: {
//                 title: ' الاستفسارات',
//                 headerStyle: {
//                   backgroundColor: '#232323',
//                 },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                   fontFamily: "Changa-Bold",
//                   textAlign: 'center',
//                 },
//             }
//         },
//         Reserve: {
//             screen: Reserve,
//             navigationOptions: {
//                 title: 'احجز موعدك',
//                 headerStyle: {
//                   backgroundColor: '#232323',
//                 },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                   fontFamily: "Changa-Bold",
//                   textAlign: 'center',
//                 },
//             }
//         },
//         Setting: {
//             screen: Setting,
//             navigationOptions: {
//                 title: ' الاعدادات',
//                 headerStyle: {
//                   backgroundColor: '#232323',
//                 },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                   fontFamily: "Changa-Bold",
//                   textAlign: 'center',
//                 },
//             }
//         },
//         Login: {
//             screen: Login,
//             navigationOptions: {
//                 title: 'تسجيل الدخول',
//                 headerStyle: {
//                   backgroundColor: '#232323',
//                 },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                   fontFamily: "Changa-Bold",
//                   textAlign: 'center',
//                 },
//             }
//         },
//         Register: {
//             screen: Register,
//             navigationOptions: {
//                 title: 'التسجيل',
//                 headerStyle: {
//                   backgroundColor: '#232323',
//                 },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                   fontFamily: "Changa-Bold",
//                   textAlign: 'center',
//                 },
//             }
//         },

//     },
//     {
//         initialRouteName: 'DrawerNav',
//     },


// );

// export default createAppContainer(AppNavigator);


import 'react-native-gesture-handler';

import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Footer, FooterTab, Text, Button, Icon, Container } from 'native-base';

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
import Setting from './Setting';
import Profile from './Profile';
import Appointments from './Appointments';
import location from './location';
import Chat from './Chat';
import PatientHistory from './PatientHistory';

import DrawerComp from './DrawerComp'

// import FooterSection from './temp';
// import FooterSection from './shared/FooterSection';
import { DrawerNavigator } from "react-navigation";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png' }}
          style={{ width: 25, height: 25, marginRight: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
}
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

// Profile page
function ProfileScreen({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerRight: () => "",
        headerStyle: {
          backgroundColor: '#232323',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: "Changa-Bold",
          textAlign: 'center',
          fontSize: 18
        },
        headerLeft: () =>
          <Icon
            name='arrowleft'
            type="AntDesign"
            style={styles.arrow}
            onPress={() => navigation.goBack()} />
        // <Text>{this.props.navigation.state.params.hh}</Text>

      }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: ' الصفحة الشخصية', //Set Header Title

        }} />

    </Stack.Navigator>
  );
}
// Appointmnets page
function AppointmentScreen({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Appointmnets"
      screenOptions={{
        headerRight: () => "",
        headerStyle: {
          backgroundColor: '#232323',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: "Changa-Bold",
          textAlign: 'center',
          fontSize: 18
        },
        headerLeft: () =>
          <Icon
            name='arrowleft'
            type="AntDesign"
            style={styles.arrow}
            onPress={() => navigation.goBack()} />

      }}>
      <Stack.Screen
        name="Appointmnets"
        component={Appointments}
        options={{
          title: ' مواعيدي', //Set Header Title

        }} />

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
          headerRight: () => "",
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
          //   ,
          //   headerRight: () =>
          //     <TouchableOpacity style={{ flexDirection: "row", flex: 1, alignItems: "center" }} onPress={() => navigation.navigate('Home')}>
          //       {/* <Text style={styles.userName}> {this.props.getpatient()}</Text><Text style={styles.HelloTxt}>مرحبا بك  </Text> */}
          //       <Text style={styles.userName}> سليمان الزهيري</Text><Text style={styles.HelloTxt}>مرحبا بك  </Text>
          //       <Image style={styles.patient} source={require('../assets/patient.png')} />

          //     </TouchableOpacity>
        }
        }
      />
    </Stack.Navigator>
  );
}

//Who we are
function AboutScreen({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="About"
      screenOptions={{
        headerRight: () => "",
        headerStyle: {
          backgroundColor: '#232323',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: "Changa-Bold",
          textAlign: 'center',
          fontSize: 18
        },
        headerLeft: () =>
          <Icon
            name='arrowleft'
            type="AntDesign"
            style={styles.arrow}
            onPress={() => navigation.goBack()} />

      }}>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: 'من نحن', //Set Header Title
        }} />

    </Stack.Navigator>
  );
}
//Chat
function ChatScreen({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Chat"
      screenOptions={{
        headerRight: () => "",
        headerStyle: {
          backgroundColor: '#232323',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: "Changa-Bold",
          textAlign: 'center',
          fontSize: 18
        },
        headerLeft: () =>
          <Icon
            name='arrowleft'
            type="AntDesign"
            style={styles.arrow}
            onPress={() => navigation.goBack()} />

      }}>
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          title: 'العيادة الافتراضية', //Set Header Title

        }} />

    </Stack.Navigator>
  );
}
//location
function locationScreen({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="location"
      screenOptions={{
        headerRight: () => "",
        headerStyle: {
          backgroundColor: '#232323',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: "Changa-Bold",
          textAlign: 'center',
          fontSize: 18
        },
        headerLeft: () =>
          <Icon
            name='arrowleft'
            type="AntDesign"
            style={styles.arrow}
            onPress={() => navigation.goBack()} />

      }}>
      <Stack.Screen
        name="location"
        component={location}
        options={{
          title: ' موقعنا', //Set Header Title

        }} />

    </Stack.Navigator>
  );
}
//Services
function ServicesScreen({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Services"
      screenOptions={{
        headerRight: () => "",
        headerStyle: {
          backgroundColor: '#232323',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: "Changa-Bold",
          textAlign: 'center',
          fontSize: 18
        },
        headerLeft: () =>
          <Icon
            name='arrowleft'
            type="AntDesign"
            style={styles.arrow}
            onPress={() => navigation.goBack()} />
      }}>
      <Stack.Screen
        name="Services"
        component={Services}
        options={{
          title: 'خدماتنا', //Set Header Title

        }} />

    </Stack.Navigator>
  );
}
//Doctors
function DoctorsScreen({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Doctors"
      screenOptions={{
        headerRight: () => "",
        headerStyle: {
          backgroundColor: '#232323',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: "Changa-Bold",
          textAlign: 'center',
          fontSize: 18
        },
        headerLeft: () =>
          <Icon
            name='arrowleft'
            type="AntDesign"
            style={styles.arrow}
            onPress={() => navigation.goBack()} />
      }}>
      <Stack.Screen
        name="Doctors"
        component={Doctors}
        options={{
          title: 'أطباؤنا', //Set Header Title

        }} />

    </Stack.Navigator>
  );
}
//Reserve
function ReserveScreen({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Reserve"
      screenOptions={{
        headerRight: () => "",
        headerStyle: {
          backgroundColor: '#232323',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: "Changa-Bold",
          textAlign: 'center',
          fontSize: 18
        },
        headerLeft: () =>
          <Icon
            name='arrowleft'
            type="AntDesign"
            style={styles.arrow}
            onPress={() => navigation.goBack()} />
      }}>
      <Stack.Screen
        name="Reserve"
        component={Reserve}
        options={{
          title: 'احجز موعدك', //Set Header Title

        }} />

    </Stack.Navigator>
  );
}

//footer tabs
//Setting
function SettingScreen({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Setting"
      screenOptions={{
        headerRight: () => "",
        headerStyle: {
          backgroundColor: '#232323',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: "Changa-Bold",
          textAlign: 'center',
          fontSize: 18
        },
        headerLeft: () =>
          <Icon
            name='arrowleft'
            type="AntDesign"
            style={styles.arrow}
            onPress={() => navigation.goBack()} />
      }}>
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          title: 'الاعدادات', //Set Header Title

        }} />

    </Stack.Navigator>
  );
}
//Questions
function QuestionsScreen({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Questions"
      screenOptions={{
        headerRight: () => "",
        headerStyle: {
          backgroundColor: '#232323',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: "Changa-Bold",
          textAlign: 'center',
          fontSize: 18
        },
        headerLeft: () =>
          <Icon
            name='arrowleft'
            type="AntDesign"
            style={styles.arrow}
            onPress={() => navigation.goBack()} />
      }}>
      <Stack.Screen
        name="Questions"
        component={Questions}
        options={{
          title: 'الاستفسارات', //Set Header Title

        }} />
    </Stack.Navigator>
  );
}

function PatientHistoryScreen({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="PatientHistory"
      screenOptions={{
        headerRight: () => "",
        headerStyle: {
          backgroundColor: '#232323',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: "Changa-Bold",
          textAlign: 'center',
          fontSize: 18
        },
        headerLeft: () =>
          <Icon
            name='arrowleft'
            type="AntDesign"
            style={styles.arrow}
            onPress={() => navigation.goBack()} />
      }}>
      <Stack.Screen
        name="PatientHistory"
        component={PatientHistory}
        options={{
          title: 'التاريخ الطبى ', //Set Header Title

        }} />

    </Stack.Navigator>
  );
}

const AppNavigator = () => {


  return (
    <Container>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Menu" component={DrawerComp} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="Services" component={ServicesScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="Appointments" component={AppointmentScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="Doctors" component={DoctorsScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="Reserve" component={ReserveScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="location" component={locationScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="PatientHistory" component={PatientHistoryScreen} options={{ headerShown: false }}></Stack.Screen>
          
        </Stack.Navigator>

      </NavigationContainer>


    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  arrow: {
    marginRight: 6,
    color: '#fff'
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginRight: 10
  },
  patient: {
    marginHorizontal: 20,
    width: 50,
    height: 40
  },
  userName: {
    color: '#fff'
  },
  HelloTxt: {
    color: '#000'
  }
})
export default AppNavigator;
