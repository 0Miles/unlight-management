import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("profound_treasure_datas", { schema: "unlight_db" })
export class ProfoundTreasureDatas {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "level", nullable: true })
  level: number | null;

  @Column("int", { name: "prf_trs_type", nullable: true, default: () => "'0'" })
  prfTrsType: number | null;

  @Column("int", { name: "rank_min", nullable: true, default: () => "'0'" })
  rankMin: number | null;

  @Column("int", { name: "rank_max", nullable: true, default: () => "'0'" })
  rankMax: number | null;

  @Column("int", {
    name: "treasure_type",
    nullable: true,
    default: () => "'0'",
  })
  treasureType: number | null;

  @Column("int", { name: "treasure_id", nullable: true, default: () => "'0'" })
  treasureId: number | null;

  @Column("int", { name: "slot_type", nullable: true, default: () => "'0'" })
  slotType: number | null;

  @Column("int", { name: "value", nullable: true, default: () => "'0'" })
  value: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
