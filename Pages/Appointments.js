
// import React, { Component } from 'react';
// import {
//     StyleSheet,
//     View,
//     TextInput,
//     TouchableHighlight,
//     Alert,
//     Image,
//     TouchableOpacity
// } from 'react-native';
// import ListView from 'deprecated-react-native-listview';
// import { Container, Header, Content, Card, CardItem, Text, Body, Button, Icon } from "native-base";

// import AsyncStorage from '@react-native-community/async-storage';
// import FooterSection from '../shared/FooterSection';

// export default class Appointments extends Component {

//     constructor(props) {
//         super(props);
//         const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
//         this.state = {
//             Appointments: [],
//             dataSource: ds.cloneWithRows([
//                 { image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
//                 { image: "https://bootdey.com/img/Content/avatar/avatar6.png" },
//                 { image: "https://bootdey.com/img/Content/avatar/avatar2.png" },
//                 { image: "https://bootdey.com/img/Content/avatar/avatar3.png" },
//                 { image: "https://bootdey.com/img/Content/avatar/avatar4.png" },
//             ]),
//         };
//     }
//     async componentDidMount() {
//         const tokens = await AsyncStorage.getItem('patient');
//         const patientId = await AsyncStorage.getItem('patientId');
//         console.log(tokens); // You can see 'myid'

//         //GET request 
//         fetch('http://192.168.1.100:91/api/PatientApi/GetPatientAppointments/' + patientId, {
//             method: 'GET'
//             //Request Type 
//         })
//             .then((response) => response.json())
//             //If response is in json then in success
//             .then((responseJson) => {
//                 //Success 
//                 this.setState({
//                     Appointments: responseJson
//                 });

//                 console.log(responseJson);
//             })
//             //If response is not in json then in error
//             .catch((error) => {
//                 //Error 
//                 // alert(JSON.stringify(error));
//                 console.error(error);
//             });


//     }
//     render() {
//         return (
//             <Container>
//                 <View style={styles.content}>
//                     {
//                         this.state.Appointments.map((u, i) => {
//                             return (

//                                 <View style={styles.container}>
//                                     <Image style={styles.image} resizeMode="cover" source={require("../assets/img.png")} />
//                                     <Card style={styles.card} >
//                                         <CardItem bordered>
//                                             <Body>
//                                                 <View key={i} style={styles.user} >
//                                                     <View style={styles.boxContent}>
//                                                         <Text style={styles.title}>{u.AppointmentStatu}</Text>
//                                                         <Text style={styles.description}>{u.Appointment_ID}</Text>
//                                                         <View style={styles.buttons}>
//                                                             <TouchableHighlight style={[styles.button, styles.confirmed]} onPress={() => this.clickListener('login')}>
//                                                                 <Icon type="AntDesign" name="checkcircle" style={styles.icon}></Icon>
//                                                             </TouchableHighlight>

//                                                             <TouchableHighlight style={[styles.button, styles.canceled]} onPress={() => this.clickListener('login')}>
//                                                                 <Icon type="AntDesign" name="closecircle" style={styles.icon}></Icon>
//                                                             </TouchableHighlight>

//                                                         </View>
//                                                     </View>

//                                                 </View>
//                                             </Body>
//                                         </CardItem>
//                                     </Card>
//                                 </View>

//                             );
//                         })
//                     }
//                     <FooterSection navigation={this.props.navigation} />
//                 </View>
//             </Container>
//         );

//     }
// }

// const styles = StyleSheet.create({
//     image: {
//         width: 100,
//         height: 100,
//         borderRadius: 20
//     },
//     box: {
//         padding: 20,
//         marginTop: 5,
//         marginBottom: 5,
//         backgroundColor: 'white',
//         flexDirection: 'row',
//     },
//     boxContent: {
//         flex: 1,
//         flexDirection: 'column',
//         alignItems: 'flex-start',
//         marginLeft: 10,
//     },
//     title: {
//         fontSize: 18,
//         color: "#151515",
//     },
//     description: {
//         fontSize: 15,
//         color: "#646464",
//     },
//     buttons: {
//         flexDirection: 'row',
//     },
//     button: {
//         height: 35,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10,
//         width: 50,
//         marginRight: 5,
//         marginTop: 5,
//     },
//     icon: {
//         fontSize: 20,
//         color: "#fff"
//     },
//     confirmed: {
//         backgroundColor: "green",
//     },
//     canceled: {
//         backgroundColor: "red",
//     },
//     message: {
//         backgroundColor: "#228B22",
//     },
// });

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    ScrollView
} from 'react-native';
import ListView from 'deprecated-react-native-listview';
import { Container, Header, Content, Card, CardItem, Text, Body, Button, Icon } from "native-base";

