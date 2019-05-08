import * as React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Constants } from 'expo';
import {  Actions} from 'react-native-router-flux';

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
    this.state =
    { enableMainView:true
    }
  }

  
  animateSideBar(width , duration)
  {
    this.refs.sidebar.animate(width, duration);
    if( width<=0)
    {
      this.refs.mainview.pointerEvents = 'auto';
      this.state.enableMainView = true;
      this.refs.children.disable(false);
    }
    else
    {
      this.refs.mainview.pointerEvents = 'none';
      this.state.enableMainView = false;
      this.refs.children.disable(true);
    }
  }

  touched(text)
  {
    alert('touched' + text)
  }
  touchedText()
  {
    alert('touched TEXT' )
  }

 goHome()
 {
   this.refs.sidebar.animate(0,400);
   Actions.main();
 }

  render() {
    return (
      <View ref='mainview' style={{ zIndex:0,  flexDirection: 'column'}} pointerEvents={this.state.enableMainView ? 'auto' : 'none'}>
        <View style={{}} pointerEvents={this.state.enableMainView ? 'auto' : 'none'}>
        <Card style={{height:"4%"}}>
        </Card>
        <Card style={{height:"6%"}} >
          <HeaderNav onAnimate={this.animateSideBar.bind(this)} pointerEvents={this.state.enableMainView ? 'auto' : 'none'} />
        </Card>
        <Card style={{height:"80%"}} >
          <Children ref='children' pointerEvents={this.state.enableMainView ? 'auto' : 'none'}/>
        </Card>
        <Card style={{height:"10%"}}>
          <BottomNav/>
        </Card>
      </View>
      
      <SideBarView ref='sidebar'  style={{zIndex:1,  position:"absolute", height:"100%"}} backgroundColor="red"  height="100%">
      
        <Card style={{height:"4%"}}  >
        </Card>
        <Card style={{height:"86%"}} backgroundColor ="red" onPress={this.touched} >
          <Text style={{fontSize:40}} onPress={this.goHome.bind(this)} >HOME</Text>
        </Card>
        <Card style={{height:"10%"}} onPress={this.touched} >
       
        </Card>   
        
        </SideBarView>
      </View>
      
    );
  }
}
