/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local 
*/
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false, 
  operation: null, //tipo de operação (soma, subtração).
  values: [0, 0],
  current: 0, //indica indice do array values.
}

export default class App extends Component {

  state = { ...initialState } //operador spread do javascript. Criação de outro objeto (state) com os valores de initialState

  addDigit = number => {
    /* console.debug(typeof this.state.addDigit); */
    //impedindo que tenha mais de um ponto. Basicamente validações para bloquear operações como mais de um ponto.
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
    if( number === '.' && !clearDisplay && this.state.displayValue.includes('.')) {
      return
    }
    const currentValue = clearDisplay ? '' : this.state.displayValue //o valor atual que está no displayValue
    const displayValue = currentValue + number
    this.setState({ displayValue, clearDisplay: false })

    if(number !== '.') {
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values] //spread no javascript
      values[this.state.current] = newValue //setando novo valor dentro do array criado.
      this.setState({values}) //mudando o estado
    }
  }

  clearMemory = () => {
    //setando o estado inicial, ao invés de usar this.setState({ displayValue: '0'}) onde setaria apenas o zero e não o estado completo
    this.setState({ ...initialState }) 
  }

  setOperation = operation => {
    /*usar 'react-native debug-android' no terminal
    console.debug(typeof this.state.setOperation); */
    console.debug(typeof this.state.setOperation);
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true })
    } else {
      const equals = operation === '='
      const values = [...this.state.values]
      
      try{
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      } catch (erro) {
        values[0] = this.state.values[0]
      }

      values[1] = 0
      this.setState({
        displayValue: `${values[0]}`, //interpolando ele sempre será uma string
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true, //!equals também será true
        values,
      })
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Display value = {this.state.displayValue}/>
        <View style={styles.buttons}>
          <Button label='AC' triple onClick={this.clearMemory} />
          <Button label='/' operation onClick={this.setOperation} />
          <Button label='7' onClick={this.addDigit} />
          <Button label='8' onClick={this.addDigit} />
          <Button label='9' onClick={this.addDigit} />
          <Button label='*' operation  onClick={this.setOperation} />
          <Button label='4' onClick={this.addDigit} />
          <Button label='5' onClick={this.addDigit} />
          <Button label='6' onClick={this.addDigit} />
          <Button label='-' operation onClick={this.setOperation} />
          <Button label='1' onClick={this.addDigit} />
          <Button label='2' onClick={this.addDigit} />
          <Button label='3' onClick={this.addDigit} />
          <Button label='+' operation onClick={this.setOperation} />
          <Button label='0' double  onClick={this.addDigit} />
          <Button label='.' onClick={this.addDigit} />
          <Button label='=' operation onClick={this.setOperation} />
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