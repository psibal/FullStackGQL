import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

// Schemas
import ResolutionsSchema from "../../api/resolutions/resolution.graphql";
import UsersSchema from '../../api/users/User.graphql';
import GoalsSchema from '../../api/goals/Goal.graphql'
// Resolvers
import ResolutionsResolvers from "../../api/resolutions/resolvers";
import UsersResolvers from '../../api/users/resolvers';
import GoalsResolver from '../../api/goals/resolvers'

// testtesttest
const typeDefs = [ResolutionsSchema, UsersSchema, GoalsSchema];

const resolvers = merge( 
  ResolutionsResolvers, 
  UsersResolvers,
  GoalsResolver
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
