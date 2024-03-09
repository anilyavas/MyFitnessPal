import { StyleSheet, Text, View } from 'react-native';
import FoodListItem from '../components/FoodListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <FoodListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
});
