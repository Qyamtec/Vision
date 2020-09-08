import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { block } from 'react-native-reanimated';
import FooterSection from '../shared/FooterSection'
import { Container, Content, Footer, FooterTab, Text, Button, Icon } from 'native-base';
import imgBG from '../assets/bg12.jpg'
import AsyncStorage from '@react-native-community/async-storage';
import I18n from '../src/I18n/index';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            patientId: "",
            User_Name: "",
            Full_Name_En: "",
            LocalFilePath: "",
            FTPFilePath: "",
            Extension: "",
            Server_Name: "",
            Appointments: [],
            changeLanguage: 'english',
            TotalInvoiceCount:"",
            TotalFinishedInvoiceCount:"",
            TotalNotFinishedInvoiceCount:""
        };
    }
    async componentDidMount() {
        const patientId = await AsyncStorage.getItem('patientId');
        const User_Name = await AsyncStorage.getItem('User_Name');
        const Full_Name_En = await AsyncStorage.getItem('Full_Name_En');
        const LocalFilePath = await AsyncStorage.getItem('LocalFilePath');
        const FTPFilePath = await AsyncStorage.getItem('FTPFilePath');
        const Extension = await AsyncStorage.getItem('Extension');
        const Server_Name = await AsyncStorage.getItem('Server_Name');
        const patient = await AsyncStorage.getItem('patient');
        this.setState({ patientId: patientId })
        this.setState({ User_Name: User_Name })
        this.setState({ Full_Name_En: Full_Name_En })
        this.setState({ LocalFilePath: LocalFilePath })
        this.setState({ FTPFilePath: FTPFilePath })
        this.setState({ Extension: Extension })
        this.setState({ Server_Name: Server_Name })
       // FTP.setup("192.168.1.100", 21) //Setup host
        // FTP.login("FTUser", "asd@123").then(
        //     (result) => {
        //         FTP.list(".").then(
        //             (result) => {
        //                 console.log(result);
        //             }
        //         );
        //     },
        //     (error) => {
        //         alert(error);
        //     }
        // )
        console.log(patientId)
        fetch('https://visionapp.qyamtec.com/api/PatientApi/PatientInvoice/' + patientId , {
            method: 'GET'
            //Request Type 
        })
            .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
                //Success 
                console.log(responseJson)
                this.setState({
                    TotalInvoiceCount: responseJson.TotalInvoiceCount,
                    TotalFinishedInvoiceCount:responseJson.TotalFinishedInvoiceCount,
                    TotalNotFinishedInvoiceCount:responseJson.TotalNotFinishedInvoiceCount,
                });
            })
            //If response is not in json then in error
            .catch((error) => {
                //Error 
                // alert(JSON.stringify(error));
                console.error(error);
            });
    }
    render() {
        const arr= this.state.Full_Name_En.split('"')
        console.log('gggg'+this.state.Full_Name_En)

        return (
            <Container>
                <ImageBackground source={imgBG} style={styles.containers}>

                    {/* <View style={styles.content}> */}
                    <View style={styles.containers}>
                        <View style={styles.header}>
                            <View style={[styles.headerContent]}>

                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flex: 1, justifyContent: "center" }}>
                                        <TouchableOpacity style={[styles.item, { flexDirection: "row" , justifyContent:"center"}]} onPress={() => this.props.navigation.navigate('Chat')}>
                                            <Image style={[styles.img, { marginRight: 50 }]} source={require('../assets/chat.png')} />
                                            <Text style={styles.homee}>{I18n.t('Virtualclinic')}</Text>
                                        </TouchableOpacity>
                                    
                                    </View>
                                </View>
                                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: "flex-end", marginVertical: 20 }} onPress={() => { this.props.navigation.navigate('Profile') }}>
                                    {/* <Text style={styles.userName}> {this.props.getpatient()}</Text><Text style={styles.HelloTxt}>مرحبا بك  </Text> */}
                                    <Text style={styles.userName}> {arr}</Text>
                                    <Image style={styles.patient} source={require('../assets/patient.png')} />

                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row' }}>

                                    <View style={styles.counterView}>
                                        <Text style={styles.homee}> {I18n.t('TotalVisits')}</Text>
                                        <Text style={styles.homee}>{this.state.TotalInvoiceCount}</Text>
                                    </View>
                                    <View style={styles.counterView}>
                                        <Text style={styles.homee}> {I18n.t('NotFinishedVisits')}</Text>
                                        <Text style={styles.homee}>{this.state.TotalNotFinishedInvoiceCount}</Text>
                                    </View>
                                    <View style={styles.counterView}>
                                        <Text style={styles.homee}>{I18n.t('FinishedVisits')}</Text>
                                        <Text style={styles.homee}>{this.state.TotalFinishedInvoiceCount}</Text>
                                    </View>
                                   
                                </View>
                            </View>
                        </View>

                        <View style={styles.profileDetail}>

                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('Services')}>
                                    <Image style={styles.img} source={require('../assets/services.png')} />
                                    <Text style={styles.homee}>{I18n.t('Services')}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('About')}>
                                    <Image style={styles.img} source={require('../assets/about.png')} />
                                    <Text style={styles.homee}>{I18n.t('WhoWeAre')}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('Doctors')}>
                                    <Image style={styles.img} source={require('../assets/doctor.png')} />
                                    <Text style={styles.homee}>{I18n.t('Doctors')}</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('Appointments')}>
                                    <Image style={styles.img} source={require('../assets/appointments.png')} />
                                    <Text style={styles.homee} >{I18n.t('myAppointments')}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('Reserve')}>
                                    <Image style={styles.img} source={require('../assets/Check.png')} />
                                    <Text style={styles.homee}>{I18n.t('Check')}</Text>
                                </TouchableOpacity>
                                {/* <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('Reserve')}>
                                    <Image style={styles.img} source={require('../assets/Check.png')} />
                                    <Text style={styles.homee}>{I18n.t('educateYourself')} </Text>
                                </TouchableOpacity> */}
                            </View>
                        </View>




                    </View>

                    <FooterSection navigation={this.props.navigation} />


                    {/* </View> */}
                </ImageBackground>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: "#6EDAF4",

    },
    containers: {
        flex: 1,
        fontFamily: "Changa-Bold"
    },
    content: {
        flex: 1,
        // height: 300
    },
    headerContent: {
        padding: 20,
        paddingBottom: 100,
        paddingTop: 0,
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
    },
    homee: {
        color: '#000',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
        fontFamily: "Changa-Bold"
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    profileDetail: {
        alignSelf: 'center',
        marginTop: 290,
        alignItems: 'center',
        // flexDirection: 'row',
        position: 'absolute',
        backgroundColor: "#fffbff",
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    detailContent: {
        margin: 10,
        alignItems: 'center',
        borderRadius: 50
    },

    item: {
        marginTop: 23,
        marginBottom: 20,
        // width:200,
        marginHorizontal: 10,
        borderWidth: 2,
        borderColor: '#CCCACD',
        borderRadius: 20,
        padding: 10,
        backgroundColor: "#FFFBFF",
        fontFamily: 'Changa-Bold',


    },
    img: {
        width: 40,
        height: 40,
        // flex:1,
        textAlign: "center"
    },
    logo: {
        width: 100,
        height: 30,
    },
    footer: {
        flexDirection: 'row', alignItems: "center",
        justifyContent: "center"
    },
    subhomeeText: {
        color: 'gray',
        fontWeight: "700",
    },
    imgWrapper: {
        justifyContent: "center",
        flex: 1,
        alignItems: "center"
    },
    ReserveBtn: {
        height: 80,
        bottom: 30,
        borderWidth: 2,
        borderColor: 'lightgrey',
        borderRadius: 50,
        backgroundColor: '#e7305b'
    },
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
    },
    counterView: {
        flex: 1
    },
    patient: {
        marginHorizontal: 20,
        width: 50,
        height: 40,
        position: "relative",
        right: 0
    },
    userName: {
        color: '#fff',
        fontFamily: 'Changa-Bold',
    },
    HelloTxt: {
        color: '#000',
        fontFamily: 'Changa-Bold',
    }
});
