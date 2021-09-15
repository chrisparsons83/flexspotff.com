import { Arg, Mutation, Resolver } from 'type-graphql';

@Resolver()
export default class PodcastEpisodeResolver {
  @Mutation(() => Boolean)
  createPodcastEpisode(
    @Arg('title') title: string,
    @Arg('description') description: string,
  ): boolean {
    console.log(title);
    console.log(description);
    return true;
  }
}
