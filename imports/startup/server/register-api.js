import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

// Schemas
import ResolutionsSchema from "../../api/resolutions/resolution.graphql";
import UsersSchema from '../../api/users/User.graphql';
// Resolvers
import ResolutionsResolvers from "../../api/resolutions/resolvers";
import UsersResolvers from '../../api/users/resolvers';

const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
  user: User
}
`;
//


const typeDefs = [testSchema, ResolutionsSchema, UsersSchema];

const testResolvers = {
  Query: {
    hi() {
      return "Hello Level Up";
    }
  }
};

const resolvers = merge(
  testResolvers, 
  ResolutionsResolvers, 
  UsersResolvers
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
