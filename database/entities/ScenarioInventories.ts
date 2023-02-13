import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("scenario_inventories_avatar_id_index", ["avatarId"], {})
@Entity("scenario_inventories", { schema: "unlight_db" })
export class ScenarioInventories {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "avatar_id", nullable: true })
  avatarId: number | null;

  @Column("int", { name: "scenario_id", nullable: true })
  scenarioId: number | null;

  @Column("int", { name: "state", nullable: true })
  state: number | null;

  @Column("datetime", { name: "end_at", nullable: true })
  endAt: Date | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
