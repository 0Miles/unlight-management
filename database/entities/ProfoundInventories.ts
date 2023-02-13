import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("profound_inventories_avatar_id_index", ["avatarId"], {})
@Index("profound_inventories_profound_id_index", ["profoundId"], {})
@Index("profound_inventories_state_index", ["state"], {})
@Entity("profound_inventories", { schema: "unlight_db" })
export class ProfoundInventories {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "avatar_id", nullable: true })
  avatarId: number | null;

  @Column("int", { name: "profound_id", nullable: true })
  profoundId: number | null;

  @Column("int", { name: "deck_idx", nullable: true, default: () => "'0'" })
  deckIdx: number | null;

  @Column("int", {
    name: "chara_card_dmg_1",
    nullable: true,
    default: () => "'0'",
  })
  charaCardDmg_1: number | null;

  @Column("int", {
    name: "chara_card_dmg_2",
    nullable: true,
    default: () => "'0'",
  })
  charaCardDmg_2: number | null;

  @Column("int", {
    name: "chara_card_dmg_3",
    nullable: true,
    default: () => "'0'",
  })
  charaCardDmg_3: number | null;

  @Column("int", { name: "damage_count", nullable: true, default: () => "'0'" })
  damageCount: number | null;

  @Column("int", { name: "score", nullable: true, default: () => "'0'" })
  score: number | null;

  @Column("int", { name: "state", nullable: true, default: () => "'0'" })
  state: number | null;

  @Column("tinyint", {
    name: "found",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  found: boolean | null;

  @Column("tinyint", {
    name: "defeat",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  defeat: boolean | null;

  @Column("int", { name: "reward_state", nullable: true, default: () => "'0'" })
  rewardState: number | null;

  @Column("int", { name: "btl_count", nullable: true, default: () => "'0'" })
  btlCount: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
