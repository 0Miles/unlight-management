import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "chara_card_slot_inventories_chara_card_deck_id_index",
  ["charaCardDeckId"],
  {}
)
@Entity("chara_card_slot_inventories", { schema: "unlight_db" })
export class CharaCardSlotInventories {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "chara_card_deck_id", nullable: true })
  charaCardDeckId: number | null;

  @Column("int", { name: "deck_position", nullable: true })
  deckPosition: number | null;

  @Column("int", { name: "card_position", nullable: true })
  cardPosition: number | null;

  @Column("int", { name: "kind", nullable: true })
  kind: number | null;

  @Column("int", { name: "card_id", nullable: true })
  cardId: number | null;

  @Column("int", { name: "weapon_type", nullable: true, default: () => "'0'" })
  weaponType: number | null;

  @Column("int", { name: "before_deck_id", nullable: true })
  beforeDeckId: number | null;

  @Column("int", {
    name: "combine_param1",
    nullable: true,
    default: () => "'0'",
  })
  combineParam1: number | null;

  @Column("int", {
    name: "combine_param2",
    nullable: true,
    default: () => "'536881152'",
  })
  combineParam2: number | null;

  @Column("varchar", {
    name: "combine_param1_str",
    nullable: true,
    length: 255,
    default: () => "'0'",
  })
  combineParam1Str: string | null;

  @Column("int", { name: "level", nullable: true, default: () => "'1'" })
  level: number | null;

  @Column("int", { name: "exp", nullable: true, default: () => "'0'" })
  exp: number | null;

  @Column("int", {
    name: "combine_param3",
    nullable: true,
    default: () => "'0'",
  })
  combineParam3: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
