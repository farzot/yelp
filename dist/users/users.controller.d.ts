import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { User } from './models/user.model';
import { LoginUserDto } from './dto/login-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { Business } from '../business/models/business.model';
import { CreateBusinessDto } from '../business/dto/create-business.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    registration(createUserDto: CreateUserDto, res: Response): Promise<{
        message: string;
        user: User;
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    activate(link: string): Promise<{
        message: string;
        user: boolean;
    }>;
    login(loginUserDto: LoginUserDto, res: Response): Promise<{
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
    refresh(id: number, refreshToken: string, res: Response): Promise<{
        message: string;
        user: User;
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    findOne(id: string): Promise<User>;
    findAll(): Promise<User[]>;
    findUser(finduserDto: FindUserDto): Promise<User[]>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<number>;
    addBusiness(createBusinessDto: CreateBusinessDto, res: Response, id: string): Promise<Business>;
}
