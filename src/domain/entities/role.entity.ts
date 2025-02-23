import { Column, Entity, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { BaseEntity } from '../common/base.entity';

@Entity({ name: 'roles' })
export class Role extends BaseEntity {
  @Column({ type: 'varchar', length: 50, unique: true })
  name: string;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
