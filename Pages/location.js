import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export default class location extends Component {
    // getInitialState() {
    //     return {
    //       region: {
    //         latitude: 37.78825,
    //         longitude: -122.4324,
    //         latitudeDelta: 0.0922,
    //         longitudeDelta: 0.0421,
    //       },
    //     };
    //   }

    //   onRegionChange(region) {
    //     this.setState({ region });
    //   }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    style={styles.map}
                />
                   {/* <MapView
                region={this.state.region}
                onRegionChange={this.onRegionChange}
                style={styles.map}
              /> */}
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    map: {
        width: "100%",
        height: "100%"
    }
})