import * as React from 'react';
import { Text, View, StyleSheet, Image,  ScrollView , Row} from 'react-native';
import { Router, Stack, Scene, Actions} from 'react-native-router-flux';
import { TouchableRipple } from 'react-native-paper';

let childdata = require("../data/children.json");

export default class Children  extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data:childdata, enable:true};
    console.log(this.state.data.length);
  }

  _onPressButton(headername) {
    if(this.state.enable)
      Actions.details({title:headername});
  }
  
  disable(flag)
  {
    this.state.enable = !flag;
  }

  nothing()
  {

  }

  createdetail = () =>
  {
    let detail = [];

    for(let n=0; n < this.state.data.length; n++)
        detail.push(
            <View style={{width:"100%" , flex:1, flexDirection: 'row', alignContent:"center"}} >
            <Image style={{borderRadius:30, width:60, height:60, alignSelf:"center"}} source={require('../assets/images/student.jpg')} />
            <TouchableRipple disabled={!this.state.enable} onPress={this._onPressButton.bind(this,this.state.data[n].name) } style={{ backgroundColor:"white",width:"80%", alignSelf:"center"}}>
               
                <View  style={{  width:"100%", alignContent:"space-around"}} >
                  <Text style={{fontSize:20, fontWeight:"bold", textAlign:"left"}} alignItems> {this.state.data[n].name}</Text>
                  <Text style={{fontSize:15, fontWeight:"bold"}}> Concord Childrens Academy</Text>
                </View>
            </TouchableRipple>
            </View>

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
