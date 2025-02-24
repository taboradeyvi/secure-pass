import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import { TransportUnit } from './transport-unit.entity';
import { Company } from './company.entity';

@Entity({ name: 'transport_unit_categories' })
export class TransportUnitCategory extends BaseEntity {
  @Column({ type: 'varchar', length: 80, unique: true })
  name: string;

  @OneToMany(
    () => TransportUnit,
    (transportUnit) => transportUnit.transportUnitCategory,
  )
  transportUnits: TransportUnit[];

  @ManyToOne(() => Company, (company) => company.transportUnitCategories, {
    nullable: false,
  })
  company: Company;
}
