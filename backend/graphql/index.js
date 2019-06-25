import { ApolloServer } from 'apollo-server-express';

import { types, mutations } from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
  typeDefs: `
    ${types}
    ${mutations}
  `,
  resolvers,
});

export default server;
