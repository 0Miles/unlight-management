import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("total_event_rankings_avatar_id_index", ["avatarId"], {})
@Entity("total_event_rankings", { schema: "unlight_db" })
export class TotalEventRankings {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "avatar_id", nullable: true })
  avatarId: number | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("int", { name: "point", nullable: true, default: () => "'0'" })
  point: number | null;

  @Column("int", { name: "server_type", nullable: true, default: () => "'0'" })
  serverType: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
