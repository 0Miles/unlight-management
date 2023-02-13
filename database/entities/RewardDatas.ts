import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("reward_datas", { schema: "unlight_db" })
export class RewardDatas {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "exps", nullable: true, default: () => "'0'" })
  exps: number | null;

  @Column("int", { name: "gems", nullable: true, default: () => "'0'" })
  gems: number | null;

  @Column("int", { name: "item_id", nullable: true, default: () => "'0'" })
  itemId: number | null;

  @Column("int", { name: "item_num", nullable: true, default: () => "'0'" })
  itemNum: number | null;

  @Column("int", { name: "own_card_lv", nullable: true, default: () => "'0'" })
  ownCardLv: number | null;

  @Column("int", { name: "own_card_num", nullable: true, default: () => "'0'" })
  ownCardNum: number | null;

  @Column("int", {
    name: "random_card_rarity",
    nullable: true,
    default: () => "'0'",
  })
  randomCardRarity: number | null;

  @Column("int", {
    name: "random_card_num",
    nullable: true,
    default: () => "'0'",
  })
  randomCardNum: number | null;

  @Column("int", { name: "rare_card_lv", nullable: true, default: () => "'0'" })
  rareCardLv: number | null;

  @Column("int", {
    name: "event_card_id",
    nullable: true,
    default: () => "'0'",
  })
  eventCardId: number | null;

  @Column("int", {
    name: "event_card_num",
    nullable: true,
    default: () => "'0'",
  })
  eventCardNum: number | null;

  @Column("int", {
    name: "weapon_card_id",
    nullable: true,
    default: () => "'0'",
  })
  weaponCardId: number | null;

  @Column("int", {
    name: "weapon_card_num",
    nullable: true,
    default: () => "'0'",
  })
  weaponCardNum: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
