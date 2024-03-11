import { Link } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  ActivityIndicator,
} from 'react-native';
import { gql, useQuery } from '@apollo/client';
import dayjs from 'dayjs';
import FoodLogListItem from '../components/FoodLogListItem';

const query = gql`
  query foodLogsForDate($date: Date!, $user_id: String!) {
    foodLogsForDate(date: $date, user_id: $user_id) {
      id
      label
      user_id
      kcal
      food_id
      created_at
    }
  }
`;

export default function HomeScreen() {
  const user_id = 'vadim';
  const { data, loading, error } = useQuery(query, {
    variables: {
      date: dayjs().format('YYYY-MM-DD'),
      user_id,
    },
  });

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed to fetch data</Text>;
  }
  console.log(data);
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
        data={data.foodLogsForDate}
        renderItem={({ item }) => <FoodLogListItem item={item} />}
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
