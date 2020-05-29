import React, {Fragment} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

const Results = () => {
  const results = useSelector(state => state.results);

  const Item = ({name, score}) => {
    return (
      <View style={styles.item}>
        <View style={styles.col}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.text}>{score}</Text>
        </View>
      </View>
    );
  };

  return (
    <Fragment>
      <FlatList
        data={results.sort((a, b) => b.score - a.score)}
        renderItem={({item}) => <Item name={item.name} score={item.score} />}
        keyExtractor={(item, index) => item.name + index}
      />
    </Fragment>
  );
};
export default Results;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 15,
  },

  col: {
    flex: 1,
    alignSelf: 'stretch',
  },
  text: {
    fontSize: 30,
  },
});
