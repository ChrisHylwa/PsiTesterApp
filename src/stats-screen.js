import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Alert, Button, FlatList} from 'react-native';
import { StackNavigator } from 'react-navigation'


export default class StatsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Successes'},
            {key: 'Attempts'},
            {key: 'Success Ratio'},
            {key: 'Rank'}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key} : </Text>}
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