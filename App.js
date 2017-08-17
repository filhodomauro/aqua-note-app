import React from 'react';
import { Text, Navigator, NativeModules, View, StyleSheet } from 'react-native';
import { COLOR, ThemeProvider, Card, Toolbar } from 'react-native-material-ui';
import AquariumList from './AquariumList';

const uiTheme = {
   palette: {
       primaryColor: COLOR.blue500,
       accentColor: COLOR.blue900
   },
   toolbar: {
    container: {
      height: 80,
      paddingTop:30
    },
   }
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
});

export default class Main extends React.Component {
  render() {
    return (
        <ThemeProvider uiTheme={uiTheme}>
            <App />
        </ThemeProvider>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Toolbar
          leftElement="menu"
          centerElement="Aquários"
      />
        <AquariumList />
      </View>
    );
  }
}
