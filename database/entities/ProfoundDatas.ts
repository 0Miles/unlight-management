import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("profound_datas", { schema: "unlight_db" })
export class ProfoundDatas {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "prf_type", nullable: true })
  prfType: number | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("int", { name: "rarity", nullable: true })
  rarity: number | null;

  @Column("int", { name: "level", nullable: true })
  level: number | null;

  @Column("varchar", { name: "ttl", nullable: true, length: 255 })
  ttl: string | null;

  @Column("int", { name: "core_monster_id", nullable: true })
  coreMonsterId: number | null;

  @Column("int", { name: "quest_map_id", nullable: true })
  questMapId: number | null;

  @Column("int", { name: "group_id", nullable: true })
  groupId: number | null;

  @Column("int", { name: "treasure_level", nullable: true })
  treasureLevel: number | null;

  @Column("int", { name: "stage", nullable: true })
  stage: number | null;

  @Column("int", {
    name: "finder_start_point",
    nullable: true,
    default: () => "'10'",
  })
  finderStartPoint: number | null;

  @Column("int", {
    name: "member_limit",
    nullable: true,
    default: () => "'100'",
  })
  memberLimit: number | null;

  @Column("varchar", { name: "caption", nullable: true, length: 255 })
  caption: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
