import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
//https://docs.nestjs.com/techniques/caching
//await this.cacheManager.set('key', 'value');
//const value = await this.cacheManager.get('key');

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}
  async getHello() {
    // await this.cacheManager.set('cached_item', { key: 32 });
    const cached_Item = await this.cacheManager.get('cached_item');
    console.log(cached_Item);
    return 'Hello World!';
  }
}
