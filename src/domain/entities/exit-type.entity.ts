import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

@Entity({ name: 'exit_types' })
export class ExitType extends BaseEntity {
  @Column({ type: 'varchar', length: 80, unique: true })
  name: string;
}
