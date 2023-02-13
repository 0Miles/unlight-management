import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("profound_logs_profound_id_index", ["profoundId"], {})
@Index("profound_logs_avatar_id_index", ["avatarId"], {})
@Entity("profound_logs", { schema: "unlight_db" })
export class ProfoundLogs {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "profound_id", nullable: true })
  profoundId: number | null;

  @Column("int", { name: "avatar_id", nullable: true })
  avatarId: number | null;

  @Column("varchar", { name: "avatar_name", nullable: true, length: 255 })
  avatarName: string | null;

  @Column("int", { name: "chara_no", nullable: true })
  charaNo: number | null;

  @Column("varchar", { name: "boss_name", nullable: true, length: 255 })
  bossName: string | null;

  @Column("int", { name: "damage", nullable: true })
  damage: number | null;

  @Column("int", { name: "atk_charactor", nullable: true })
  atkCharactor: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
