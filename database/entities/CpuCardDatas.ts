import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cpu_card_datas", { schema: "unlight_db" })
export class CpuCardDatas {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "name",
    nullable: true,
    length: 255,
    default: () => "'monster'",
  })
  name: string | null;

  @Column("int", {
    name: "allocation_type",
    nullable: true,
    default: () => "'0'",
  })
  allocationType: number | null;

  @Column("varchar", {
    name: "chara_card_id",
    nullable: true,
    length: 255,
    default: () => "'1001+1001+1001'",
  })
  charaCardId: string | null;

  @Column("varchar", {
    name: "weapon_card_id",
    nullable: true,
    length: 255,
    default: () => "'0+0+0'",
  })
  weaponCardId: string | null;

  @Column("varchar", {
    name: "equip_card_id",
    nullable: true,
    length: 255,
    default: () => "'0+0+0'",
  })
  equipCardId: string | null;

  @Column("varchar", {
    name: "event_card_id",
    nullable: true,
    length: 255,
    default: () => "'1/1/1+1/1/1+1/1/1'",
  })
  eventCardId: string | null;

  @Column("int", { name: "ai_rank", nullable: true, default: () => "'10'" })
  aiRank: number | null;

  @Column("int", { name: "treasure_id", nullable: true })
  treasureId: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
