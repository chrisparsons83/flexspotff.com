import { AuthChecker } from 'type-graphql';
import { GraphQLContext } from '../types';

const customAuthChecker: AuthChecker<GraphQLContext> = () => {
  // here we can read the user from context
  // and check his permission in the db against the `roles` argument
  // that comes from the `@Authorized` decorator, eg. ["ADMIN", "MODERATOR"]

  return true; // or false if access is denied
};

export default customAuthChecker;
