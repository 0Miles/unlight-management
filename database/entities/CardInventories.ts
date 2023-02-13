import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("card_inventories", { schema: "unlight_db" })
export class CardInventories {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "chara_card_deck_id", nullable: true })
  charaCardDeckId: number | null;

  @Column("int", { name: "chara_card_id", nullable: true })
  charaCardId: number | null;

  @Column("int", { name: "position", default: () => "'0'" })
  position: number;

  @Column("int", { name: "before_deck_id", nullable: true })
  beforeDeckId: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
