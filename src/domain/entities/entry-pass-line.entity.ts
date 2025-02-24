import { BaseEntity, Entity } from 'typeorm';

@Entity({ name: 'entry_pass_lines' })
export class EntryPassLine extends BaseEntity {
  visitorName: string;
  visitorTypeIdentification: string;
  visitorIdNumber: string;
  vehiclePlate: string;
  vehicleColor: string;
  vehicleMark: string;
}
