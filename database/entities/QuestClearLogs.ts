import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("quest_clear_logs", { schema: "unlight_db" })
export class QuestClearLogs {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "avatar_id", nullable: true })
  avatarId: number | null;

  @Column("int", { name: "quest_inventory_id", nullable: true })
  questInventoryId: number | null;

  @Column("int", { name: "chara_card_id_0", nullable: true })
  charaCardId_0: number | null;

  @Column("int", { name: "chara_card_id_1", nullable: true })
  charaCardId_1: number | null;

  @Column("int", { name: "chara_card_id_2", nullable: true })
  charaCardId_2: number | null;

  @Column("int", { name: "finish_point", nullable: true })
  finishPoint: number | null;

  @Column("int", { name: "result", nullable: true })
  result: number | null;

  @Column("int", { name: "quest_point", nullable: true })
  questPoint: number | null;

  @Column("int", { name: "server_type", nullable: true, default: () => "'0'" })
  serverType: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
