import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { Admin } from './models/admin.model';
import { LoginAdminDto } from './dto/login.admin.dto';
export declare class AdminService {
    private readonly adminRepo;
    private readonly jwtService;
    constructor(adminRepo: typeof Admin, jwtService: JwtService);
    getTokens(admin: Admin): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    registration(createAdminDto: CreateAdminDto, res: Response): Promise<{
        message: string;
        admin: Admin;
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    findAllAdmins(): Promise<Admin[]>;
    findAdminById(id: number): Promise<Admin>;
    updateAdmin(id: number, updateAdminDto: UpdateAdminDto): Promise<Admin>;
    removeAdmin(id: number): Promise<number>;
    login(loginadminDto: LoginAdminDto, res: Response): Promise<{
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
    refreshToken(adminId: number, refreshToken: string, res: Response): Promise<{
        message: string;
        admin: Admin;
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
}
