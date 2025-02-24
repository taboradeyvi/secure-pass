import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import { Company } from './company.entity';

@Entity({ name: 'departments' })
export class Department extends BaseEntity {
  @Column({ type: 'varchar', length: 80, unique: true })
  name: string;

  @ManyToOne(() => Company, (company) => company.departments, {
    nullable: false,
  })
  company: Company;
}
