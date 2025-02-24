import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './data-source';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options)], // Aquí pasamos directamente AppDataSource.options
})
export class DatabaseModule {}
