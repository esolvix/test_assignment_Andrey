import ApolloClient from 'apollo-boost';
import { apollo } from '../../config';

const client = new ApolloClient({
  uri: apollo.APOLLO_URI,
});

export default client;
