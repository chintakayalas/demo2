import React from 'react';
import { Animated, Text, View } from 'react-native';

export default class SideBarView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    //this.animate(0, 500);
  }

  animate(width, dur){
    Animated.timing(                  // Animate over time
        this.state.fadeAnim,            // The animated value to drive
        {
          toValue: width,                   // Animate to opacity: 1 (opaque)
          duration: dur,              // Make it take a while
        }
      ).start();                        // Starts the animation
  }


  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          width: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}


