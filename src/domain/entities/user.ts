import { BaseEntity } from '../common/base-entity';

export class User extends BaseEntity {
  userName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  companyId: number;
}
