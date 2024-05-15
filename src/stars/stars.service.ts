import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStarDto } from './dto/create-star.dto';
import { UpdateStarDto } from './dto/update-star.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Star } from './models/star.model';

@Injectable()
export class StarsService {
  constructor(@InjectModel(Star) private readonly starRepo: typeof Star){}

  async create(createStarDto: CreateStarDto) {
    try {
      return await this.starRepo.create(createStarDto);
    } catch (error) {
      throw error.message
    }
  }

 async findAll() {
  try{
    return await this.starRepo.findAll();
  } catch (error) {
    throw error.message
  }
  }

  async findOne(id: number) {
    try{
      return await this.starRepo.findByPk(id);
    } catch (error) {
      throw error.message
    }
  }

  async update(id: number, updateStarDto: UpdateStarDto) {
    try {
      const check = await this.findOne(id);
      if(!check) throw new NotFoundException(`Star ${id} not found`)
        return await this.starRepo.update(updateStarDto, {where: {id:id}, returning: true})
    } catch (error) {
      throw error.message
    }
  }

  async remove(id: number) {
    try {
      const check = await this.findOne(id);
      if (!check) throw new NotFoundException(`Star ${id} not found`);
      return await this.starRepo.destroy(
        {where: {id}});
    } catch (error) {
      throw error.message;
    }
    }
}
