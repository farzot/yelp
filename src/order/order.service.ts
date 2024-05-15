import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './models/order.model';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order) private readonly orderRepo: typeof Order){}
  async create(createOrderDto: CreateOrderDto) {
    try {
      return await this.orderRepo.create(createOrderDto);
    } catch (error) {
      throw error.message
    }
  }

  async findAll() {
    try{
      return await this.orderRepo.findAll({ include: { all: true } });
    } catch (error) {
      throw error.message
    }
  }

async   findOne(id: number) {
  try {
    return await this.orderRepo.findByPk(id,{include: {all:true}});
  } catch (error) {
    throw error.message
  }
  }

 async update(id: number, updateOrderDto: UpdateOrderDto) {
  try {
    const check = await this.findOne(id)
    if (!check) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return await this.orderRepo.update(updateOrderDto, { where: { id } });
  } catch (error) {
    throw error.message
  }
  }

  async remove(id: number) {
    try {
       const check = await this.findOne(id);
       if (!check) {
         throw new NotFoundException(`Order with ID ${id} not found`);
       }
       return await this.orderRepo.destroy({ where: { id } });
    } catch (error) {
      throw error.message
    }
  }
}
