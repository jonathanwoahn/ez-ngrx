import { DynamicStoreConfig, DYNAMIC_DATA_PROVIDER } from 'dynamic-ngrx';
import { TodoDataService } from './todo-data.service';

export const config: DynamicStoreConfig = {
  entities: [{ entity: 'Todo' }],
  providers: [
    {
      multi: true,
      useClass: TodoDataService,
      provide: DYNAMIC_DATA_PROVIDER
    },
  ],
  enableOfflineSync: true,
  enableLogging: true,
};
