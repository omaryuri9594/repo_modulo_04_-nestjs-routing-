import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
// import { CategoriesModule } from './categories/categories.module';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import typeOrmConfig from './config/typorm';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { LoggerGlobal } from './middleware/midleware';
@Module({
  imports: [
    //   ConfigModule.forRoot({
    //     isGlobal: true,
    //     load: [typeOrmConfig],
    //   }),
    // TypeOrmModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) =>
    //     configService.get('typeorm'),
    // }),
    ProductModule,
    UsersModule,
    // CategoriesModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerGlobal)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
// export class UsersModule implements NestModule {
//     configure(consumer: MiddlewareConsumer) {
//       consumer.apply(LoggerGlobal).forRoutes('users');
//     }
//   }
