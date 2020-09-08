import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';

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
            <View>
                <MapView
        style={styles.map}
       provider={PROVIDER_GOOGLE}
         
         initialRegion={{
         latitude: 26.393110,
         longitude:  43.920857,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421}}
      >
     <Marker
    //  draggable
     coordinate={{
       latitude:  26.393110,
       longitude:   43.920857,
     }}
//      onDragEnd={(e) => 
//  console.log(JSON.stringify(e.nativeEvent.coordinate))
// }
     title={'مركز فيجن التخصصي للعيون'}
    //  description={'This is a description of the marker'}
   />
      </MapView>

                {/* <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    style={styles.map}
                /> */}
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
