import { BaseEntity } from '../common/base.entity';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
import { Role } from './role.entity';
import { Branch } from './branch.entity';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @Column({ name: 'user_name', type: 'varchar', length: 20 })
  userName: string;

  @Column({ name: 'full_name', type: 'varchar', length: 100 })
  fullName: string;

  @Column({ type: 'varchar', length: 80, unique: true })
  email: string;

  @Column({ name: 'phone_number', type: 'varchar', length: 20, unique: true })
  phoneNumber: string;

  @Column({ type: 'text' })
  password: string;

  @ManyToOne(() => Role, (role) => role.users, { nullable: false })
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @ManyToMany(() => Branch, (branch) => branch.users)
  branches: Branch[];
}
