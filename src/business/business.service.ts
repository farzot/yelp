import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Business } from './models/business.model';
import { TypeOptions } from 'class-transformer';

@Injectable()
export class BusinessService {
  constructor(
    @InjectModel(Business) private readonly businessRepo: typeof Business,
  ) {}
  async create(createBusinessDto: CreateBusinessDto) {
    try {
      return await this.businessRepo.create(createBusinessDto);
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    try{
      return await this.businessRepo.findAll({include: {all: true}});
    }
    catch(error){
      return error.message;
    }
  }

  async findOne(id: number) {
    try{
      return await this.businessRepo.findByPk(id,{include: {all: true}});
    }
    catch(error){
      return error
    }
  }

  async update(id: number, updateBusinessDto: UpdateBusinessDto) {
    try{
      const check = this.findOne(id);
      if(!check)
        {
          throw new NotFoundException(`Business with ID ${id} not found`);
        }
      const upBusiness =  await this.businessRepo.update(updateBusinessDto, {where: {id:id}, returning: true});
      return upBusiness;
    }
    catch(error){
      throw error.message
    }
  }

  async remove(id: number) {
    try {
       const check = this.findOne(id);
       if (!check) {
         throw new NotFoundException(`Business with ID ${id} not found`);
       }
      const deletedBusiness = await this.businessRepo.destroy({where: {id}});
      return deletedBusiness;
    } catch (error) {
      throw error
    }
  }
}