import AsyncStorage from '@react-native-community/async-storage';
import FooterSection from '../shared/FooterSection';

export default class Appointments extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            Appointments: [],
            dataSource: ds.cloneWithRows([
                { image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
                { image: "https://bootdey.com/img/Content/avatar/avatar6.png" },
                { image: "https://bootdey.com/img/Content/avatar/avatar2.png" },
                { image: "https://bootdey.com/img/Content/avatar/avatar3.png" },
                { image: "https://bootdey.com/img/Content/avatar/avatar4.png" },
            ]),
        };
    }
    async componentDidMount() {
        const tokens = await AsyncStorage.getItem('patient');
        const patientId = await AsyncStorage.getItem('patientId');
        console.log(tokens); // You can see 'myid'

        //GET request 
        fetch('http://192.168.1.100:91/api/PatientApi/GetPatientAppointments/' + patientId + '/1', {
            method: 'GET'
            //Request Type 
        })
            .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
                //Success 
                this.setState({
                    Appointments: responseJson
                });

                console.log(responseJson);
            })
            //If response is not in json then in error
            .catch((error) => {
                //Error 
                // alert(JSON.stringify(error));
                console.error(error);
            });


    }
    render() {
        return (
            <Container>
                <View style={styles.content}>
                    <ScrollView>
                        {
                            this.state.Appointments.map((u, i) => {
                                return (

                                    <View style={styles.container}>
                                        <View style={styles.box}>
                                            {/* <Image style={styles.image} source={{uri:user.image}} /> */}
                                            <View style={styles.info}>
                                                <View key={i} style={styles.user} >

                                                    <Text style={styles.name}> لديك موعد الساعة {u.Start_Time}   </Text>
                                                    <Text style={styles.name}> فى قسم  {u.Department_Name_Ar} </Text>
                                                    <Text style={styles.name}> طبيب {u.Full_Name_Ar} </Text>
                                                    <Text style={styles.name}>{u.AppointmentStatus_Name_Ar}</Text>
                                                    <View style={styles.row}>

                                                        <View style={styles.btnContainer}>
                                                            <Button style={styles.cancel} onPress={() => { console.log('الغاء الموعد') }}>
                                                                <Text style={styles.btnTxt}>الغاء الموعد</Text>
                                                            </Button>
                                                        </View>

                                                        <View style={styles.btnContainer}>
                                                            <Button style={styles.confirm} onPress={() => { console.log('تأكيد الموعد') }}>
                                                                <Text style={styles.btnTxt}>تأكيد الموعد</Text>
                                                            </Button>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })
                        }

                    </ScrollView>
                    <FooterSection navigation={this.props.navigation} />
                </View>
            </Container>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
    content: {
        flex: 1,
        height: 300
    },
    icon: {
        width: 30,
        height: 30,
    },
    image: {
        width: 100,
        height: 100
    },
    box: {
        marginBottom: 20,
        borderRadius:25,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            height: 1,
            width: -2
        },
        elevation: 2
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        marginTop: 10,
        color: '#333',
        fontFamily: "Changa-Regular",

    },
    row: {
        flexDirection: 'row',
        justifyContent: "center",
        // marginHorizontal: 40,
        marginTop: 10
    },
    btnContainer: {
        // flex: 1,
        justifyContent: "center",
        marginVertical: 20,
        marginHorizontal: 20,
        alignItems: 'center'
    },

    btnTxt:{
        fontFamily: "Changa-Bold",
    },
    confirm: {
        borderRadius: 15,
        backgroundColor: "green"
    },
    cancel: {
        borderRadius: 20,
        backgroundColor: "red",
        
    },
    iconFonts: {
        color: 'gray',
    },
    red: {
        color: '#FF4500',
    }
});
