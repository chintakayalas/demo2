import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';


export default class DetailsScreen  extends React.Component {
  render() {
    return (
      <ScrollView>
         <View >
          <View   style={{ flex:1, flexDirection: 'row', backgroundColor:"powderblue",  height:"50%", width:"100%", alignContent:"top"}}>

            <Text style={{fontSize:17, fontWeight:"bold", width:"50%", alignContent:"flex-end"}}> May 7th, 2019</Text>
            <Text style={{fontSize:17, width:"50%", backgroundColor:"blue", color:"white", textAlign:"right" ,fontWeight:"bold"}}> Daily Report</Text>
          </View>
          <View  style={{ height:"50%", width:"100%", flexDirection:'row', alignContent:"top"}}>
            <Image style={{height:50, width:50, alignSelf:"center" }} source={require('../assets/images/checkedin.png')}></Image>
            <Text style={{fontSize:20, fontWeight:"bold", alignSelf:"center" }}> Checked-In</Text>
            <Text style={{fontSize:15, color:"blue", fontWeight:"bold", alignSelf:"center" }}> 09:30 AM </Text>
          </View>
          <View   style={{ flex:1, flexDirection: 'row', backgroundColor:"powderblue",  height:"50%", width:"100%", alignContent:"top"}}>
          <Text style={{fontSize:17, fontWeight:"bold", width:"50%", alignContent:"flex-end"}}> May 8th, 2019</Text>
          <Text style={{fontSize:17, width:"50%", backgroundColor:"blue", color:"white", textAlign:"right" ,fontWeight:"bold"}}> Daily Report</Text>
          </View>
          <View  style={{ height:"50%", width:"100%", alignContent:"top"}}>
          <Text style={{fontSize:20, fontWeight:"bold"}}> Nap Ended</Text>
          </View>
         </View>
      </ScrollView>
    );
  }
}
