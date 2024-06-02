import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './models/order.model';
import { CartService } from '../cart/cart.service';
import { ProductOrServiceService } from '../product_or_service/product_or_service.service';
import { Console, log } from 'console';
import { Cart } from '../cart/model/cart.model';
import { OrderItem } from '../order_items/model/order_item.model';
import { UpdateOrderStatusDto } from './dto/update-orderStatus.dto';
import { OrderItemsService } from '../order_items/order_items.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order) private readonly orderRepo: typeof Order,
    @InjectModel(Cart) private readonly cartModel: typeof Cart,
    @InjectModel(OrderItem) private readonly orderItemModel: typeof OrderItem,
    private readonly orderItemService: OrderItemsService,
    private readonly cartService: CartService,
    private readonly productService: ProductOrServiceService,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    const cart = await this.cartModel.findByPk(createOrderDto.cart_id, {
      include: ['cartItems'],
    });
    console.log('Order Service created');
    // console.log(cart.totalPrice);

    const order = await this.orderRepo.create({
      cart_id: createOrderDto.cart_id,
      client_id: cart.client_id,
      business_id: cart.business_id,
      status: 'processing',
      payment_type: createOrderDto.payment_type,
      comment: createOrderDto.comment,
      totalPrice: cart.totalPrice,
    });
    
    order.total_price = order.totalPrice + order.shipping_price

    // console.log('Salomcha2');

    // Create order items from cart items
    if (cart) {
      const orderItems = cart.cartItems.map((cartItem) => ({
        order_id: order.id,
        product_id: cartItem.productId,
        quantity: cartItem.quantity,
        totalPrice: cartItem.totalPrice,
      }));

      const orderItem = await this.orderItemModel.bulkCreate(orderItems);
      console.log('bulkCreate tagidagi console');
      
      orderItem.map((item)=>{
        // console.log(item.product);
        console.log("Prodcut_id",item.product_id);
        this.productService.addQuantityOfSelling(item.product_id, item.quantity)
      })
      // console.log('********************************');
    }
    // Update the cart status to 'converted'
    await this.cartModel.update(
      { status: 'converted' },
      { where: { id: createOrderDto.cart_id } },
    );

    await order.save();
    return order;
  }

  async findAll() {
    try {
      const order = await this.orderRepo.findAll({ include: { all: true } });
      return { order };
    } catch (error) {
      throw error.message;
    }
  }

  async findOne(id: number) {
    try {
      const oredercha = await this.orderRepo.findByPk(id, {
        include: { all: true },
      });
      return oredercha;
    } catch (error) {
      throw error.message;
    }
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    try {
      const check = await this.findOne(id);
      if (!check) {
        throw new NotFoundException(`Order with ID ${id} not found`);
      }
      return await this.orderRepo.update(updateOrderDto, { where: { id } });
    } catch (error) {
      throw error.message;
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
      throw error.message;
    }
  }

  async updateStatus(
    id: number,
    updateOrderStatusDto: UpdateOrderStatusDto,
  ): Promise<Order> {
    const order = await this.findOne(id);
    return order.update({ status: updateOrderStatusDto.status });
  }
}
