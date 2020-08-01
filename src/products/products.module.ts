import { Module } from "@nestjs/common";

import { productsController } from './products.controller';
import { ProductsService } from './products.service';

console.log('products.module.ts');
@Module({
  controllers: [productsController],
  providers: [ProductsService]
})
export class ProductsModule {};