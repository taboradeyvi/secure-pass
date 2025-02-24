import { Column, CreateDateColumn, Entity } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

@Entity({ name: 'exit_passes' })
export class ExitPass extends BaseEntity {
  @Column({ type: 'varchar', length: 50, unique: true })
  code: string;

  @CreateDateColumn({ type: 'timestamptz' })
  exitDate: Date;

  @Column({ type: 'varchar', length: 300 })
  observation?: string;

  @Column({ type: 'varchar', length: 300 })
  statusObservation?: string;

  @CreateDateColumn({ type: 'timestamptz' })
  exitTime: Date;
}
