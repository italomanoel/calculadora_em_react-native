/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local 

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
*/

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

export default class App extends Component {

  state = {
    displayValue: '0'
  }

  addDigital = n => {
    this.setState({ displayValue: n })
  }

  clearMemory = () => {
    this.setState({ displayValue: '0' })
  }

  setOperation = operation => {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Display value = {this.state.displayValue}/>
        <View style={styles.buttons}>
          <Button label = 'AC' triple onClick={this.clearMemory} />
          <Button label = '/' operation onClick={() => this.setOperation('/')}/>
          <Button label = '.' onClick = {() => this.addDigital('.')}/>  
          <Button label = '=' operation onClick={() => this.setOperation('=')}/>
          <Button label = '7' onClick = {() => this.addDigital(7)}/>
          <Button label = '8' onClick = {() => this.addDigital(8)}/>
          <Button label = '9' onClick = {() => this.addDigital(9)}/>
          <Button label = '*' operation onClick={() => this.setOperation('*')}/>
          <Button label = '4' onClick = {() => this.addDigital(4)}/>
          <Button label = '5' onClick = {() => this.addDigital(5)}/>
          <Button label = '6' onClick = {() => this.addDigital(6)}/>
          <Button label = '-' operation onClick={() => this.setOperation('-')}/>
          <Button label = '1' onClick = {() => this.addDigital(1)}/>
          <Button label = '2' onClick = {() => this.addDigital(2)}/>
          <Button label = '3' onClick = {() => this.addDigital(3)}/>
          <Button label = '+' operation onClick={() => this.setOperation('+')}/>
          <Button label = '0' onClick = {() => this.addDigital(0)}/>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});


