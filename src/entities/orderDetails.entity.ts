// import {
//   Column,
//   Entity,
//   JoinColumn,
//   ManyToMany,
//   OneToOne,
//   PrimaryGeneratedColumn,
// } from 'typeorm';
// import { Orders } from './orders.entity';
// import { Product } from './products.entity';

// @Entity({ name: 'oderDetails' })
// export class OrderDetails {
//   // id: debe ser un valor único generado automáticamente en formato UUID. No puede ser nulo y actúa como la clave primaria de la entidad.
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   // price: debe ser un número decimal con una precisión de 10 dígitos y una escala de 2 dígitos. No puede ser nulo.
//   @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
//   price: number;
//   // *order_id: Relación 1:1 con orders.
//   @OneToOne(() => Orders, (order) => order.orderDetalys)
//   @JoinColumn({ name: 'order_id' })
//   orders: Orders[];
//   // *Relación N:N con products.
//   @ManyToMany(() => Product, (product) => product.orederDetails)
//   products: Product[];
// }
