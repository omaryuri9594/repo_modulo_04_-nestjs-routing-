// import {
//   Entity,
//   JoinColumn,
//   ManyToOne,
//   OneToOne,
//   PrimaryGeneratedColumn,
// } from 'typeorm';
// import { User } from './users.entity';
// import { OrderDetails } from './orderDetails.entity';

// @Entity({ name: 'orders' })
// export class Orders {
//   // id: debe ser un valor único generado automáticamente en formato UUID. No puede ser nulo y actúa como la clave primaria de la entidad.
//   @PrimaryGeneratedColumn('uuid')
//   id: string;
//   @ManyToOne(() => User, (user) => user.orders)
//   @JoinColumn({ name: 'user_id' })
//   users: User[];
//   // *user_id:  (Relación 1:N) con users.

//   // date.
//   date: Date;

//   // *Relación 1:1 con orderDetails.
//   @OneToOne(() => OrderDetails, (orderDetail) => orderDetail.orders)
//   orderDetalys: OrderDetails[];
// }
