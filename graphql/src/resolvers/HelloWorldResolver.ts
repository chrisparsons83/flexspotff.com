import { Query, Resolver } from 'type-graphql';

@Resolver()
export default class HelloWorldResolver {
  @Query(() => String)
  hello(): string {
    return 'hi!';
  }
}
