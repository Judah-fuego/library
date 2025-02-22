import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export default class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  title: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  author: string;

  @Column({ type: 'int', nullable: false })
  year: number;
}
