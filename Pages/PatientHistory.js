import React, { Component } from 'react';
import {StatusBar,
    Platform,
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    ScrollView, ImageBackground, Dimensions, FlatList
} from 'react-native';
import ListView from 'deprecated-react-native-listview';
import { Container, Header, Content, Card, CardItem, Text, Body, Button, Icon } from "native-base";

import AsyncStorage from '@react-native-community/async-storage';
import FooterSection from '../shared/FooterSection';
import imgBG from '../assets/bg12.jpg'
const { width: WIDTH } = Dimensions.get('window')
const renderItem = ({ item }) => (
    <Item title={item} />
  );
  const Item = ({ title },i) => (
    <View >
    <View key={i} style={styles.card} >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.rendertext}>{title.Invoice_Date}</Text>
            <Text style={styles.name}>يوم : </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.rendertext}>{title.Invoice_Time}</Text>
            <Text style={styles.name}>الساعة : </Text>
        </View>
  
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Text style={styles.rendertext}> {title.Full_Name_Ar}</Text>
    <Text style={styles.name}> كان لديك كشف عند الطبيب</Text>
    </View>
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View>
            <Text style={styles.name}> الفحص :</Text>
            <View>
                <Text style={styles.rendertext}> {title.Examination}</Text>
            </View>
        </View>
    </View>
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View>
            <Text style={styles.name}> التاريخ :</Text>
            <View>
                <Text style={styles.rendertext}> {title.History}</Text>
            </View>
        </View>
        </View>

    </View>
</View>
  );
  
export default class Appointments extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            // FlatListItem: [],
            PatientHistory: [],
            dataSource: ds.cloneWithRows([
                { image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
                { image: "https://bootdey.com/img/Content/avatar/avatar6.png" },
                { image: "https://bootdey.com/img/Content/avatar/avatar2.png" },
                { image: "https://bootdey.com/img/Content/avatar/avatar3.png" },
                { image: "https://bootdey.com/img/Content/avatar/avatar4.png" },
            ]),
        };
    }
    ListEmpty = () => {
        return (
            //View to show when list is empty
            <View style={styles.MainContainer}>
                <Text style={{ textAlign: 'center' }}>No Data Found</Text>
            </View>
        );
    }
    async componentDidMount() {
        const tokens = await AsyncStorage.getItem('patient');
        const patientId = await AsyncStorage.getItem('patientId');
        console.log(patientId)
        //GET request 
        fetch('https://visionapp.qyamtec.com/api/PatientApi/PatientHistory/' + patientId, {
            method: 'GET'
            //Request Type 
        })
            .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
                //Success 
                this.setState({
                    PatientHistory: responseJson
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
        return (
            <Container>
                 <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#232323" translucent = {true}/>
                <ImageBackground source={imgBG} style={styles.backgroundContainer}>
                    <View style={styles.content}>
                        <FlatList
                            data={this.state.PatientHistory}
                            renderItem={renderItem}
                            ListEmptyComponent={this.ListEmpty}
                        //Message to show for the Empty list
                        />
                    </View>
                </ImageBackground>
            </Container>
        );
    }

    // render() {
    //     return (
    //         <Container> 

    //         <ImageBackground source={imgBG} style={styles.backgroundContainer}>

    //             <View style={styles.content}>
    //                 <ScrollView>
    //                     {
    //                         this.state.PatientHistory.map((u, i) => {
    //                             console.log(this.state.PatientHistory.length)

    //                                 return (
    //                                     <View style={styles.container}>
    //                                     <View style={styles.box}>
    //                                         <View style={styles.info}>
    //  <View key={i} style={styles.card} >
    //     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    //     <Text>{u.Invoice_Date}</Text>
    //     <Text style={styles.name}> يوم </Text>
    //     </View>
    //     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    //     <Text>{u.Invoice_Time}</Text>
    //     <Text style={styles.name}> الساعة </Text>
    //     </View>
    //    </View>
    //     <View style={{ flexDirection: 'row', alignItems: 'center' }}>                                                     
    //     <Text style={styles.name}>كان لديك كشف عند الطبيب  {u. Full_Name_Ar}</Text>
    //     </View>
    //     <View  style={{flexDirection:"row",justifyContent:"center" }}>
    //     <View>
    //     <Text style={styles.name}> الفحص </Text>
    //     <View>
    //     <Text> {u.Examination}</Text> 
    //     </View>
    //     </View>


    //         </View>
    //         <View  style={{flexDirection:"row",justifyContent:"center" }}>
    //     <View>
    //     <Text style={styles.name}> التاريخ </Text>
    //     <View>
    //     <Text> {u.History}</Text> 
    //     </View>
    //     </View>


    //         </View>
    //         {/* <View style={styles.row}>

    //         <View style={styles.btnContainer}>
    //             <Text style={styles.name}>  التاريخ </Text>
    //            <Text>
    //            {u.History}
    //            </Text>

    //         </View>
    //         </View> */}

    // </View> 
    //                                         </View>
    //                                     </View>
    //                                 )
    //                             // }
    //                             // else{
    //                             //     return (
    //                             //         <View style={styles.container}>
    //                             //             <View style={styles.box}> 
    //                             //                 <View style={styles.info}>
    //                             //                     <View key={i} style={styles.card} >
    //                             //                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    //                             //                        </View>
    //                             //                            <Text style={styles.name}> لا يوجد تاريخ طبى  </Text>
    //                             //                        </View>
    //                             //                     </View>
    //                             //                 </View>
    //                             //             </View>
    //                             //     )
    //                             // }

    //                         })
    //                     }

    //                 </ScrollView>
    //                 <FooterSection navigation={this.props.navigation} />
    //             </View>

    //         </ImageBackground>
    //         </Container>

    //     );

    // }
};

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        margin: 10,
    },

    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
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
        backgroundColor: 'transparent', shadowColor: "gray"
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
        
        borderColor:'#34dce0',
        margin:10,
        opacity:1,
        color:'black', 
        padding:10,
        backgroundColor:"#fff",
        borderRadius:5,
        shadowRadius:.2, 
      //  shadowOffset: { width: 10, height: 30 },
        shadowOpacity: 1,
        elevation: 2,
        // background color must be set
        backgroundColor : "#fff",
        // invisible color,
        shadowColor: '#34dce0',
       borderWidth: 1,
       
        
        
        
       
    },
    name: {
        fontSize: 18,
        marginTop: 10,
        color: '#000',
        fontWeight: "bold",
        fontFamily: "Changa-Regular",
        //padding:5,
        textAlign: 'right',

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
    },
    rendertext:{
        color: '#00f',
        marginTop:12,
        fontWeight:'bold',
        fontSize:15,
        textAlign: 'right',
   }
});
