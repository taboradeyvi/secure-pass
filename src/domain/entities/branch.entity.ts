import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import { Company } from './company.entity';
import { User } from './user.entity';

@Entity({ name: 'branchs' })
export class Branch extends BaseEntity {
  @Column({ type: 'varchar', length: 80, unique: true })
  name: string;

  @ManyToMany(() => Company, (company) => company.branches)
  companies: Company[];

  @ManyToMany(() => User, (user) => user.branches)
  users: User[];
}
