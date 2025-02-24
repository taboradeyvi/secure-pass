import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import { Company } from './company.entity';

@Entity({ name: 'projects' })
export class Project extends BaseEntity {
  @Column({ type: 'varchar', length: 100, unique: true })
  name: string;

  @ManyToOne(() => Company, (company) => company.projects, {
    nullable: false,
  })
  company: Company;
}
