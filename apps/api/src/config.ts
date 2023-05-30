import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    mysql: {
      databaseUrl: process.env.DATABASE_URL,
    },
  };
});
