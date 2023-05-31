import { get } from 'env-var';
import { loadEnv } from './env';

loadEnv();

export const getRequired = (env: string) => get(env).required();

export const config = {
  get appEnv() {
    return getRequired('APP_ENV').asEnum([
      'test',
      'development',
      'staging',
      'production',
    ]);
  },
  get nodeEnv() {
    return getRequired('NODE_ENV').asEnum([
      'development',
      'test',
      'production',
    ]);
  },
  get dbUrl() {
    return getRequired('DATABASE_URL').asString();
  },
};
