import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

@Entity({ name: 'departments' })
export class Department extends BaseEntity {
  @Column({ type: 'varchar', length: 80, unique: true })
  name: string;
}
