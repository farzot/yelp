import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductOrServiceDto } from './dto/create-product_or_service.dto';
import { UpdateProductOrServiceDto } from './dto/update-product_or_service.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ProductOrService } from './models/product_or_service.model';

@Injectable()
export class ProductOrServiceService {
  constructor(@InjectModel(ProductOrService) private readonly productOrServiceRepo: typeof ProductOrService){}

  async create(createProductOrServiceDto: CreateProductOrServiceDto) {
    try {
      return await this.productOrServiceRepo.create(createProductOrServiceDto)
    } catch (error) {
      throw error
    }
  }

 async findAll() {
  try {
    return await this.productOrServiceRepo.findAll({include: {all:true}})
  } catch (error) {
    throw error
  }
  }

  async findOne(id: number) {
    try {
      return await this.productOrServiceRepo.findByPk(id,{include: {all:true}})
    } catch (error) {
    throw error      
    }
  }

  async update(id: number, updateProductOrServiceDto: UpdateProductOrServiceDto) {
    try {
      const check= this.findOne(id)
      if(!check)
        throw new NotFoundException(`Product with ${id}-id not found`)
      return await this.productOrServiceRepo.update(updateProductOrServiceDto, {where: {id:id}})
    } catch (error) {
        throw error
    }
  }

  async remove(id: number) {
    try {
      const check = this.findOne(id);
      if (!check)
        throw new NotFoundException(`Product with ${id}-id not found`);
      return await this.productOrServiceRepo.destroy({where: {id:id}})
    } catch (error) {
      throw error
    }
  }
}
