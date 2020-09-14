
import { Root } from "native-base";
import AsyncStorage from '@react-native-community/async-storage';

import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, ImageBackground, TextInput, ScrollView, Image, Dimensions, Text, TouchableOpacity, Alert } from 'react-native';
import imgBG from '../assets/bg12.jpg'
import logo from '../assets/Vision.jpg'
import SaudiaLogo from '../assets/Saudia.png'
import AmericaLogo from '../assets/america.png'
import { Icon, Button, Toast, alert } from 'native-base';
import I18n from '../src/I18n/index';

// import startMainTabs from "../Pages/Home";
const { width: WIDTH } = Dimensions.get('window')



// const Login = ({ navigation }) => {
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showPassProp: true,
            userName: '',
            password: '',
            params: '',
        }
    }
    onPress1 = () => {
        if (this.state.showPassProp === true) {
            this.setState({ showPassProp: false })
        } else {
            this.setState({ showPassProp: true })
        }
    }
    // yield put({ type: AUTHENTICATION_RESULT, result }); // save user in store - temporary
    // yield put(NavigationActions.navigate({ routeName: 'drawerStack' })); //and then navigate to home

    setItem = async (name, data) => {
        try {
            await AsyncStorage.setItem(name, JSON.stringify(data));
            console.log('data stored');
            //console.log( await AsyncStorage.getItem('patient'));
        } catch (error) {
            // Error saving data
            console.log('AsyncStorage save error: ' + error.message);
        }
    };
    async getpatient() {
        console.log(await AsyncStorage.getItem('patient'));

        return await AsyncStorage.getItem('patient');
        //    return patient.Patient_ID;
    }
    BtnLoginfun() {
        //  console.log(this.state.userName)
        fetch('http://192.168.1.100:91/api/PatientApi/CheckUserIfExist/' + this.state.userName + '/' + this.state.password, { method: 'GET' })
            //   fetch('https://vision.giize.com:90/api/PatientApi/CheckUserIfExist/' + this.state.userName + '/' + this.state.password, { method: 'GET' })     
            .then((response) => response.json())
            .then((responseJson) => {
                //   console.log(JSON.stringify(responseJson))
                if (responseJson.Patient_ID == -1) {
                    Toast.show({
                        text: I18n.t('UsernameDoesNotExist'),
                        type: "danger",
                        buttonText: 'x',
                        position: "top",
                        duration: 4000
                    })
                }
                else if (responseJson.Patient_ID == -2) {
                    Toast.show({
                        text: I18n.t('ThePasswordIsIncorrect'),
                        type: "success",
                        buttonText: 'x',
                        position: "top",
                        duration: 4000
                    })

                }

                else if (responseJson.Patient_ID > 0) {
                    Toast.show({
                        text: I18n.t('successfullyRegistered'),
                        type: "success",
                        buttonText: 'x',
                        position: "top",
                        duration: 4000
                    })
                    this.setItem('patient', responseJson); // save user in asyncStorage - permanent
                    this.setItem('patientId', responseJson.Patient_ID);
                    this.setItem('User_Name', responseJson.User_Name);
                    this.setItem('Full_Name_En', responseJson.Full_Name_En);
                    this.setItem('LocalFilePath', responseJson.LocalFilePath);
                    this.setItem('FTPFilePath', responseJson.FTPFilePath);
                    this.setItem('Extension', responseJson.Extension);
                    this.setItem('Server_Name', responseJson.Server_Name);
                    this.setItem('patient', responseJson);
                    this.props.navigation.navigate('Home')
                }
            })

            .catch((error) => {
                console.error(error);
            });

    }

    render() {



        return (

            <Root>

                <ImageBackground source={imgBG} style={styles.backgroundContainer}>
                    <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#fff" translucent={true} />

                    <View style={{ flexDirection: 'row', marginBottom: 20, marginHorizontal: 10 }}>
                        <TouchableOpacity
                            onPress={() => {
                                I18n.locale = 'ar-Us';
                                this.setState({ changeLanguage: 'arabic' });
                            }}>
                            <Image source={SaudiaLogo} style={styles.flag} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                I18n.locale = 'en-Us';
                                this.setState({ changeLanguage: 'English' });
                            }}>
                            <Image source={AmericaLogo} style={styles.flag} />
                        </TouchableOpacity>
                        {/* <Text>{I18n.t('chooseLang')}</Text> */}

                    </View>
                    <View style={{ alignItems: "center", }}>
                        <View style={styles.logoContainer}>
                            <Image source={logo} style={styles.logo} />
                            {/* <Text style={styles.logoTxt}>تسجيل الدخول</Text> */}
                        </View>
                        <View style={styles.inputContainer}>

                            <TextInput
                                style={styles.inputTxt}
                                placeholder={I18n.t('UserName')}
                                placeholderTextColor={'rgba (255, 255, 255, 0.7)'}
                                underlineColorAndroid="transparent"
                                // value={this.state.userName}
                                name="username"
                                onChangeText={(text) => this.setState({ userName: text })}
                            />
                            <Icon
                                name='person-outline'
                                type="MaterialIcons"
                                style={styles.inputIcon}
                                size={28}
                                color={'rbga(255,255,255,0.7)'}
                            />

                        </View>
                        {/* <Text>{this.state.userName}</Text> */}
                        <View style={styles.inputContainer}>
                            <Text style={styles.btnEye} onPress={this.onPress1.bind()} >
                                <Icon

                                    name={this.state.showPassProp == true ? 'eye-off' : 'eye'}
                                    type="Feather"
                                    style={styles.inputIconPass}
                                    size={5}
                                    color={'rbga(255,255,255,0.7)'}
                                    required={true}

                                />
                            </Text>
                            <TextInput
                                style={styles.inputTxt}
                                secureTextEntry={this.state.showPassProp}
                                placeholder={I18n.t('PASS')}
                                placeholderTextColor={'rgba (255, 255, 255, 0.7)'}
                                underlineColorAndroid="transparent"
                                onChangeText={(text) => this.setState({ password: text })}
                                //  + this.state.SelectedTime +"/1/"+this.state.DoctorId+"/"+this.state.date)
                                required={true}
                            />
                            <Icon
                                name='lock'
                                type="Feather"
                                style={styles.inputIconPass}
                                size={5}
                                color={'rbga(255,255,255,0.7)'}
                            />

                        </View>
                        <Button style={styles.btnLogin} onPress={() => this.BtnLoginfun()}>
                            <Text style={styles.txt}>{I18n.t('Login')}</Text>
                        </Button>
                        <Button onPress={() => { this.props.navigation.navigate('Home') }} >
                            {/* <Text style={styles.txt}>تخطي </Text> */}
                        </Button>

                        <View style={{ flexDirection: "row", margin: 9 }}>
                            <Text style={styles.registerLink} onPress={() => this.props.navigation.navigate('Register')} > {I18n.t('NewRegistration')}</Text>
                            <Text style={styles.register} >{I18n.t('Youdonothaveanaccount')} </Text>

                        </View>
                    </View>
                </ImageBackground>
            </Root>

        );
    }
}
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: '#f5fcff',
        justifyContent: "flex-start",
        paddingVertical: 50,
        alignItems: "flex-end",
        width: null,
        height: null,
    },
    logo: {
        width: 120,
        height: 120
    },
    flag: {
        width: 40,
        height: 20,
        marginHorizontal: 10,
        borderRadius: 8
    },
    logoContainer: {
        alignItems: "center",
        marginVertical: 50
    },
    logoTxt: {
        color: "blue",
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5
    },
    inputContainer: {
        marginTop: 10
    },
    inputTxt: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.1)',
        color: '#000',
        marginHorizontal: 25,
        paddingRight: 50,
        textAlign: 'right',
        fontFamily: "Changa-Regular"
    },
    inputIcon: {
        position: "absolute",
        top: 10,
        right: 37,
        // paddingRight:50
    },
    langIcon: {
        marginHorizontal: 10,
        marginVertical: 5
    },
    inputIconPass: {
        position: "absolute",
        top: 10,
        right: 37,
        fontSize: 25
    },
    btnEye: {
        zIndex: 1,
        position: 'absolute',
        top: 10,
        left: 50,
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#0195B6',
        justifyContent: "center",
        marginTop: 20
    },
    txt: {
        color: 'rgba(255,255,255,1)',
        fontSize: 16,
        textAlign: "center",
        fontFamily: "Changa-Bold"
    },
    register: {
        fontSize: 15,
        fontFamily: "Changa-Bold"

    },
    registerLink: {
        fontSize: 15,
        color: '#266370',
        fontFamily: "Changa-Bold",
        // fontFamily: "Changa-Regular"

    }

})

// export default Login;