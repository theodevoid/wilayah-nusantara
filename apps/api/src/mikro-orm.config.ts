import { defineConfig } from '@mikro-orm/mysql';
import { config } from './config';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

export default defineConfig({
  type: 'mysql',
  clientUrl: config.dbUrl,
  entities: ['./dist/**/*.entity.js', './dist/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts', './src/*.entity.ts'],
  metadataProvider: TsMorphMetadataProvider,
  migrations: {
    snapshot: false,
    path: './dist/src/migrations',
    pathTs: './src/migrations',
    disableForeignKeys: false,
    allOrNothing: true,
  },
  logger: undefined,
  driverOptions:
    config.appEnv === 'development'
      ? undefined
      : {
          connection: {
            ssl: {},
          },
        },
});
