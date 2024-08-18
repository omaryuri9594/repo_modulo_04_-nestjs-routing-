// import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
// import { Orders } from './orders.entity';

// @Entity({
//   name: 'users',
// })
// export class User {
//   // id: debe ser un valor único generado automáticamente en formato UUID. No puede ser nulo y actúa como la clave primaria de la entidad.
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   // name: debe ser una cadena de texto de máximo 50 caracteres y no puede ser nulo.
//   @Column({ type: 'varchar', length: 50, nullable: false })
//   name: string;

//   // email: debe ser una cadena de texto de máximo 50 caracteres, único y no puede ser nulo.
//   @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
//   email: string;

//   // password: debe ser una cadena de texto de máximo 20 caracteres y no puede ser nulo.
//   @Column({ type: 'varchar', length: 20, nullable: false })
//   password: string;

//   // phone: debe ser un número entero.
//   @Column({ type: 'int' })
//   phone: number;

//   // country: debe ser una cadena de texto de máximo 50 caracteres.
//   @Column({ type: 'varchar', length: 50 })
//   country: string;

//   // address: debe ser un texto.
//   @Column({ type: 'varchar' })
//   Address: string;

//   // city: debe ser una cadena de texto de máximo 50 caracteres.
//   @Column({ type: 'varchar', length: 50 })
//   city: string;
//   @OneToMany(() => Orders, (order) => order.users)
//   orders: Orders[];
// }

// // *orders_id: Relación 1:N con orders
// // @OneToMany(() => Orders, (order) => order.user)
// // orders: Orders[
