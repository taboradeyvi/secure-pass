import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import { TransportUnitCategory } from './transport-unit-category.entity';
import { Company } from './company.entity';

@Entity({ name: 'transport_units' })
export class TransportUnit extends BaseEntity {
  @Column({ type: 'varchar', length: 50, unique: true })
  code: string;

  @Column({ type: 'varchar', length: 20, unique: true })
  color: string;

  @Column({ type: 'varchar', length: 20, unique: true })
  plate: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  mark: string;

  @ManyToOne(() => Company, (company) => company.transportUnits, {
    nullable: false,
  })
  company: Company;

  @ManyToOne(
    () => TransportUnitCategory,
    (transportUnitCategory) => transportUnitCategory.transportUnits,
    {
      nullable: false,
    },
  )
  @JoinColumn({ name: 'transport_unit_category_id' })
  transportUnitCategory: TransportUnitCategory;
}
