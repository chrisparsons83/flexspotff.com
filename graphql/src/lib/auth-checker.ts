import { AuthChecker } from 'type-graphql';
import User from '../entities/User';
import { GraphQLContext } from '../types';

const customAuthChecker: AuthChecker<GraphQLContext> = async ({ context }, roles) => {
  // here we can read the user from context
  // and check his permission in the db against the `roles` argument
  // that comes from the `@Authorized` decorator, eg. ["ADMIN", "MODERATOR"]
  const { userId } = context.request;

  if (roles.length === 0) {
    return !!userId;
  }

  // Get user object
  const user = await context.em.findOne(User, { _id: userId });
  if (!user) return false;

  if (user.role && roles.includes(user.role)) {
    return true;
  }

  return false; // or false if access is denied
};

export default customAuthChecker;
