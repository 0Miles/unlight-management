import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("chara_card_requirements_chara_card_id_index", ["charaCardId"], {})
@Entity("chara_card_requirements", { schema: "unlight_db" })
export class CharaCardRequirements {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "chara_card_id", nullable: true })
  charaCardId: number | null;

  @Column("int", { name: "require_chara_card_id", nullable: true })
  requireCharaCardId: number | null;

  @Column("int", { name: "require_num", nullable: true })
  requireNum: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
