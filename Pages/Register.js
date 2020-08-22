
import { Root } from "native-base";

import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, ScrollView, Image, Dimensions, Text, TextInput, TouchableOpacity } from 'react-native';
import imgBG from '../assets/bg12.jpg'
import logo from '../assets/Vision.jpg'
import { Icon, Button } from 'native-base';
import { Container, Header, Content, Form, Item, Input, Label, DatePicker, Toast } from 'native-base';
import ValidationComponent from 'react-native-form-validator';
import I18n from '../src/I18n/index';

const { width: WIDTH } = Dimensions.get('window')
const onPress = () => {
    alert("hhhh")

};


export default class Register extends Component {
    constructor() {
        super()
        this.state = {
            showPassProp: true,
            // chosenDate: new Date(),
            firstName_Ar: '',
            firstName_En: '',
            lastName_Ar: '',
            lastName_En: '',
            username: '',
            Password: '',
            confirmPassword: '',
            Email: '',
            Mobile: 0,
            BirthDate: new Date(),
            mobilevalidate: false,
            Nationality: 1,
            FK_Gender_ID: 1
        }

    }
    onPress1 = () => {
        if (this.state.showPassProp === true) {
            this.setState({ showPassProp: false })
        } else {
            this.setState({ showPassProp: true })
        }
    }
    BtnRegister() {
        console.log(
            this.state.username,
            this.state.firstName_Ar,
            this.state.firstName_En,
            this.state.lastName_Ar,
            this.state.lastName_En,
            this.state.Nationality,
            this.state.FK_Gender_ID,
            this.state.Mobile,
            this.state.Email,
            this.state.password,
            this.state.confirmPassword,
            this.state.BirthDate,

        )
        dob = [this.state.BirthDate.getFullYear(), this.state.BirthDate.getMonth(), this.state.BirthDate.getDate()].join('-')
        // dob=(this.state.BirthDate.getFullYear()+''+this.state.BirthDate.getMonth()+'/'+this.state.BirthDate.getDate()).toString();
        fetch('http://192.168.1.100:91/api/PatientApi/AddPatient/0/' + this.state.firstName_Ar + '/' + this.state.firstName_En + '/' + this.state.lastName_Ar + '/' + this.state.lastName_En + '/' + this.state.Mobile + '/' + this.state.username + '/' + this.state.Email + '/' + dob + '/' + this.state.password + '/' + this.state.Nationality + '/' + this.state.FK_Gender_ID, { method: 'GET' })
            .then((response) => response)
            .then((responseJson) => {
                Toast.show({
                    text: I18n.t('successfullyRegistered'),
                    type: "success",
                    buttonText: 'x',
                    position: "top",
                    duration: 4000
                })
                console.log(responseJson._data)

            })
            .catch((error) => {
                // alert(JSON.stringify(error));
                console.error(error);
            });

    }
    validateemail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    render() {
        return (
            <Root>
                <ImageBackground source={imgBG} style={styles.backgroundContainer}>
                    <ScrollView>
                        <View style={styles.logoContainer}>
                            <Image source={logo} style={styles.logo} />
                            {/* <Text style={styles.logoTxt}>تسجيل الدخول</Text> */}
                        </View>
                        {/* firstName_Ar */}
                        <View style={styles.inputContainer}>

                            <TextInput
                                style={styles.inputTxt}
                                placeholder={I18n.t('FirstNameInArabic')}
                                placeholderTextColor={'rgba (255, 255, 255, 0.7)'}
                                underlineColorAndroid="transparent"
                                onChangeText={(text) => this.setState({ firstName_Ar: text })}
                            />
                            <Icon
                                name='person-outline'
                                type="MaterialIcons"
                                style={styles.inputIcon}
                                size={28}
                                color={'rbga(255,255,255,0.7)'}
                            />

                        </View>
                        {/* firstName_En */}
                        <View style={styles.inputContainer}>

                            <TextInput
                                style={styles.inputTxt}
                                placeholder={I18n.t('FirstNameInEnglish')}
                                placeholderTextColor={'rgba (255, 255, 255, 0.7)'}
                                underlineColorAndroid="transparent"
                                onChangeText={(text) => this.setState({ firstName_En: text })}
                            />
                            <Icon
                                name='person-outline'
                                type="MaterialIcons"
                                style={styles.inputIcon}
                                size={28}
                                color={'rbga(255,255,255,0.7)'}
                            />

                        </View>
                        {/* lastName_Ar */}
                        <View style={styles.inputContainer}>

                            <TextInput
                                style={styles.inputTxt}
                                placeholder={I18n.t('LastNameInArabic')}
                                placeholderTextColor={'rgba (255, 255, 255, 0.7)'}
                                underlineColorAndroid="transparent"
                                onChangeText={(text) => this.setState({ lastName_Ar: text })}
                            />
                            <Icon
                                name='person-outline'
                                type="MaterialIcons"
                                style={styles.inputIcon}
                                size={28}
                                color={'rbga(255,255,255,0.7)'}
                            />

                        </View>
                        {/* lastName_En */}
                        <View style={styles.inputContainer}>

                            <TextInput
                                style={styles.inputTxt}
                                placeholder={I18n.t('LastNameInEnglish')}
                                placeholderTextColor={'rgba (255, 255, 255, 0.7)'}
                                underlineColorAndroid="transparent"
                                onChangeText={(text) => this.setState({ lastName_En: text })}
                            />
                            <Icon
                                name='person-outline'
                                type="MaterialIcons"
                                style={styles.inputIcon}
                                size={28}
                                color={'rbga(255,255,255,0.7)'}
                            />

                        </View>

                        {/* username */}
                        <View style={styles.inputContainer}>

                            <TextInput
                                style={styles.inputTxt}
                                placeholder={I18n.t('UserName')}
                                placeholderTextColor={'rgba (255, 255, 255, 0.7)'}
                                underlineColorAndroid="transparent"
                                onChangeText={(text) => this.setState({ username: text })}
                            />
                            <Icon
                                name='person-outline'
                                type="MaterialIcons"
                                style={styles.inputIcon}
                                size={28}
                                color={'rbga(255,255,255,0.7)'}
                            />

                        </View>
                        {/* Mobile */}
                        <View style={styles.inputContainer}>

                            <TextInput
                                style={styles.inputTxt}
                                keyboardType="numeric"
                                placeholder={I18n.t('MobileNumber')}
                                placeholderTextColor={'rgba (255, 255, 255, 0.7)'}
                                underlineColorAndroid="transparent"
                                onChangeText={(text) => this.setState({ Mobile: text })}
                            />
                            <Icon
                                name='phone'
                                type="Feather"
                                style={styles.inputIconemail}
                                size={28}
                                color={'rbga(255,255,255,0.7)'}
                            />

                        </View>

                        {/* BirthDate */}
                        <View style={styles.inputContainer}>

                            <View style={styles.inputTxt}>
                                <DatePicker
                                    defaultDate={new Date(2018, 4, 4)}
                                    minimumDate={new Date(2018, 1, 1)}
                                    maximumDate={new Date(2018, 12, 31)}
                                    locale={"en"}
                                    timeZoneOffsetInMinutes={undefined}
                                    modalTransparent={false}
                                    animationType={"fade"}
                                    androidMode={"default"}
                                    placeHolderText={I18n.t('DateOfBirth')}
                                    textStyle={{ textAlign: 'right' }}
                                    placeHolderTextStyle={{ color: 'gray' }}
                                    onDateChange={(text) => this.setState({ BirthDate: text })}

                                    disabled={false}
                                />

                                <Icon
                                    name='date'
                                    type="Fontisto"
                                    style={styles.inputIconBD}
                                    size={28}
                                    color={'rbga(255,255,255,0.7)'}
                                />
                            </View>
                        </View>
                        {/* email */}
                        <View style={styles.inputContainer}>

                            <TextInput
                                style={styles.inputTxt}
                                placeholder={I18n.t('Email')}
                                placeholderTextColor={'rgba (255, 255, 255, 0.7)'}
                                underlineColorAndroid="transparent"
                                onChangeText={(text) => this.setState({ Email: text })}
                                onBlur={() => {
                                    if (!this.validateemail(this.state.Email)) {
                                        Toast.show({
                                            text: I18n.t('TheEmailIsInvalid'),
                                            type: "danger",
                                            buttonText: 'x',
                                            position: "top",
                                            duration: 4000
                                        })
                                    } else {
                                        console.log(' valid email')
                                    }
                                }
                                }

                            />
                            <Icon
                                name='email'
                                type="Fontisto"
                                style={styles.inputIconemail}
                                color={'rbga(255,255,255,0.7)'}
                            />

                        </View>
                        {/* pass */}
                        <View style={styles.inputContainer}>
                            <Text style={styles.btnEye} onPress={this.onPress1.bind()} >
                                <Icon
                                    name={this.state.showPassProp == true ? 'eye-off' : 'eye'}
                                    type="Feather"
                                    style={styles.inputIconPass}
                                    size={5}
                                    color={'rbga(255,255,255,0.7)'}
                                />
                            </Text>
                            <TextInput
                                style={styles.inputTxt}
                                placeholder={I18n.t('PASS')}
                                secureTextEntry={this.state.showPassProp}
                                placeholderTextColor={'rgba (255, 255, 255, 0.7)'}
                                underlineColorAndroid="transparent"
                                onChangeText={(text) => this.setState({ password: text })}
                            />
                            <Icon
                                name='lock'
                                type="Feather"
                                style={styles.inputIconPass}
                                size={5}
                                color={'rbga(255,255,255,0.7)'}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.btnEye} onPress={this.onPress1.bind()} >
                                <Icon

                                    name={this.state.showPassProp == true ? 'eye-off' : 'eye'}
                                    type="Feather"
                                    style={styles.inputIconPass}
                                    size={5}
                                    color={'rbga(255,255,255,0.7)'}
                                />
                            </Text>
                            <TextInput
                                style={styles.inputTxt}
                                placeholder={I18n.t('ConfirmPassword')}
                                secureTextEntry={this.state.showPassProp}
                                placeholderTextColor={'rgba (255, 255, 255, 0.7)'}
                                underlineColorAndroid="transparent"
                                onChangeText={(text) => this.setState({ confirmPassword: text })}
                                onBlur={() => {
                                    if (this.state.password !== this.state.confirmPassword) {
                                        console.log("Passwords don't match", this.state.password, this.state.confirmPassword);
                                        Toast.show({
                                            text: I18n.t('PasswordsDoNotMatch'),
                                            type: "danger",
                                            buttonText: 'x',
                                            position: "top",
                                            duration: 4000
                                        })
                                    } else {
                                        console.log("Passwords match");
                                    }
                                }}

                            />
                            <Icon
                                name='lock'
                                type="Feather"
                                style={styles.inputIconPass}
                                size={5}
                                color={'rbga(255,255,255,0.7)'}
                            />
                        </View>

                        <Button style={styles.btnRegister} onPress={() => { this.BtnRegister() }}>
                            <Text style={styles.txt}>{I18n.t('Register')} </Text>
                        </Button>
                        {/* <View style={{ flexDirection: "row", margin: 9 }}>
                    <Text style={styles.registerLink} > تسجيل جديد</Text>
                    <Text style={styles.register} >لا تملك حساب؟  </Text>

                </View> */}
                    </ScrollView>
                </ImageBackground>
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
    logo: {
        width: 120,
        height: 120
    },
    logoContainer: {
        alignItems: "center",
        marginVertical: 20
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
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25,
        paddingRight: 50,
        textAlign: 'right',
        color: '#000'
    },
    inputIconBD: {
        position: "absolute",
        top: 10,
        right: 15,
        fontSize: 25

    },
    inputIcon: {
        position: "absolute",
        top: 10,
        right: 37,
        // paddingRight:50

    },
    inputIconPass: {
        position: "absolute",
        top: 10,
        right: 37,
        fontSize: 25
    },
    inputIconemail: {
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
    btnRegister: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#0195B6',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 30,
        marginLeft: 25
    },
    txt: {
        color: 'rgba(255,255,255,1)',
        fontSize: 16,
        textAlign: "center"
    },
    register: {
        fontSize: 15
    },
    registerLink: {
        fontSize: 15,
        color: '#266370',
        fontWeight: "bold"
    }

})
