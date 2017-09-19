import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Alert, Button, FlatList} from 'react-native';
import { StackNavigator } from 'react-navigation'


export default class StatsScreen extends React.Component {


  constructor(props){
    super(props)
    this.state = {attempts: 0, successes: 0};
  }

  render() {

    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Successes', value: this.state.successes},
            {key: 'Attempts', value: this.state.attempts},
            {key: 'Success Ratio', value: this.state.successes/this.state.attempts},
            {key: 'Rank', value: ''}
          ]}
          renderItem={({item}) => 
            <Text style={styles.item}>{item.key} : {item.value}
            </Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})