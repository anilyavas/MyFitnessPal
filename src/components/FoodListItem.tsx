import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const FoodListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>{item.food.label}</Text>
        <Text style={styles.secondText}>
          {item.food.nutrients.ENERC_KCAL} cal, {item.food.brand}
        </Text>
      </View>
      <AntDesign name='pluscircleo' size={24} color={'royalblue'} />
    </View>
  );
};

export default FoodListItem;
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
