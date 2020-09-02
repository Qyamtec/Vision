import { Root } from "native-base";
import React, { Component } from 'react';
import { StyleSheet, Alert, View, FlatList, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Container, ActionSheet, Header, Content, Form, Badge, Item, Picker, Icon, Toast, DatePicker, Text, Card, CardItem, Body, Button } from 'native-base';
import DropDownPicker from 'react-native-dropdown-picker';
import FooterSection from '../shared/FooterSection';
var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
import AsyncStorage from '@react-native-community/async-storage';

export default class Reserve extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Doctors: [],
            Times: [],
            DoctorId: Number,
            date: new Date(),
            selected2: undefined,
            dateff: new Date(),
            isLoading: true,
            change: false,
            background: 'green',
            on: false,
            SelectedTime: Number
            , showAlert: false,
            patientId: ""


        };
    }

    showAlert = () => {
        this.setState({
            showAlert: true,
        });
    };

    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };
    getAvailableTimes() {

        myDate = new Date();
        //        
        myDate = this.state.date.getFullYear() + "-" + (this.state.date.getMonth() + 1) + "-" + this.state.date.getDate()
        console.log(myDate)
        fetch("http://192.168.1.100:91/api/PatientApi/GetAllAvaliableAppointment/" + myDate + "/" + this.state.DoctorId + "/1/1")
            .then((response) => response.json())
            .then((responseJson) => {
                (responseJson).forEach(element => {
                    // this.setState({ Times: ((element.AvaliableTimes.toString().split("T") )[1]).split(",")});
                    const av = element.AvaliableTimess.toString();
                    const vv = av.split(',');
                    // const xx=new Array();
                    // this.setState({Times:xx})
                    this.state.Times.splice(0, this.state.Times.length);
                    (vv).forEach((element, i) => {

                        this.state.Times.push({ element })
                        // alert( this.state.Times[i].value)
                    })

                    //this.setState({ Times: vv });

                });
                this.AvailableTimes();
                console.log(this.state.Times);

                //    this.setState({ Times: responseJson })
                // alert(JSON.stringify(this.state.Times.split(',')));

            })
            .catch((error) => { console.error(error); });

        // }
    }

    changeDoctor(item) {
        alert("in function")
        // this.setState({
        //     DoctorId: item.value
        // });
        // this.getAvailableTimes();
    }
    async componentDidMount() {
        const patientId = await AsyncStorage.getItem('patientId');
        this.setState({ patientId: patientId })
        console.log(this.state.patientId)
    }
    componentWillMount() {
        //GET request 

        //fetch('http://vision.giize.com:90/api/PatientApi/GetOrgDoctors/1/6', {
        fetch('http://192.168.1.100:91/api/PatientApi/GetOrgDoctors/1/6', {
            method: 'GET'
            //Request Type 
        })
            .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
                //Success 
                //  console.log(responseJson)
                (responseJson).forEach(element => {
                    // console.log(element);
                    this.state.Doctors.push({ label: element.Full_Name_Ar, value: element.Employee_ID });
                    // Alert(this.state.Doctors)

                });
                // alert(JSON.stringify(this.state.Doctors));

            })
            //If response is not in json then in error
            .catch((error) => {
                //Error 
                // alert(JSON.stringify(error));
                console.error(error);
            });

    }
    sheet() {
        // alert("hhhh");

    }

    AvailableTimes() {
        const btn = this;

        return this.state.Times.map(function (time, i) {
            return (
                <View style={styles.times} >
                    <Button style={styles.timeTxt}
                        onPress={() => {
                            btn.setState({
                                showAlert: true,
                                SelectedTime: time.element
                            });
                        }}>
                        <Text>{time.element}</Text>
                    </Button>
                </View>
            );
        });
    }


    render() {
        const { showAlert } = this.state;
        return (
            <Root>

            <View style={styles.content}>

                <ScrollView>

                    <Container style={styles.container}>

                        <AwesomeAlert
                            show={showAlert}
                            showProgress={false}
                            title="هل تريد تاكيد الحجز ؟"
                            alertContainerStyle={styles.awesome}
                            //    message=""
                            closeOnTouchOutside={true}
                            closeOnHardwareBackPress={false}
                            showCancelButton={true}
                            showConfirmButton={true}
                            cancelText="الغاء"
                            confirmText="موافق"
                            confirmButtonColor="#DD6B55"
                            onCancelPressed={() => {
                                this.hideAlert();
                                Toast.show({
                                    text: "لم يتم حجز المعاد",
                                    buttonText: "",
                                    position: "top",
                                    type: "danger"
                              })
                            }}
                            onConfirmPressed={() => {
                                this.hideAlert();
                                selectedDate = this.state.date
                                // console.log(selectedDate.setHours("17"))
                                // console.log(((selectedDate.getFullYear() + '-' + selectedDate.getMonth() + '-' + (selectedDate.getDate() + 1))).setTime(this.state.SelectedTime.toString()));
                                console.log(this.state.patientId)
                                console.log(this.state.DoctorId)
                                console.log((selectedDate.getFullYear() + '-' + (selectedDate.getMonth() + 1) + '-' + (selectedDate.getDate())).toString())
                                fetch('http://192.168.1.100:91/api/AppointmentApi/Addappointment/' + this.state.SelectedTime + '/' + this.state.patientId + '/' + this.state.DoctorId + '/' + (selectedDate.getFullYear() + '-' + (selectedDate.getMonth() + 1) + '-' + (selectedDate.getDate())).toString()
                                    //   fetch('http://vision.giize.com:90/api/AppointmentApi/Addappointment/' + this.state.SelectedTime + '/11/' + this.state.DoctorId + '/' + (selectedDate.getFullYear() + '-' + (selectedDate.getMonth() + 1) + '-' + (selectedDate.getDate())).toString()
                                    // fetch("http://192.168.1.100:90/api/AppointmentApi/addappointment" 
                                    // fetch("http://192.168.1.100:90/api/AppointmentApi/Addappointment/2020-06-22/11/14/2020-06-23"
                                    , {
                                        method: 'GET'
                                        //Request Type 
                                    }
                                )
                                    .then((response) => {
                                        // alert(JSON.stringify(response.ok))
                                        if(response.ok==true)
                                        {
                                            Toast.show({
                                                text: "تم حجز المعاد",
                                                buttonText: "",
                                                position: "top",
                                                type: "success"
                                          })
                                        }
                                        else{
                                            Toast.show({
                                                text: "لم يتم حجز المعاد",
                                                buttonText: "",
                                                position: "top",
                                                type: "danger"
                                          })
                                        }
                                        this.getAvailableTimes();
                                        this.AvailableTimes()
                                       
                                    }
                                    )
                                    .catch((error) => {
                                        //Error 
                                        // alert(JSON.stringify(error));
                                        console.error(error);
                                    });
                            }}
                        />
                        <DropDownPicker
                            items={this.state.Doctors}
                            defaultNull={this.state.Doctors === null}
                            placeholder="اختر طبيب"
                            containerStyle={{ height: 40 }}
                            onChangeItem={(item) => {
                                this.setState({ DoctorId: item.value });
                                this.getAvailableTimes();
                                this.AvailableTimes();
                            }}
                        />
                        <View style={styles.Date}>
                            <DatePicker
                                defaultDate={new Date(this.state.dateff.getFullYear(), this.state.dateff.getMonth(), this.state.dateff.getDate())}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date(2050, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={(date) => {
                                    this.setState({
                                        date: date
                                    });
                                    this.getAvailableTimes()
                                }}
                                disabled={false}
                            />
                            <Text>
                                Date: {this.state.date.toString().substr(4, 12)}
                            </Text>
                        </View>



                        <View style={styles.row}>
                            {this.AvailableTimes()}
                        </View> 
                    </Container>
                </ScrollView>
                <FooterSection navigation={this.props.navigation} />
            </View>
            </Root>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // justifyContent: "center",
        // alignItems: "center",
        padding: 15,
        textAlign: "justify"

    },
    content: {
        flex: 1,
        height: 300
    },
    Date: {
        // marginTop: 20,
        // marginBottom: 20,
        marginLeft: 100,
        width: 200,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    times: {
        borderColor: 'blue',
        borderRadius: 10,
        // marginRight: 5,
        // width:220,
        // flex: 1,
        // flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'gray'
        flexWrap: "wrap"
    },
    timeTxt: {
        margin: 5,
        padding: 3,
        // flex: .3,
        textAlign: "center",
        width: 100,
        borderRadius: 10,
        backgroundColor: 'gray'

    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        flex: 2,
        justifyContent: "center",
        flexWrap: "wrap"

    },
    btn: {
        // flex:1,
        justifyContent: "center",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: 7,

    },
    awesome: {
        zIndex: 1000,

    }

});