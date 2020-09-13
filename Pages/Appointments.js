import { Root } from "native-base";
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    ScrollView, ImageBackground, Dimensions,StatusBar
} from 'react-native';
import ListView from 'deprecated-react-native-listview';
import { Container, Header, Content, Card, CardItem, Alert, Text, Body, Button, Icon, Toast } from "native-base";

import AsyncStorage from '@react-native-community/async-storage';
import FooterSection from '../shared/FooterSection';
import imgBG from '../assets/bg12.jpg'
import { interpolate } from 'react-native-reanimated';
const { width: WIDTH } = Dimensions.get('window')


export default class Appointments extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            patientId: Number,
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
        this.setState({ patientId: patientId });
        console.log(tokens); // You can see 'myid'

        //GET request 
        fetch('https://visionapp.qyamtec.com/api/PatientApi/GetPatientAppointments/' + patientId + '/1', {
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
    contentdata() {
        return (
            <ScrollView>
                <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#232323" translucent = {true}/>

                {
                    this.state.Appointments.map((u, i) => {
                        return (
                            <View style={styles.container}>
                                <View style={styles.box}>
                                    <View style={styles.info}>
                                        <View key={i} style={styles.card} >
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Text style={styles.name}>قسم {u.Department_Name_Ar}</Text>
                                                    <Icon
                                                        name='location'
                                                        type="EvilIcons"
                                                        style={styles.icon}
                                                        size={10}
                                                    />
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Text style={styles.name}> {u.Start_Time}</Text>
                                                    <Icon
                                                        name='clock'
                                                        type="EvilIcons"
                                                        style={styles.icon}
                                                        size={10}
                                                        color={'rbga(255,255,255,0.7)'}
                                                    />
                                                    {/* <Text style={styles.name}>{I18n.t('Virtualclinic')}</Text> */}
                                                </View>

                                            </View>

                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                                <Text style={styles.name}> {u.Full_Name_Ar}</Text>
                                                <Text style={styles.name}> id {u.Appointment_ID}</Text>
                                                <Text style={styles.name}> الحال{u.AppointmentStatus_Name_Ar}</Text>

                                                <Icon
                                                    name='doctor'
                                                    type="Fontisto"
                                                    style={styles.icon}
                                                    size={10}
                                                />
                                            </View>
                                            <View style={styles.row}>

                                                <View style={styles.btnContainer}>
                                                    {/*  this.CanceledAppointment(u.Appointment_ID) } */}
                                                    <Button style={styles.cancel} onPress={() => { this.CanceledAppointment(u.Appointment_ID) }}>
                                                        <Text style={styles.btnTxt}>الغاء الموعد</Text>
                                                    </Button>
                                                </View>

                                                <View style={styles.btnContainer}>
                                                    {/*  this.ConfirmedAppointment(u.Appointment_ID)  */}
                                                    <Button style={styles.confirm} onPress={() => { this.ConfirmedAppointment(u.Appointment_ID) }}>
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
        )
    }
    emptyData() {
        return (
            <ScrollView>
                {
                    <View style={styles.container}>
                        <Text style={{ textAlign: 'center' }}>No Data Found</Text>
                    </View>
                }
            </ScrollView>
        )
    }
    checkContent() {
        if (this.state.Appointments.length != 0) {
            return (
                this.contentdata()
            )
        }
        else if (this.state.Appointments.length == 0) {
            return (
                this.emptyData()
            )
        }
    }

    CanceledAppointment(AppointmentID) {
        fetch('https://visionapp.qyamtec.com/api/PatientApi/CanceledAppointment/' + this.state.patientId + '/' + AppointmentID, {
            method: 'GET'
            //Request Type 
        })
            .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
                //Success 
                console.log(responseJson)
                fetch('https://visionapp.qyamtec.com/api/PatientApi/GetPatientAppointments/' + this.state.patientId + '/1', {
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
                this.checkContent(); 
                 Toast.show({
                    text: "تم الغاء المعاد",
                    buttonText: "",
                    position: "top",
                    type: "danger"
                })
                //  GetAppointments();
            })
            //If response is not in json then in error
            .catch((error) => {
                //Error 
                console.error(error);
            });
    }
    ConfirmedAppointment(AppointmentID) {
        console.log(AppointmentID)
        console.log(this.state.patientId)
        fetch('https://visionapp.qyamtec.com/api/PatientApi/ConfirmedAppointment/' + this.state.patientId + '/' + AppointmentID, {
            method: 'GET'
            //Request Type 
        })
            .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
                //Success 
                console.log(responseJson)
                fetch('https://visionapp.qyamtec.com/api/PatientApi/GetPatientAppointments/' + this.state.patientId + '/1', {
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
                this.checkContent();
                console.log('confirmed')
                Toast.show({
                    text: "تم تأكيد المعاد",
                    buttonText: "",
                    position: "top",
                    type: "success"
                })
                //  GetAppointments();
            })
            //If response is not in json then in error
            .catch((error) => {
                //Error 
                console.error(error);
            });
    }
    render() {
        return (
            <Root>

                <Container>
                    <ImageBackground source={imgBG} style={styles.backgroundContainer}>
                        <View style={styles.content}>

                            {this.checkContent()}
                            <FooterSection navigation={this.props.navigation} />
                        </View>
                    </ImageBackground>
                </Container>
            </Root>

        );

    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: '#f5fcff',
        justifyContent: "center",
        alignItems: "center",
        width: null,
        height: null,
    },
    container: {
        flex: 1,
        width: WIDTH,
        backgroundColor: 'transparent',
    },
    content: {
        flex: 1,
        height: 300,
        paddingTop: 20,
        backgroundColor: 'transparent',

    },
    icon: {
        // width: 30,
        // height: 30,
        color: '#517FFF'
    },
    image: {
        width: 100,
        height: 100
    },
    box: {
        marginBottom: 20,
        borderRadius: 25,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            height: 1,
            width: -2
        },
        elevation: 2,
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    card: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    name: {
        fontSize: 18,
        marginTop: 10,
        color: '#333',
        fontFamily: "Changa-Regular",

    },
    gray: {
        fontSize: 18,
        marginTop: 10,
        color: 'gray',
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

    btnTxt: {
        fontFamily: "Changa-Bold",
    },
    confirm: {
        borderRadius: 15,
        // backgroundColor: "#33CC66",
        backgroundColor: "#517FFF"
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
