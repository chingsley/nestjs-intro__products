import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

  // insertProduct(prod: Product) {}
  async insertProduct(obj: Product): Promise<string> {
    const { title, description, price } = obj;
    // const id = new Date().getTime().toString();
    const newProduct = new this.productModel({ title, description, price });
    const result = await newProduct.save();
    // return result;
    // this.products.push(newProduct);
    return result.id as string;
  }

  findAll(): Product[] {
    return [...this.products];
  }

  findOne(id: string): any {
    const [product] = this.getProductById(id);
    return { ...product };
  }

  update(id: string, title: string, description: string, price: number): any {
    const [prod, prodIndex] = this.getProductById(id);
    const updatedProduct = {
      ...prod,
      title: title || prod.title,
      description: description || prod.description,
      price: price || prod.price,
    };
    this.products[prodIndex] = updatedProduct;
    // const products = this.products.map(product => (product.id === id ? updatedProduct : product));
    // this.products = products;
    return updatedProduct;
  }

  destroy(prodId: string): { message: string; product: Product } {
    const [product] = this.getProductById(prodId);
    this.products = this.products.filter(({ id }) => id !== prodId);
    return { message: 'product succesfully deleted', product };
  }

  private getProductById(id: string): [Product, number] {
    const productIndex = this.products.findIndex(prod => prod.id === id);
    const product = this.products[productIndex];
    if (!product) {
      // return { error: `no product matches the id of ${id}` };
      // throw new NotFoundException()
      throw new NotFoundException(`no product matches the id of ${id}`);
    }
    return [product, productIndex];
  }
}
