import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CountItem } from './count-item.entity';

//  计数器元数据
@Entity('countMeta')
export class CountMeta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  remark?: string = '';

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateTime: Date;

  @Column()
  userId: string;

  @OneToMany(() => CountItem, (CountItem) => CountItem.countMeta)
  counts: CountItem[];

  @DeleteDateColumn()
  deletedAt: Date;
}
