import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("feat_inventories_chara_card_id_index", ["charaCardId"], {})
@Entity("feat_inventories", { schema: "unlight_db" })
export class FeatInventories {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "chara_card_id", nullable: true })
  charaCardId: number | null;

  @Column("int", { name: "feat_id", nullable: true })
  featId: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
