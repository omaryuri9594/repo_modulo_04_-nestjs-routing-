// import {
//   Column,
//   Entity,
//   JoinColumn,
//   ManyToMany,
//   ManyToOne,
//   PrimaryGeneratedColumn,
// } from 'typeorm';
// import { Categories } from './categories.entity';
// import { OrderDetails } from './orderDetails.entity';

// @Entity({ name: 'product' })
// export class Product {
//   // id: debe ser un valor único generado automáticamente en formato UUID. No puede ser nulo y actúa como la clave primaria de la entidad.
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   // name: debe ser una cadena de texto de máximo 50 caracteres y no puede ser nulo.
//   @Column({ type: 'varchar', length: 50, nullable: false })
//   name: string;

//   // description: debe ser un texto y no puede ser nulo.
//   @Column({ type: 'varchar', nullable: false })
//   description: string;

//   // price: debe ser un número decimal con una precisión de 10 dígitos y una escala de 2 dígitos. No puede ser nulo.
//   @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
//   price: number;

//   // stock: debe ser un valor numérico. No puede ser nulo.
//   @Column({ type: 'int', nullable: false })
//   stock: number;

//   // imgU(rl: debe ser una cadena de texto, en caso de no recibir un valor debe asignar una imagen por defecto.
//   @Column({ type: 'varchar', default: 'ruta/de/imagen/por/defecto.jpg' })
//   imgUrl: string;
//   // *category_id  (Relación 1:N).
//   @ManyToOne(() => Categories, (category) => category.products)
//   @JoinColumn({ name: 'category_id' })
//   category: Categories;

//   // *Relación N:N con orderDetails.
//   @ManyToMany(() => OrderDetails, (oderdetail) => oderdetail.products)
//   orederDetails: OrderDetails[];
// }
