import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Container, DeckSwiper, Card, CardItem, Button, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import FooterSection from '../shared/FooterSection';
import I18n from '../src/I18n/index';

const cards = [
    {
        // text: 'Card One',
        // name: 'One',
        image: require('../assets/Building/0.jpg'),
    },
    {
        image: require('../assets/Building/1.jpg'),
    },
    {
        image: require('../assets/Building/2.jpg'),
    },
    {
        image: require('../assets/Building/3.jpg'),
    },
    {
        image: require('../assets/Building/4.jpg'),
    },
    {
        image: require('../assets/Building/5.jpg'),
    },
    {
        image: require('../assets/Building/6.jpg'),
    },





];
export default class About extends Component {
    render() {
        return (
            <Container>
                <View style={styles.content}>
                    <View style={{ flex: 1 , padding:5}}>
                        <View style={styles.imgWrapper} >
                            <DeckSwiper
                                ref={(c) => this._deckSwiper = c}
                                dataSource={cards}
                                looping='true'
                                renderItem={item =>
                                    <Card style={styles.image} >
                                        <CardItem cardBody>
                                            <Image style={styles.image} source={item.image} />
                                        </CardItem>
                                    </Card>
                                }
                            />

                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', padding: 15 }}>
                            <Button iconLeft style={styles.Btn} onPress={() => this._deckSwiper._root.swipeLeft()}>
                                <Icon name="arrow-back" />
                                <Text style={{ fontFamily: "Changa-Bold"}}>{I18n.t('next')}</Text>
                            </Button>
                            <Button iconRight style={styles.Btn} onPress={() => this._deckSwiper._root.swipeRight()}>
                                <Text style={{ fontFamily: "Changa-Bold"}}>{I18n.t('Previous')}</Text>
                                <Icon name="arrow-forward" />

                            </Button>
                        </View>
                        <View style={styles.para}>
                            <Text style={styles.para}> {I18n.t('AboutContent')}</Text>
                        </View>
                    </View>

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
        backgroundColor: '#e7305b',
        padding: 15,
        textAlign: "justify"

    },
    content: {
        flex: 1,
        height: 300
    },
    imgWrapper: {
        flex: 0.79,

    },
    image: {
        borderRadius: 50,
        flex: 1,
        height: 300
    },
    para: {
        color: '#000',
        fontWeight: "500",
        fontFamily: "Changa-Regular",
        textAlign: "right",
        marginTop: 5,
        paddingHorizontal: 5
    },
    Btn: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'lightgrey',
        borderRadius: 50,
        backgroundColor: '#02C3EA',
        fontFamily: "Changa-Bold",

    }
});