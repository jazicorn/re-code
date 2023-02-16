import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class TodoService {
    constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}
    async getHello() {
        // await this.cacheManager.set('cached_item', { key: 32 });
        const cached_Item = await this.cacheManager.get('cached_item');
        console.log(cached_Item);

        return 'Hello World!';
    }
}
