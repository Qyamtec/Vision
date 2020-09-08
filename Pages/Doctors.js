import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Button, Icon } from "native-base";
import { Dimensions } from 'react-native';
import FooterSection from '../shared/FooterSection';
import I18n from '../src/I18n/index';


const users = [
    {
        name: 'د.سلطان الزهيري',
        desc: 'استشاري الماء الأزرق والماء الأبيض وعمليات تصحيح النظر',
        avatar:  require('../assets/doctors/7.png')
    },
    {
        name: 'د.سلطان الرشيدي',
        desc: 'استشاري القرنية والماء الأبيض وعمليات تصحيح النظر',
        avatar: require('../assets/doctors/2.png')
    },
    {
        name: 'د.أحمد المهيلب',
        desc: 'استشاري جراحات الشبكية والماء الأبيض وعمليات تصحيح النظر',
        avatar: require('../assets/doctors/1.png')
    },
    {
        name: 'د.سعد الذيابي',
        desc: 'استشاري عيون اللأطفال والحول والماء الأبيض وعمليات تصحيح النظر',
        avatar: require( '../assets/doctors/9.png')
    },
    {
        name: 'د.دورا الحركان',
        desc: 'استشاري عيون اللأطفال والحول لدى الكبار والأطفال',
        avatar: require( '../assets/doctors/8.png')

    },
    // {
    //     name: 'د.على القيضي',
    //     desc: ' أخصائي أول بصريات ومتخصص فى العدسات اللاصقة والمعينات البصرية',
    //     avatar: require( '../assets/doctors/1.png')
    // },
    {
        name: 'د.عبدالرحمن الحربي',
        desc: ' أخصائي بصريات اكلينيكية ومتخصص فى العدسات اللاصقة والمعينات البصرية',
        avatar: require( '../assets/doctors/4.png')
    },
    {
        name: 'د.بريا هاري',
        desc: 'أخصائية أول بصريات ',
        avatar:require( '../assets/doctors/8.png')
    },

]

export default class Doctors extends Component {

    render() {

        return (
            <Container>
        <View style={styles.content}>
            <ScrollView>
                {
                    users.map((u, i) => {
                        return (

                            <View style={styles.container}>
                                      {/* <Image style={styles.image} resizeMode="cover" source={require(u.avatar)} /> */}
                                <Card style={styles.card} >
                                    <CardItem bordered>
                                        <Body>
                                            <View key={i} style={styles.user} >
                                                <View style={{ flex: 1.3 }}>
                                                    <Button info style={styles.btn} onPress={() => { this.props.navigation.navigate('Reserve') }} >
                                                        <Text style={styles.btn} >{I18n.t('reserveNow')}</Text>
                                                    </Button>
                                                </View>
                                                <View style={{ flex: 3.6, flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
                                                    <View style={{ flex: 1 }}>
                                                        <Text style={styles.name} >{u.name} </Text>
                                                        <View style={{ flexDirection: 'row', padding: 5 }}>
                                                            <Text style={styles.desc} >{u.desc} </Text>
                                                        </View>
                                                    </View>
                                                    <Image style={styles.image} resizeMode="cover" source={ u.avatar } />
                                                </View>
                                            </View>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </View>

                        );
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
    image: {
        width: 80,
        height: 80,
borderRadius:15
    },
    name: {
        fontFamily: "Changa-Bold",
        marginRight: 20,
        color:"#0195B6"

    },
    user: {
        flexDirection: "row",
        alignItems: "center",
        // marginBottom: 20,
        justifyContent: 'flex-end',
        // width:100
        fontFamily: "Changa-Bold",


    },
  
    btn: {

        fontSize: 12,
        fontFamily: "Changa-Bold",
        // textAlign: "center",
        borderRadius: 7,
        justifyContent: 'center',

    },
    btnTitle: {
        color: '#000',
        fontFamily: "Changa-Regular",
        
    },
    card: {
        borderRadius: 30,
        // backgroundColor: '#F7F7F7',

        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        // shadowOpacity: 0.1,
        // shadowRadius: 6.27,
        // shadowColor: "#F1F9F9",
        // elevation: 3,
    },
    desc: {
        flex: 1,
        flexWrap: "wrap",
        fontFamily: "Changa-Regular",
        fontSize:10

    }

});

