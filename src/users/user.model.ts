import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Product } from '../products/product.model';

@Table
export class User extends Model<User> {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @HasMany(() => Product)
  products: Product[]
}
