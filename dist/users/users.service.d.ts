import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { MailService } from '../mail/mail.service';
import { LoginUserDto } from './dto/login-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { BusinessService } from '../business/business.service';
import { CreateBusinessDto } from '../business/dto/create-business.dto';
import { Business } from '../business/models/business.model';
export declare class UsersService {
    private readonly userRepo;
    private readonly jwtService;
    private readonly mailService;
    private readonly businesService;
    constructor(userRepo: typeof User, jwtService: JwtService, mailService: MailService, businesService: BusinessService);
    getTokens(user: User): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    registration(createUserDto: CreateUserDto, res: Response): Promise<{
        message: string;
        user: User;
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findAllUsers(): Promise<User[]>;
    findUserById(id: number): Promise<User>;
    findUser(findUserDto: FindUserDto): Promise<User[]>;
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    removeUser(id: number): Promise<number>;
    activate(link: string): Promise<{
        message: string;
        user: boolean;
    }>;
    login(loginuserDto: LoginUserDto, res: Response): Promise<{
        message: string;
        user: User;
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    logout(refreshToken: string, res: Response): Promise<{
        message: string;
        user_refreshToken: string;
    }>;
    refreshToken(userId: number, refreshToken: string, res: Response): Promise<{
        message: string;
        user: User;
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    addBusiness(userId: number, createBusinessDto: CreateBusinessDto, res: Response): Promise<Business>;
}
