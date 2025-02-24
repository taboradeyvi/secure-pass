import { DataSource } from 'typeorm';
import 'reflect-metadata';
import dataSourceOptions from './typeorm.config';

export const AppDataSource = new DataSource(dataSourceOptions);
