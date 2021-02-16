import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IAutoEntityService, IEntityInfo } from '@briebug/ngrx-auto-entity';
import { SocketClientService } from '@residentialreporter/services/socket-client/socket-client.service';

@Injectable()
export class EntityService implements IAutoEntityService<any> {
    constructor(private socket: SocketClientService) {
    }

    load(entityInfo: IEntityInfo, uuid: any): Observable<any> {
        console.log('[ENTITYSERVICE] Getting:', entityInfo, uuid);
        return this.socket.get(
            entityInfo.modelName, uuid
        );
    }

    loadAll(entityInfo: IEntityInfo): Observable<any[]> {
        return this.socket.search(entityInfo.modelName, '*');
    }

    create(entityInfo: IEntityInfo, entity: any): Observable<any> {
        entity.uuid = 'create';
        return this.socket.post(entityInfo.modelName, entity);
    }

    update(entityInfo: IEntityInfo, entity: any): Observable<any> {
        return this.socket.put(entityInfo.modelName, entity);
    }

    delete(entityInfo: IEntityInfo, entity: any): Observable<any> {
        return this.socket.delete(
            entityInfo.modelName, entity.uuid
        ).pipe(map(() => entity));
    }
}
