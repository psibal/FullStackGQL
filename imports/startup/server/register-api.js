import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import ResolutionsSchema from "../../api/resolutions/resolution.graphql";
import ResolutionsResolvers from "../../api/resolutions/resolvers";
import UsersSchema from '../../api/users/User.graphql';

const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
}
`;

const typeDefs = [testSchema, ResolutionsSchema, UsersSchema];

const testResolvers = {
  Query: {
    hi() {
      return "Hello Level Up";
    }
  }
};

const resolvers = merge(testResolvers, ResolutionsResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
