import { MikroORM } from '@mikro-orm/core';
import config from '../mikro-orm.config';

export default (async () => {
  const mikroorm = await MikroORM.init(config);

  return mikroorm;
})();
