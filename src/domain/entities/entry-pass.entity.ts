import { Column, CreateDateColumn, Entity } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import { VisitorTypeIdentification } from '../enums/visitor-type-identification.enum';

@Entity({ name: 'entry_passes' })
export class EntryPass extends BaseEntity {
  @Column({ type: 'varchar', length: 50, unique: true })
  code: string;

  @CreateDateColumn({ type: 'timestamptz' })
  entryDate: Date;

  @Column({ type: 'varchar', length: 300 })
  observation?: string;

  @Column({ type: 'varchar', length: 300 })
  statusObservation?: string;

  @Column({ type: 'varchar', length: 100 })
  visitorName: string;

  @Column({
    type: 'enum',
    enum: VisitorTypeIdentification,
    default: VisitorTypeIdentification.DNI,
  })
  visitorTypeIdentification: VisitorTypeIdentification;

  @Column({ type: 'varchar', length: 20 })
  visitorIdNumber: string;

  @Column({ type: 'varchar', length: 20 })
  vehiclePlate: string;

  @Column({ type: 'varchar', length: 20 })
  vehicleColor: string;

  @Column({ type: 'varchar', length: 50 })
  vehicleMark: string;

  @CreateDateColumn({ type: 'timestamptz' })
  entryTime: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  exitTime: Date;
}
