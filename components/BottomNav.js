import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default class BottomNav extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: 'column',  justifyContent:"space-evenly"}}>
          <View style={{height: "10%"}}>
            <View style={{ flexDirection: 'row', height:"90%",justifyContent:'flex-end'}}>
              <View style={{width: "100%", height: 50, backgroundColor: 'skyblue'}} >
                <Text style={{  textAlign:"center", fontSize:20, marginTop:10, fontWeight:"bold"}}>Checkin/Checkout</Text>
              </View>
              </View>
          </View>
      </View>
    );
  }
}
