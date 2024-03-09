import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import FoodListItem from '../components/FoodListItem';
import { useState } from 'react';

const foodItems = [
  { label: 'Pizza', cal: '75', brand: 'Dominos' },
  { label: 'Apple', cal: '50', brand: 'Generic' },
  { label: 'Coffee', cal: '100', brand: 'Americano' },
  { label: 'Coffee', cal: '100', brand: 'Americano' },
];

// application id 80a7aa05
// api key 2d70dcf7025bf16962d7b02e3648bbe1

export default function App() {
  const [search, setSearch] = useState('');

  const performSearch = () => {
    console.warn('searching for', search);
    setSearch('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Search...'
        style={styles.input}
        value={search}
        onChangeText={setSearch}
      />
      {search && <Button title='Search' onPress={performSearch} />}
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
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    gap: 10,
  },
  input: {
    backgroundColor: '#F2F2F2',
    padding: 10,
    borderRadius: 20,
  },
});
