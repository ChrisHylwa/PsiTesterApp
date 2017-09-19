//home-screen.js

import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, Alert, Button, TouchableHighlight} from 'react-native';
import { StackNavigator, } from 'react-navigation'

class SubmitText extends React.Component {
  constructor(props){
    super(props);
    this.state = {revealed: false, card: ''}
  }

  render() {
    let display = this.state.revealed ? 'Heck off' : this.props.text;

    return (
      <Text>{display}</Text>
    );
  }
}

class PredictCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {revealed: false}
  }

  reveal() {source=require('../img/150px-circle-card.png')}

  render() {
    return(
      <Image
        source={require('../img/150px-blank-card.png')}
      />
    );
  }
}

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {attempts: 0, successes: 0, guess: '', card: '', revealed: false};
    this._onSubmit = this._onSubmit.bind(this);
    this._onChooseCircle = this._onChooseCircle.bind(this);
    this._onChooseCross = this._onChooseCross.bind(this);
    this._onChooseWave = this._onChooseWave.bind(this);
    this._onChooseStar = this._onChooseStar.bind(this);
    this._onChooseSquare = this._onChooseSquare.bind(this);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (

      <View style={styles.container}>
        <PredictCard/>

        <View style={styles.cardrow_top}>
          <TouchableHighlight onPress={this._onChooseCircle}>
            <Image
              source={require('../img/50px-circle-card.png')}
            />
          </TouchableHighlight>

          <TouchableHighlight onPress={this._onChooseCross}>
            <Image
              source={require('../img/50px-cross-card.png')}
            />
          </TouchableHighlight>

          <TouchableHighlight onPress={this._onChooseWave}>
            <Image
              source={require('../img/50px-wave-card.png')}
            />
          </TouchableHighlight>

        </View>

        <View style={styles.cardrow_bottom}>

          <TouchableHighlight onPress={this._onChooseStar}>
            <Image
              source={require('../img/50px-star-card.png')}
            />
          </TouchableHighlight>

          <TouchableHighlight onPress={this._onChooseSquare}>
            <Image
              source={require('../img/50px-square-card.png')}
            />
          </TouchableHighlight>

        </View>

        <View style={styles.buttons}>  

          <Button
            onPress={(this._onSubmit)}
            title='Reveal!'
          />

          <Button
            title='See your Stats!'
            onPress={() => 
              navigate('Stats', {attempts: this.state.attempts, successes: this.state.successes})
            }
          />

        </View>

        <Text> Chosen Card: {this.state.guess} </Text>
        <Text> Attempts: {this.state.attempts} </Text>
        <Text> Correct: {this.state.successes} </Text>
        <Text> Last Card: {this.state.card} </Text>
      </View>
    );
  }

  _onChooseCircle(){
    this.setState({
      guess: 'square'
    });
  }

  _onChooseCross(){
    this.setState({
      guess: 'cross'
    });
  }

  _onChooseWave(){
    this.setState({
      guess: 'wave'
    });
  }

  _onChooseStar(){
    this.setState({
      guess: 'star'
    });
  }

  _onChooseSquare(){
    this.setState({
      guess: 'square'
    });
  }

  _onSubmit() {
    var cards = ['circle', 'star', 'wave', 'square', 'cross'];
    newCard = cards[Math.floor(Math.random() * cards.length)];

    var succeed = this.state.successes
    if (newCard == this.state.guess) {
      succeed = this.state.successes + 1
    }

    this.setState({
      attempts: this.state.attempts + 1,
      successes: succeed,
      card: newCard
    });
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardrow_top: {
    flex: 1,
    width: 200,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  cardrow_bottom:
  {
    flex:1,
    width: 150,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  buttons:
  {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  text:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
});
