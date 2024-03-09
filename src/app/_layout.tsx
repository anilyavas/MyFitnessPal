import { Stack } from 'expo-router';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://campigliamarittima.stepzen.net/api/youngling-horse/__graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      'apikey campigliamarittima::stepzen.io+1000::e8f1f13d8a937cc4f7e68c32a1cbef64070a0143ee2bb5d22b09933c06eab84d',
  },
});
const RootLayout = () => {
  return (
    <ApolloProvider client={client}>
      <Stack />
    </ApolloProvider>
  );
};

export default RootLayout;
