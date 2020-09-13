import React, { Component } from 'react';
import { StyleSheet,StatusBar, Text, View, Image, ImageBackground,Dimensions } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')

export default class Splash extends Component {
    render() {
        return (
            // <View style={styles.container} >

            <ImageBackground source={require('../assets/bg2.jpg')} style={styles.image}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true}/>
               
                <View style={styles.imgWrapper}>
                    <Image style={styles.img} source={require('../assets/logo1.png')} />
                </View>
                <View style={styles.subtitle}>
                    <Text style={styles.subtitleText}>Powered by </Text>
                    <Image style={styles.logo} source={require('../assets/logo.png')} />
                </View>
            </ImageBackground>
            // </View>

        );
    }

}
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     justifyContent: "center",
    //     alignItems: "center",
    // },
    img: {
        width: WIDTH - 5,
        display: "flex",
        justifyContent: "center",
        height: 130
    },
    logo: {
        width: 100,
        height: 30,
    },

    subtitle: {
        flexDirection: 'row', alignItems: "center",
        justifyContent: "center"
    },
    subtitleText: {
        color: 'gray',
        fontWeight: "700",
    },
    imgWrapper: {
        justifyContent: "center",
        flex: 0.9
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        // width:410

    },
});
