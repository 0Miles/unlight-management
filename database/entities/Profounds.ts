import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("profounds_profound_hash_index", ["profoundHash"], {})
@Entity("profounds", { schema: "unlight_db" })
export class Profounds {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "data_id", nullable: true })
  dataId: number | null;

  @Column("varchar", { name: "profound_hash", nullable: true, length: 255 })
  profoundHash: string | null;

  @Column("datetime", { name: "close_at", nullable: true })
  closeAt: Date | null;

  @Column("int", { name: "state", nullable: true })
  state: number | null;

  @Column("int", { name: "map_id", nullable: true })
  mapId: number | null;

  @Column("int", { name: "pos_idx", nullable: true })
  posIdx: number | null;

  @Column("int", { name: "copy_type", nullable: true, default: () => "'1'" })
  copyType: number | null;

  @Column("tinyint", {
    name: "set_defeat_reward",
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  setDefeatReward: boolean | null;

  @Column("int", { name: "found_avatar_id", nullable: true })
  foundAvatarId: number | null;

  @Column("int", { name: "defeat_avatar_id", nullable: true })
  defeatAvatarId: number | null;

  @Column("datetime", { name: "finish_at", nullable: true })
  finishAt: Date | null;

  @Column("int", { name: "server_type", nullable: true, default: () => "'0'" })
  serverType: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
