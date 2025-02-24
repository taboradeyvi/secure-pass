import { DataSourceOptions } from 'typeorm';
import { Branch } from '../../domain/entities/branch.entity';
import { Department } from '../../domain/entities/department.entity';
import { Company } from '../../domain/entities/company.entity';
import { Driver } from '../../domain/entities/driver.entity';
import { EntryPass } from '../../domain/entities/entry-pass.entity';
import { EntryType } from '../../domain/entities/entry-type.entity';
import { ExitPass } from '../../domain/entities/exit-pass.entity';
import { ExitType } from '../../domain/entities/exit-type.entity';
import { Project } from '../../domain/entities/project.entity';
import { TransportUnit } from '../../domain/entities/transport-unit.entity';
import { TransportUnitCategory } from '../../domain/entities/transport-unit-category.entity';
import { UserBranchCompany } from '../../domain/entities/user-branch-company.entity';
import { User } from '../../domain/entities/user.entity';
import { Role } from '../../domain/entities/role.entity';

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'Taylor9924',
  database: process.env.DB_NAME || 'securepass',
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
  migrationsTableName: 'migrations_history',
  synchronize: false, // No usar en producción
  logging: true,
};

export default dataSourceOptions;
