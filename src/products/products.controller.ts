import { Controller, Post, Body, Get, Param, Patch, Delete, HttpCode } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.model';
import { get } from 'http';

@Controller('products')
export class productsController {
  constructor(private readonly productService: ProductsService) {}
  // @Post('register')
  @Post()
  async addProduct(
    @Body() body: Product,
    // @Body('title') prodTitle: string,
    // @Body('description') prodDesc: string,
    // @Body('price') prodPrice: number,
  ): Promise<{ id: string }> {
    // return this.productService.insertProduct(prodTitle, prodDesc, prodPrice);
    const id = await this.productService.insertProduct(body);
    return { id };
  }

  @Get()
  getAllProducts(): Product[] {
    return this.productService.findAll();
  }

  @Get(':id')
  getProduct(@Param() params: { id: string }): any {
    const { id } = params;
    return this.productService.findOne(id);
  }

  @Patch(':id')
  editProduct(
    @Param() params: { id: string },
    @Body('title') title: string,
    @Body('description') desc: string,
    @Body('price') price: number,
  ): any {
    const { id } = params;
    return this.productService.update(id, title, desc, price);
  }

  @Delete(':id')
  removeProduct(@Param() params: { id: string }): any {
    const { id } = params;
    return this.productService.destroy(id);
  }
}
