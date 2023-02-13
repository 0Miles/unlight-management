import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("passive_skill_inventories_chara_card_id_index", ["charaCardId"], {})
@Entity("passive_skill_inventories", { schema: "unlight_db" })
export class PassiveSkillInventories {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "chara_card_id", nullable: true })
  charaCardId: number | null;

  @Column("int", { name: "passive_skill_id", nullable: true })
  passiveSkillId: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
