import { Controller, Post, Body } from '@nestjs/common';
import { PlaceOrderDto } from './dto/place-order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  placeOrder(@Body() placeOrderDto: PlaceOrderDto): string {
    return this.orderService.placeOrder(placeOrderDto);
  }
}
