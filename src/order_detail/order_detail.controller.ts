import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { OrderDetailService } from './order_detail.service';
import { CreateOrderDetailDto } from './dto/create-order_detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order_detail.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OrderDetail } from './models/order_detail.model';
import { JwtAdminGuard } from '../common/guards/admin-auth.guard';

@ApiTags('Order_detail')
@Controller('order-detail')
export class OrderDetailController {
  constructor(private readonly orderDetailService: OrderDetailService) {}

  @UseGuards(JwtAdminGuard)
  @ApiOperation({ summary: 'Create a new order_detail' })
  @ApiResponse({ status: 200, type: OrderDetail })
  @Post()
  async createOrderDetail(@Body() createOrderDetailDto: CreateOrderDetailDto) {
    try {
      return this.orderDetailService.create(createOrderDetailDto);
    } catch (error) {
      throw error.message;
    }
  }

  // @UseGuards(JwtAdminGuard)
  @ApiOperation({ summary: 'Get all order_detail' })
  @ApiResponse({ status: 200, type: [OrderDetail] })
  @Get()
  async findAllOrderDetail() {
    try {
      return this.orderDetailService.findAll();
    } catch (error) {
      throw error.message;
    }
  }

  @UseGuards(JwtAdminGuard)
  @ApiOperation({ summary: 'Get order_detail by id' })
  @ApiResponse({ status: 200, type: OrderDetail })
  @Get(':id')
  async findOneOrderDetail(@Param('id') id: string) {
    try {
      return this.orderDetailService.findOne(+id);
    } catch (error) {
      throw error.message;
    }
  }

  @UseGuards(JwtAdminGuard)
  @ApiOperation({ summary: 'Update order_detail by id' })
  @ApiResponse({ status: 200, type: OrderDetail })
  @Patch(':id')
  async updateOrderDetail(
    @Param('id') id: string,
    @Body() updateOrderDetailDto: UpdateOrderDetailDto,
  ) {
    try {
      return this.orderDetailService.update(+id, updateOrderDetailDto);
    } catch (error) {
      throw error.message;
    }
  }
  @UseGuards(JwtAdminGuard)
  @ApiOperation({ summary: 'Delete order_detail by id' })
  @ApiResponse({ status: 200, type: Number })
  @Delete(':id')
  async removeOrderDetail(@Param('id') id: string) {
    try {
      return this.orderDetailService.remove(+id);
    } catch (error) {
      throw error.message;
    }
  }
}
