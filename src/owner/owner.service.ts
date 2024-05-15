import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Owner } from './models/owner.model';

@Injectable()
export class OwnerService {
  constructor(@InjectModel(Owner) private readonly ownerRepo: typeof Owner){}

  async create(createOwnerDto: CreateOwnerDto) {
    try {
      return await this.ownerRepo.create(createOwnerDto);
    } catch (error) {
      throw error.message
    }
  }

  async findAll() {
    try {
      return await this.ownerRepo.findAll({include: {all: true}});
    } catch (error) {
      throw error.message
    }
  }

  async findOne(id: number) {
    try {
      return await this.ownerRepo.findByPk(id);
    } catch (error) {
      throw error.message
    }
  }

  async update(id: number, updateOwnerDto: UpdateOwnerDto) {
    try {
      const check = await this.findOne(id);
      if (!check) {
        throw new NotFoundException(`Order with ID ${id} not found`);
    } 
  }catch (error) {
      throw error.message
    }
    }
  

  async remove(id: number) {
    try {
      const check = await this.findOne(id);
      if (!check) {
        throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return await this.ownerRepo.destroy({where: {id}}) 
    } catch (error) {
      throw error.message
    }
    
  }
}
