import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
// import { UsersModule } from './users/users.module';
// import { User } from './users/models/user.model';
// import { MailModule } from './mail/mail.module';
// import { Admin } from './admin/models/admin.entity';
// import { BotModule } from './bot/bot.module';
// import { TelegrafModule } from 'nestjs-telegraf';
// import { BOT_NAME } from './app.constants';
import { SmallCategoryModule } from './small_category/small_category.module';
import { BigCategoryModule } from './big_category/big_category.module';
import { BusinessModule } from './business/business.module';
import { WorkTimeModule } from './work_time/work_time.module';
import { OwnerModule } from './owner/owner.module';
import { OrderModule } from './order/order.module';
import { CommentaryModule } from './commentary/commentary.module';
import { StarsModule } from './stars/stars.module';
import { AddressModule } from './address/address.module';
import { Address } from './address/model/address.model';
import { BigCategory } from './big_category/models/big_category.model';
import { Business } from './business/models/business.model';
import { Commentary } from './commentary/models/commentary.model';
import { Order } from './order/models/order.model';
import { Owner } from './owner/models/owner.model';
import { SmallCategory } from './small_category/models/small_category.model';
import { Star } from './stars/models/star.model';
import { WorkTime } from './work_time/models/work_time.model';
import { OrderDetailModule } from './order_detail/order_detail.module';
import { OrderDetail } from './order_detail/models/order_detail.model';
import { ProductOrServiceModule } from './product_or_service/product_or_service.module';
import { ProductOrService } from './product_or_service/models/product_or_service.model';
import { UsersModule } from './users/user.module';
import { User } from './users/models/user.model';
import { Admin } from './admin/models/admin.model';
import { AdminModule } from './admin/admin.module';



@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Admin, Address, BigCategory, Business, User, Commentary, Order, OrderDetail, Owner, SmallCategory, Star, WorkTime, ProductOrService],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    // TelegrafModule.forRootAsync({
    //   botName: BOT_NAME,
    //   useFactory: () => ({
    //     token: process.env.BOT_TOKEN,
    //     middlewares: [],
    //     include: [BotModule],
    //   }),
    // }),
    // UsersModule,
    // MailModule,
    // BotModule,
    SmallCategoryModule,
    BigCategoryModule,
    BusinessModule,
    WorkTimeModule,
    OwnerModule,
    OrderModule,
    CommentaryModule,
    StarsModule,
    UsersModule,
    OrderDetailModule,
    AddressModule,
    ProductOrServiceModule,
    AdminModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
