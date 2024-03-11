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
import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';

const query = gql`
  query search($ingr: String, $upc: String) {
    search(ingr: $ingr, upc: $upc) {
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
  const [scannedCode, setScannedCode] = useState('');
  const [scannerEnabled, setScannerEnabled] = useState(false);

  const [runSearch, { data, loading, error }] = useLazyQuery(query);

  const [permission, requestPermission] = Camera.useCameraPermissions();

  //request only if permission is not granted, and we can ask again
  requestPermission();

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
  if (scannerEnabled) {
    return (
      <View>
        <Camera
          style={{ width: '100%', height: '100%' }}
          onBarCodeScanned={(data) => {
            runSearch({ variables: { upc: data.data } });
            setScannerEnabled(false);
          }}
        />
        <Ionicons
          onPress={() => setScannerEnabled(false)}
          style={{ position: 'absolute', right: 10, top: 10 }}
          name='close'
          size={30}
          color={'dimgrey'}
        />
      </View>
    );
  }

  const items = data?.search?.hints || [];

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <TextInput
          placeholder='Search...'
          style={styles.input}
          value={search}
          onChangeText={setSearch}
        />
        <Ionicons
          onPress={() => setScannerEnabled(true)}
          name='barcode-outline'
          size={32}
          color={'dimgrey'}
        />
      </View>
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
    flex: 1,
  },
});
