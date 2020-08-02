import { Column, Model, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { User } from '../users/user.model';

@Table
export class Product extends Model<Product> {
  @Column
  title: string;

  @Column
  description: string;

  @Column
  price: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}

// export class Product {
//   constructor(
//     public id: string,
//     public title: string,
//     public description: string,
//     public price: number,
//   ) {}
// }

// export class Product {
//   id: string;
//   title: string;
//   description: string;
//   price: number;

//   constructor(id: string, title: string, description: string, price: number) {
//     this.id = id;
//     this.title = title;
//     this.description = description;
//     this.price = price;
//   }
// }
