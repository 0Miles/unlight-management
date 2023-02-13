import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("scenario_flag_inventories_avatar_id_index", ["avatarId"], {})
@Entity("scenario_flag_inventories", { schema: "unlight_db" })
export class ScenarioFlagInventories {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "avatar_id", nullable: true })
  avatarId: number | null;

  @Column("varchar", {
    name: "flags",
    nullable: true,
    length: 255,
    default: () => "'{}'",
  })
  flags: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
