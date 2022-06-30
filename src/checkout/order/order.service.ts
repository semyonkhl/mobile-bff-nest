import { Injectable } from '@nestjs/common';
import { PlaceOrderDto } from './dto/place-order.dto';

@Injectable()
export class OrderService {
  placeOrder(placeOrderDto: PlaceOrderDto): string {
    return `Order placed - email: ${placeOrderDto.email} quoteId: ${placeOrderDto.quoteId}`;
  }
}
