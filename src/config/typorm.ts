// import { config as dotenvConfig } from 'dotenv';
// import { DataSource, DataSourceOptions } from 'typeorm';
// import { registerAs } from '@nestjs/config';

// dotenvConfig({ path: '.env.development' });
// const config = {
//   type: 'postgres',
//   database: process.env.DB_NAME,
//   host: process.env.DB_HOST as unknown as number,
//   port: process.env.DB_PORT,
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   autoLoadEntities: true,
//   synchronize: true,
//   logging: true,
//   entities: ['dist/**/*.entity{.ts,.js}'],
//   migrations: ['dist/migrations/*{.ts,.js}'],
// };
// export default registerAs('typeorm', () => config);
// export const connectionSorce = new DataSource(config as DataSourceOptions);
