import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("quests_quest_map_id_index", ["questMapId"], {})
@Entity("quests", { schema: "unlight_db" })
export class Quests {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "quest_map_id", nullable: true })
  questMapId: number | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "caption", nullable: true, length: 255 })
  caption: string | null;

  @Column("int", { name: "ap", nullable: true, default: () => "'0'" })
  ap: number | null;

  @Column("int", { name: "kind", nullable: true, default: () => "'0'" })
  kind: number | null;

  @Column("int", { name: "difficulty", nullable: true, default: () => "'0'" })
  difficulty: number | null;

  @Column("int", { name: "rarity", nullable: true, default: () => "'0'" })
  rarity: number | null;

  @Column("int", { name: "story_no", nullable: true, default: () => "'0'" })
  storyNo: number | null;

  @Column("int", { name: "quest_land_id_0_0", default: () => "'0'" })
  questLandId_0_0: number;

  @Column("int", { name: "next_0_0", default: () => "'0'" })
  next_0_0: number;

  @Column("int", { name: "quest_land_id_0_1", default: () => "'0'" })
  questLandId_0_1: number;

  @Column("int", { name: "next_0_1", default: () => "'0'" })
  next_0_1: number;

  @Column("int", { name: "quest_land_id_0_2", default: () => "'0'" })
  questLandId_0_2: number;

  @Column("int", { name: "next_0_2", default: () => "'0'" })
  next_0_2: number;

  @Column("int", { name: "quest_land_id_1_0", default: () => "'0'" })
  questLandId_1_0: number;

  @Column("int", { name: "next_1_0", default: () => "'0'" })
  next_1_0: number;

  @Column("int", { name: "quest_land_id_1_1", default: () => "'0'" })
  questLandId_1_1: number;

  @Column("int", { name: "next_1_1", default: () => "'0'" })
  next_1_1: number;

  @Column("int", { name: "quest_land_id_1_2", default: () => "'0'" })
  questLandId_1_2: number;

  @Column("int", { name: "next_1_2", default: () => "'0'" })
  next_1_2: number;

  @Column("int", { name: "quest_land_id_2_0", default: () => "'0'" })
  questLandId_2_0: number;

  @Column("int", { name: "next_2_0", default: () => "'0'" })
  next_2_0: number;

  @Column("int", { name: "quest_land_id_2_1", default: () => "'0'" })
  questLandId_2_1: number;

  @Column("int", { name: "next_2_1", default: () => "'0'" })
  next_2_1: number;

  @Column("int", { name: "quest_land_id_2_2", default: () => "'0'" })
  questLandId_2_2: number;

  @Column("int", { name: "next_2_2", default: () => "'0'" })
  next_2_2: number;

  @Column("int", { name: "quest_land_id_3_0", default: () => "'0'" })
  questLandId_3_0: number;

  @Column("int", { name: "next_3_0", default: () => "'0'" })
  next_3_0: number;

  @Column("int", { name: "quest_land_id_3_1", default: () => "'0'" })
  questLandId_3_1: number;

  @Column("int", { name: "next_3_1", default: () => "'0'" })
  next_3_1: number;

  @Column("int", { name: "quest_land_id_3_2", default: () => "'0'" })
  questLandId_3_2: number;

  @Column("int", { name: "next_3_2", default: () => "'0'" })
  next_3_2: number;

  @Column("int", { name: "quest_land_id_4_0", default: () => "'0'" })
  questLandId_4_0: number;

  @Column("int", { name: "next_4_0", default: () => "'0'" })
  next_4_0: number;

  @Column("int", { name: "quest_land_id_4_1", default: () => "'0'" })
  questLandId_4_1: number;

  @Column("int", { name: "next_4_1", default: () => "'0'" })
  next_4_1: number;

  @Column("int", { name: "quest_land_id_4_2", default: () => "'0'" })
  questLandId_4_2: number;

  @Column("int", { name: "next_4_2", default: () => "'0'" })
  next_4_2: number;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
