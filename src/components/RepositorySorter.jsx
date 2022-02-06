import React from 'react';
import { StyleSheet } from 'react-native';
import { Picker } from "@react-native-picker/picker";

const styles = StyleSheet.create({
  picker: {
    height: 50
  }
});

const RepositorySorter = ({ sorting, setSorting }) => {
  return (
    <Picker
      selectedValue={sorting}
      style={styles.picker}
      onValueChange={(itemValue, itemIndex) =>
        setSorting(itemValue)
      }>
      <Picker.Item label="Lastest repositories" value="latest" />
      <Picker.Item label="Highest rated repositories" value="highestRated" />
      <Picker.Item label="Lowest rated repositories" value="lowestRated" />
    </Picker>
  );
};

export default RepositorySorter;