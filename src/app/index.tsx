import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';
import FoodListItem from '../components/FoodListItem';
import { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

const query = gql`
  query search($ingr: String) {
    search(ingr: $ingr) {
      text
      hints {
        food {
          label
          brand
          foodId
          nutrients {
            ENERC_KCAL
          }
        }
      }
    }
  }
`;

export default function SearchScreen() {
  const [search, setSearch] = useState('');

  const [runSearch, { data, loading, error }] = useLazyQuery(query, {
    variables: { ingr: 'Pizza' },
  });

  const performSearch = () => {
    runSearch({ variables: { ingr: search } });
    //setSearch('');
  };

  //if (loading) {
  //  return <ActivityIndicator />;
  //}

  if (error) {
    return <Text>Failed to search</Text>;
  }

  const items = data?.search?.hints || [];

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Search...'
        style={styles.input}
        value={search}
        onChangeText={setSearch}
      />
      {search && <Button title='Search' onPress={performSearch} />}
      {loading && <ActivityIndicator />}
      <FlatList
        contentContainerStyle={{ gap: 5 }}
        data={items}
        ListEmptyComponent={() => <Text>Search a food</Text>}
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
