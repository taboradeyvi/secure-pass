import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import { FileType } from '@domain/enums/file-type.enum';

@Entity({ name: 'entry_pass_attachments' })
export class EntryPassAttachment extends BaseEntity {
  @Column({ name: 'file_name', type: 'varchar', length: 150 })
  fileName: string;

  @Column({
    name: 'file_type',
    type: 'enum',
    enum: FileType,
    default: FileType.PDF,
  })
  fileType: string;

  @Column({ name: 'file_type' })
  fileSize: number;

  @Column({ name: 'file_url', type: 'varchar' })
  fileUrl: string;
}
