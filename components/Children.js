import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, ScrollView , Row} from 'react-native';
import { Router, Stack, Scene, Actions} from 'react-native-router-flux';

let childdata = require("../data/children.json");

export default class Children  extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data:childdata};
    console.log(this.state.data.length);
    

  }

  _onPressButton() {
    Actions.details();
  }
  
  createdetail = () =>
  {
    let detail = [];

    for(let n=0; n < this.state.data.length; n++)
detail.push(

<TouchableHighlight onPress={this._onPressButton} style={{ backgroundColor:"white",width:"100%"}}>
<View  style={{  width:"100%", alignContent:"top"}}>

  <Text style={{fontSize:30, fontWeight:"bold"}}> {this.state.data[n].name}</Text>
</View>
</TouchableHighlight>

);

    return detail;
  }

  render() {


    return (

      <ScrollView  vertical={true}  scrollEnabled={true} showsVerticalScrollIndicator={true}>
        <View>
{this.createdetail()}
</View> 
         
      </ScrollView>

    );
  }
}
