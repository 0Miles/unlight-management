import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("achievement_inventories_avatar_id_index", ["avatarId"], {})
@Entity("achievement_inventories", { schema: "unlight_db" })
export class AchievementInventories {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "avatar_id", nullable: true })
  avatarId: number | null;

  @Column("int", { name: "achievement_id", nullable: true })
  achievementId: number | null;

  @Column("int", { name: "state", default: () => "'0'" })
  state: number;

  @Column("int", { name: "progress", nullable: true, default: () => "'0'" })
  progress: number | null;

  @Column("int", {
    name: "before_avatar_id",
    nullable: true,
    default: () => "'0'",
  })
  beforeAvatarId: number | null;

  @Column("datetime", { name: "end_at", nullable: true })
  endAt: Date | null;

  @Column("varchar", { name: "code", nullable: true, length: 255 })
  code: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
