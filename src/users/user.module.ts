import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
// import { User } from './user.model';
import { MailModule } from '../mail/mail.module';
import { User } from './models/user.model';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    JwtModule.register({}),
    MailModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
