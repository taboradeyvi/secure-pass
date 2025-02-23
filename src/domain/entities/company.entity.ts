import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import { Branch } from './branch.entity';

@Entity({ name: 'companies' })
export class Company extends BaseEntity {
  @Column({ type: 'varchar', length: 100, unique: true })
  name: string;

  @Column({ name: 'logistic_email', type: 'varchar', length: 80 })
  logisticEmail: string;

  @Column({ name: 'security_email', type: 'varchar', length: 80 })
  securityEmail: string;

  @Column({ name: 'rrhh_email', type: 'varchar', length: 80 })
  rrhhEmail: string;

  @ManyToMany(() => Branch, (branch) => branch.companies)
  branches: Branch[];
}
