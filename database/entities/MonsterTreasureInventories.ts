import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "monster_treasure_inventories_cpu_card_data_id_index",
  ["cpuCardDataId"],
  {}
)
@Entity("monster_treasure_inventories", { schema: "unlight_db" })
export class MonsterTreasureInventories {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "cpu_card_data_id", nullable: true })
  cpuCardDataId: number | null;

  @Column("int", { name: "treasure_data_id", nullable: true })
  treasureDataId: number | null;

  @Column("int", { name: "num", nullable: true })
  num: number | null;

  @Column("int", { name: "step", nullable: true })
  step: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
