import { Branch } from 'src/domain/entities/branch.entity';
import { Company } from 'src/domain/entities/company.entity';
import { Department } from 'src/domain/entities/department.entity';
import { Driver } from 'src/domain/entities/driver.entity';
import { EntryPass } from 'src/domain/entities/entry-pass.entity';
import { EntryType } from 'src/domain/entities/entry-type.entity';
import { ExitPass } from 'src/domain/entities/exit-pass.entity';
import { ExitType } from 'src/domain/entities/exit-type.entity';
import { Project } from 'src/domain/entities/project.entity';
import { Role } from 'src/domain/entities/role.entity';
import { TransportUnitCategory } from 'src/domain/entities/transport-unit-category.entity';
import { TransportUnit } from 'src/domain/entities/transport-unit.entity';
import { UserBranchCompany } from 'src/domain/entities/user-branch-company.entity';
import { User } from 'src/domain/entities/user.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Taylor9924',
  database: 'securepass',
  entities: [
    User,
    Role,
    Department,
    Branch,
    Company,
    Driver,
    EntryPass,
    EntryType,
    ExitPass,
    ExitType,
    Project,
    TransportUnit,
    TransportUnitCategory,
    UserBranchCompany,
  ],
  migrations: ['src/infrastructure/persistence/migrations/*.ts'],
  synchronize: false,
  logging: true,
});
