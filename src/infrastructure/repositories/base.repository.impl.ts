import { BaseEntity } from 'src/domain/common/base.entity';
import {
  Repository,
  EntityTarget,
  DataSource,
  DeepPartial,
  FindOptionsWhere,
} from 'typeorm';

export abstract class BaseRepositoryImpl<T extends BaseEntity> {
  protected repository: Repository<T>;

  constructor(entity: EntityTarget<T>, dataSource: DataSource) {
    this.repository = dataSource.getRepository(entity);
  }

  async findById(id: string): Promise<T | null> {
    return this.repository.findOneBy({ id } as FindOptionsWhere<T>);
  }

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  async create(data: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(data);
    return await this.repository.save(entity);
  }

  async update(id: string, data: Partial<T>): Promise<T | null> {
    const entity = await this.findById(id);
    if (!entity) return null;

    Object.assign(entity, data);
    return await this.repository.save(entity);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
