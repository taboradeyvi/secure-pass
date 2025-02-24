import { Column, CreateDateColumn, Entity } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import { VisitorTypeIdentification } from '../enums/visitor-type-identification.enum';

@Entity({ name: 'entry_passes' })
export class EntryPass extends BaseEntity {
  @Column({ type: 'varchar', length: 50, unique: true })
  code: string;

  @CreateDateColumn({ name: 'entry_date', type: 'timestamptz' })
  entryDate: Date;

  @Column({ type: 'varchar', length: 300 })
  observation?: string;

  @Column({ name: 'status_observation', type: 'varchar', length: 300 })
  statusObservation?: string;

  @Column({ name: 'visor_name', type: 'varchar', length: 100 })
  visitorName: string;

  @Column({
    name: 'visitor_type_id_identification',
    type: 'enum',
    enum: VisitorTypeIdentification,
    default: VisitorTypeIdentification.DNI,
  })
  visitorTypeIdentification: VisitorTypeIdentification;

  @Column({ name: 'visitor_id_number', type: 'varchar', length: 20 })
  visitorIdNumber: string;

  @Column({ name: 'vehicle_plate', type: 'varchar', length: 20 })
  vehiclePlate: string;

  @Column({ name: 'vehicle_color', type: 'varchar', length: 20 })
  vehicleColor: string;

  @Column({ name: 'vehicle_mark', type: 'varchar', length: 50 })
  vehicleMark: string;

  @CreateDateColumn({ name: 'entry_time', type: 'timestamptz' })
  entryTime: Date;

  @CreateDateColumn({ name: 'exit_time', type: 'timestamptz' })
  exitTime: Date;
}
