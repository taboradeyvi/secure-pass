import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import { Company } from './company.entity';

@Entity({ name: 'drivers' })
export class Driver extends BaseEntity {
  @Column({ name: 'full_name', type: 'varchar', length: 100, unique: true })
  fullName: string;

  @ManyToOne(() => Company, (company) => company.drivers, {
    nullable: false,
  })
  company: Company;
}
