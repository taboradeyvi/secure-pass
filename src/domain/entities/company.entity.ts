import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import { Branch } from './branch.entity';
import { TransportUnit } from './transport-unit.entity';
import { Project } from './project.entity';
import { Department } from './department.entity';
import { TransportUnitCategory } from './transport-unit-category.entity';
import { Driver } from './driver.entity';

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

  @OneToMany(() => Project, (project) => project.company)
  projects: Project[];

  @OneToMany(() => Department, (project) => project.company)
  departments: Department[];

  @OneToMany(() => TransportUnit, (transportUnit) => transportUnit.company)
  transportUnits: TransportUnit[];

  @OneToMany(
    () => TransportUnitCategory,
    (transportUnitCategory) => transportUnitCategory.company,
  )
  transportUnitCategories: TransportUnitCategory[];

  @OneToMany(() => Driver, (driver) => driver.company)
  drivers: Driver[];
}
