import { Query, Resolver } from 'type-graphql';

@Resolver()
export default class HelloWorldResolver {
  @Query(() => String)
  // eslint-disable-next-line class-methods-use-this
  hello(): string {
    return 'hi!';
  }
}
