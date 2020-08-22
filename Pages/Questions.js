import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Container, H3, DeckSwiper, Card, CardItem, Button, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import FooterSection from '../shared/FooterSection';
import TimedSlideshow from 'react-native-timed-slideshow';
 
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

export default class Questions extends Component {
    render() {
        
const items = [
    {
        uri: "http://www.lovethemountains.co.uk/wp-content/uploads/2017/05/New-Outdoor-Sports-and-Music-Festival-For-Wales-4.jpg",
        title: "Michael Malik",
        text: "Minnesota, USA",
    },
    {
        uri: "http://blog.adrenaline-hunter.com/wp-content/uploads/2018/05/bungee-jumping-barcelona-1680x980.jpg",
        title: "Victor Fallon",
        text: "Val di Sole, Italy",
        duration: 3000
    },
    {
        uri: "https://greatist.com/sites/default/files/Running_Mountain.jpg",
        title: "Mary Gomes",
        text: "Alps",
        fullWidth: true
    }
]
        return (
            <Container>
                <View style={styles.content}>
                    <View style={{ flex: 1 , padding:5}}>
                    <TimedSlideshow
                items={items}
            />
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
        // justifyContent: "center",
        // alignItems: "center",
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
        fontFamily: "CircularStd-Book",
        textAlign: "justify",
        marginTop: 5,
        paddingHorizontal: 5
    },
    Btn: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'lightgrey',
        borderRadius: 50,
        backgroundColor: '#e7305b'
    }
});