import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

@Entity({ name: 'entry_types' })
export class EntryType extends BaseEntity {
  @Column({ type: 'varchar', length: 80, unique: true })
  name: string;
}
