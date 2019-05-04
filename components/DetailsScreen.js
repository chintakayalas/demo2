import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';


export default class DetailsScreen  extends React.Component {
  render() {
    return (
      <ScrollView>
         <View >
          <View  style={{ backgroundColor:"powderblue", height:"50%", width:"100%", alignContent:"top"}}>
            <Text style={{fontSize:20, fontWeight:"bold"}}> Nap Started</Text>
          </View>
          <View  style={{ backgroundColor:"powderblue", height:"50%", width:"100%", alignContent:"top"}}>
            <Text style={{fontSize:20, fontWeight:"bold"}}> Nap Ended</Text>
          </View>
         </View>
      </ScrollView>
    );
  }
}
