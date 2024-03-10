import { Link } from 'expo-router';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import FoodListItem from '../components/FoodListItem';

const foodItems = [
  {
    food: { label: 'Pizza', nutrients: { ENERC_KCAL: 100 }, brand: 'Dominos' },
  },
  {
    food: { label: 'Pizza', nutrients: { ENERC_KCAL: 100 }, brand: 'Dominos' },
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.text}>Calories</Text>
        <Text>1770 - 360 = 1692</Text>
      </View>
      <View style={styles.headerRow}>
        <Text style={styles.text}>Today's food</Text>
        <Link href={'./search'} asChild>
          <Button title='ADD FOOD' />
        </Link>
      </View>
      <FlatList
        contentContainerStyle={{ gap: 5 }}
        data={foodItems}
        renderItem={({ item }) => <FoodListItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    gap: 10,
  },
  text: {
    fontSize: 18,
    flex: 1,
    fontWeight: '500',
    color: 'dimgrey',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
