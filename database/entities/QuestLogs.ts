import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("quest_logs", { schema: "unlight_db" })
export class QuestLogs {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "avatar_id", nullable: true })
  avatarId: number | null;

  @Column("int", { name: "type_no", nullable: true })
  typeNo: number | null;

  @Column("int", { name: "type_id", nullable: true })
  typeId: number | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "body", nullable: true, length: 255 })
  body: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
