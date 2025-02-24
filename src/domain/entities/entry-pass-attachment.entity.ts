import { Entity } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

@Entity({ name: 'entry_pass_attachments' })
export class EntryPassAttachment extends BaseEntity {}
