import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDetailDto } from './dto/create-order_detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order_detail.dto';
import { OrderDetail } from './models/order_detail.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class OrderDetailService {
  constructor(
    @InjectModel(OrderDetail) private readonly orderDetailRepo: typeof OrderDetail,
  ) {}
  
  async create(createOrderDetailDto: CreateOrderDetailDto) {
    try {
      return await this.orderDetailRepo.create(createOrderDetailDto);
    } catch (error) {
      throw error.message;
    }
  }

  async findAll() {
    try {
      return await this.orderDetailRepo.findAll({ include: { all: true } });
    } catch (error) {
      throw error.message;
    }
  }

  async findOne(id: number) {
    try {
      return await this.orderDetailRepo.findByPk(id, {
        include: { all: true },
      });
    } catch (error) {
      throw error.message;
    }
  }

  async update(id: number, updateOrderDetailDto: UpdateOrderDetailDto) {
    try {
      const check = await this.findOne(id);
      if (!check) {
        throw new NotFoundException(`OrderDetail with ID ${id} not found`);
      }
      return await this.orderDetailRepo.update(updateOrderDetailDto, {
        where: { id: id },
        returning: true,
      });
    } catch (error) {
      throw error.message;
    }
  }

  async remove(id: number) {
    const check = await this.findOne(id);
    if (!check) {
      throw new NotFoundException(`OrderDetail with ID ${id} not found`);
    }
    return await this.orderDetailRepo.destroy({ where: { id: id } });
  }
}
