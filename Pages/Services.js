
import React, { Component } from 'react';
// import {StyleSheet} from 'react-native';
// import { Container, Header, Content, Accordion } from "native-base";
//warning --temp 
console.disableYellowBox = true;

import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Button, Icon } from "native-base";
import FooterSection from '../shared/FooterSection';

const CONTENT = [
  {
    title: 'وحدة تصحيح النظر وعلاج القرنيةالمخروطية',
    image: require('../assets/services/Eye1.jpg'),
    content: 'توفر وحدة تصحيح النظر أحدث جهاز لتصوير القرنية وجهاز ليزر متكامل و حديث يضمن نسبة نجاح عالية جدا ويجريها نخبة من أشهر وأفضل الاستشاريين السعوديين وكما توفر وحدة علاج القرنية المخروطية فى المركز تثبيت القرنية الضوئى corneal cross-linking  الذي يحد من تطور القرنية المخروطية ويضمن ياذن الله ثبات النظر '
  },
  {
    title: 'وحدة طب عيون الأطفال والحول للكبار والصغار',
    image: require('../assets/services/Eye2.jpg'),
    content: 'وحدة الليزر وعلاجات الشبكية مزودة بأحدث الأجهزة لعلاج الشبكية وتشمل الليزر الشامل والعلاج الموضعي وحقن الشبكية وجراحات الشبكية بأنواعها المختلفة تحت أيدي استشاريين الشبكية والسائل الزجاجى.'
  },
  {
    title: 'وحدة تجميل الجفون وانسداد القنوات الدمعية ',
    image: require('../assets/services/Eye3.jpg'),
    content: 'توفر وحدة علاج ارتخاء الجفون وانسداد القنوات الدمعية العالج الطبي اآمن والفعال لمشاكل ارتخاء الجفون وكذلك انسدداد القنوات الدمعية المزمن.'
  },
  {
    title: 'وحدة البصريات والعدسات اللاصقة والمعينات البصرية',
    image: require('../assets/services/Eye4.jpg'),
    content: 'توفر عيادة البصريات فحص شامل للنظر وقياس العدسات اللينة والصلبة بأنواعها المختلفة وكذلك وصف المعينات البصرية للمرضي ضعاف البصر من قبل دكاترة بصريات متخصصين.'
  },
];
export default class Services extends Component {
  render() {
    return (
      <Container>
        <View style={styles.content}>
          <ScrollView>
            {
              CONTENT.map((u, i) => {
                return (
                  <View style={styles.container}>
                    {/* <Image style={styles.image} resizeMode="cover" source={require(u.avatar)} /> */}
                    <Card style={styles.card} >
                      <CardItem bordered>
                        <Body>
                          <View key={i} style={styles.user} >
                            <View >
                              <Text style={styles.name} >{u.title} </Text>

                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
                              <View style={{ flex: 1 }}>
                                <View style={{ flexDirection: 'row', padding: 5 }}>
                                  <Text style={styles.desc} >{u.content} </Text>
                                </View>
                              </View>
                              <Image style={styles.image} resizeMode="cover" source={u.image} />
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
    width: 100,
    height: 150,
    borderRadius: 15,
    marginLeft: 20
  },
  name: {
    fontFamily: "Changa-Bold",
        marginRight: 20,
    marginBottom: 10,
    color: "#0195B6",
    textAlign:"center",
    

  },
  user: {
    // flexDirection: "row",
    alignItems: "center",
    // marginBottom: 20,
    justifyContent: 'flex-end',
    // width:100

  },
  btnView: {
    width: 150,
    // flex:0.5,
    flexDirection: "row",
    justifyContent: 'flex-start',
    // marginRight: 0
    left: 0

  },
  btn: {

    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 7,

  },
  btnTitle: {
    color: '#000'
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
  }

});

