import { View, Text, StyleSheet } from 'react-native';

const FoodLogListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>{item.label}</Text>
        <Text style={styles.secondText}>{item.kcal} cal</Text>
      </View>
    </View>
  );
};

export default FoodLogListItem;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f8',
    padding: 10,
    borderRadius: 5,
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondText: {
    color: 'dimgrey',
  },
});
