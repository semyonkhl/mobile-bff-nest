import { Module } from '@nestjs/common';

import { ProductionController } from './production/production.controller';
import { OrderController } from './order/order.controller';
import { ListingsController } from './listings/listings.controller';
import { BraintreeController } from './braintree/braintree.controller';
import { AuthController } from './auth/auth.controller';
import { QuoteController } from './quote/quote.controller';
import { AuthService } from './auth/auth.service';
import { BraintreeService } from './braintree/braintree.service';
import { ListingsService } from './listings/listings.service';
import { OrderService } from './order/order.service';
import { ProductionService } from './production/production.service';
import { QuoteService } from './quote/quote.service';

@Module({
  controllers: [
    ProductionController,
    OrderController,
    ListingsController,
    BraintreeController,
    AuthController,
    QuoteController,
  ],
  providers: [
    AuthService,
    BraintreeService,
    ListingsService,
    OrderService,
    ProductionService,
    QuoteService,
  ],
})
export class CheckoutModule {}
