import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
console.log('products.services.ts');
@Injectable()
export class ProductsService {
  private products: Product[] = [];

  // insertProduct(prod: Product) {}
  insertProduct(obj: Product): { id: string } {
    // const { title, description, price } = obj;
    // const id = new Date().getTime().toString();
    // const newProduct = new Product(id, title, description, price);
    // this.products.push(newProduct);
    return { id: 'work in progress' };
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
    // this.products[prodIndex] = updatedProduct;
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
