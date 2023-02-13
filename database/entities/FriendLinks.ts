import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("friend_links_relating_player_id_index", ["relatingPlayerId"], {})
@Index("friend_links_related_player_id_index", ["relatedPlayerId"], {})
@Index("friend_links_server_type_index", ["serverType"], {})
@Entity("friend_links", { schema: "unlight_db" })
export class FriendLinks {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "relating_player_id", nullable: true })
  relatingPlayerId: number | null;

  @Column("int", { name: "related_player_id", nullable: true })
  relatedPlayerId: number | null;

  @Column("int", { name: "friend_type", nullable: true, default: () => "'0'" })
  friendType: number | null;

  @Column("tinyint", {
    name: "invated",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  invated: boolean | null;

  @Column("int", { name: "server_type", nullable: true, default: () => "'0'" })
  serverType: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
