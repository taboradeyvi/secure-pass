import { Entity, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Branch } from './branch.entity';
import { Company } from './company.entity';
import { BaseEntity } from '../common/base.entity';

@Entity({ name: 'user_branch_companies' })
export class UserBranchCompany extends BaseEntity {
  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => Branch, (branch) => branch.id)
  branch: Branch;

  @ManyToOne(() => Company, (company) => company.id)
  company: Company;
}
