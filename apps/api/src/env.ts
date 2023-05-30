import { config } from 'dotenv-flow';

export const loadEnv = () => {
  config({
    silent: true,
    default_node_env: 'development',
  });
};
