import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';


// You can import from local files
import HeaderNav from './HeaderNav';
// You can import from local files
import BottomNav from './BottomNav';
// You can import from local files
import Children from './Children';
import SideBarView from './AnimatedView';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default class MainScreen  extends React.Component {

  constructor(props) {
    super(props);
    this.animateSideBar = this.animateSideBar.bind(this);
  }

  animateSideBar(width , duration)
  {
    this.refs.sidebar.animate(width, duration);

  }

  render() {
    return (
      <View style={{ zIndex:0, flexDirection: 'column'}}>
        <View style={{}} >
        <Card style={{height:"4%"}}>
        </Card>
        <Card style={{height:"6%"}}>
          <HeaderNav onAnimate={this.animateSideBar.bind(this)}/>
        </Card>
        <Card style={{height:"80%"}}>
          <Children/>
        </Card>
        <Card style={{height:"10%"}}>
          <BottomNav/>
        </Card>
      </View>
      
      <SideBarView ref='sidebar'  style={{zIndex:1,  position:"absolute", height:"100%"}} backgroundColor="red"  height="100%">
        <Card style={{height:"4%"}}>
        </Card>
        <Card style={{height:"86%"}} backgroundColor ="red">
          <Text style={{}}>Payments</Text>
        </Card>
        <Card style={{height:"10%"}}>
       
        </Card>   
        </SideBarView>
      </View>
    );
  }
}
