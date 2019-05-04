import * as React from 'react';
import { Text, View, StyleSheet, Image,  TouchableHighlight, Alert} from 'react-native';
import { Router, Stack, Scene, Actions} from 'react-native-router-flux';
import PropTypes from 'prop-types';

export default class HeaderNav extends React.Component {

  _onPressButton() {
        this.props.onAnimate(200,400);
  }

  constructor(props)
  {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={{ flexDirection: 'column',  justifyContent:"space-evenly", margin:0}}>
            <View style={{height: "10%"}}>
              <View style={{ flexDirection: 'row',  height:"10%",  justifyContent:'flex-start'}}>
                <TouchableHighlight onPress={this._onPressButton.bind(this)} style={{ width:"10%", height:50, backgroundColor: 'powderblue'}}>
                  <View  style={{ width:"10%", height:50, backgroundColor: 'powderblue'}} >
                    <Text style={{  textAlign:"center"}}>___</Text>
                  </View>
                </TouchableHighlight>
                <View style={{width: "80%", height: 50, backgroundColor: 'skyblue'}} >
                  <Text style={{  textAlign:"center", fontSize:20, marginTop:10, fontWeight:"bold"}}>My Children</Text>
                </View>
                <View style={{width: "10%", height: 50, backgroundColor: 'steelblue'}} />
              </View>
            </View>

        </View>
 
      </View>
    );
  }
}

HeaderNav.propTypes={
  onAnimate: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    padding: 24,
    
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
   navfont: {
    margin: 0,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
  }, 
    headerfont: {
    margin: 10,
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});