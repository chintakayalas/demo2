import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Router, Stack, Scene, Actions} from 'react-native-router-flux';
import { Constants } from 'expo';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import MainScreen from './components/MainScreen';
import DetailsScreen from './components/DetailsScreen';

const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="main" component={MainScreen} hideNavBar activeBackgroundColor="powderblue" title="Main"  initial />
      <Scene key="details" component={DetailsScreen} title="detail" />
    </Stack>
  </Router>
);

/*export default class App extends React.Component {
  render() {
    return (
      <View>
        <Card style={{height:"100%"}}>
           <MainScreen></MainScreen>
        </Card>
      </View>
    );
  }
}*/


export default App;
