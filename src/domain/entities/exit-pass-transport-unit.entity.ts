import { Entity } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

@Entity({ name: 'exit_pass_transport_units' })
export class ExitPassTransportUnit extends BaseEntity {}
