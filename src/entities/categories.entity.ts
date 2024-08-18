// import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
// import { Product } from './products.entity';

// @Entity({ name: 'categories' })
// export class Categories {
//   // id: debe ser un valor único generado automáticamente en formato UUID. No puede ser nulo y actúa como la clave primaria de la entidad.
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   // name: debe ser una cadena de texto de máximo 50 caracteres y no puede ser nulo.
//   @Column({ type: 'varchar', length: 50, nullable: false })
//   name: string;
//   // *Relación: N:1 con products.
//   @OneToMany(() => Product, (product) => product.category)
//   products: Product[];
// }
