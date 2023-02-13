import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("chara_cards_name_index", ["name"], {})
@Entity("chara_cards", { schema: "unlight_db" })
export class CharaCards {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "ab_name", nullable: true, length: 255 })
  abName: string | null;

  @Column("int", { name: "level", nullable: true, default: () => "'1'" })
  level: number | null;

  @Column("int", { name: "hp", nullable: true, default: () => "'1'" })
  hp: number | null;

  @Column("int", { name: "ap", nullable: true, default: () => "'1'" })
  ap: number | null;

  @Column("int", { name: "dp", nullable: true, default: () => "'1'" })
  dp: number | null;

  @Column("int", { name: "rarity", nullable: true, default: () => "'1'" })
  rarity: number | null;

  @Column("int", { name: "deck_cost", nullable: true, default: () => "'1'" })
  deckCost: number | null;

  @Column("int", { name: "slot", nullable: true, default: () => "'0'" })
  slot: number | null;

  @Column("varchar", { name: "stand_image", nullable: true, length: 255 })
  standImage: string | null;

  @Column("varchar", { name: "chara_image", nullable: true, length: 255 })
  charaImage: string | null;

  @Column("varchar", { name: "artifact_image", nullable: true, length: 255 })
  artifactImage: string | null;

  @Column("varchar", { name: "bg_image", nullable: true, length: 255 })
  bgImage: string | null;

  @Column("varchar", { name: "caption", nullable: true, length: 255 })
  caption: string | null;

  @Column("int", { name: "charactor_id", nullable: true })
  charactorId: number | null;

  @Column("int", { name: "next_id", nullable: true })
  nextId: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("int", { name: "kind", nullable: true, default: () => "'0'" })
  kind: number | null;
}
