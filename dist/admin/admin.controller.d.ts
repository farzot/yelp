import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Response } from 'express';
import { LoginAdminDto } from './dto/login.admin.dto';
import { Admin } from './models/admin.model';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    registration(createAdminDto: CreateAdminDto, res: Response): Promise<{
        message: string;
        admin: Admin;
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    login(loginUserDto: LoginAdminDto, res: Response): Promise<{
        message: string;
        admin: Admin;
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    logout(refreshToken: string, res: Response): Promise<{
        message: string;
        admin_refreshToken: string;
    }>;
    refresh(id: number, refreshToken: string, res: Response): Promise<{
        message: string;
        admin: Admin;
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    findAll(): Promise<Admin[]>;
    findOne(id: string): Promise<Admin>;
    update(id: string, updateAdminDto: UpdateAdminDto): Promise<Admin>;
    remove(id: string): Promise<number>;
}
