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
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Order } from './models/order.model';
import { JwtAdminGuard } from '../common/guards/admin-auth.guard';

@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // @UseGuards(JwtAdminGuard)
  @ApiOperation({ summary: 'Create a new order' })
  @ApiResponse({ status: 200, type: Order })
  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    try {
      return this.orderService.create(createOrderDto);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAdminGuard)
  @ApiOperation({ summary: 'Get all order' })
  @ApiResponse({ status: 200, type: [Order] })
  @Get()
  async findAll() {
    try {
      return this.orderService.findAll();
    } catch (error) {
      throw error.message;
    }
  }

  @UseGuards(JwtAdminGuard)
  @ApiOperation({ summary: 'Get order by ID' })
  @ApiResponse({ status: 200, type: Order })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return this.orderService.findOne(+id);
    } catch (error) {
      throw error.message;
    }
  }

  @UseGuards(JwtAdminGuard)
  @ApiOperation({ summary: 'Update order by ID' })
  @ApiResponse({ status: 200, type: Order })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    try {
      return this.orderService.update(+id, updateOrderDto);
    } catch (error) {
      throw error.message;
    }
  }

  @UseGuards(JwtAdminGuard)
  @ApiOperation({ summary: 'Delete order by ID' })
  @ApiResponse({ status: 200, type: Number })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return this.orderService.remove(+id);
    } catch (error) {
      throw error.message;
    }
  }
}
