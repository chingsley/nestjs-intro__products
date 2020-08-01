import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';

import { productsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductSchema } from './product.model';

console.log('products.module.ts');
@Module({
  imports: [
  MongooseModule.forFeature([
      { name: 'Product', schema: ProductSchema }
    ])
  ],
  controllers: [productsController],
  providers: [ProductsService]
})
export class ProductsModule {};