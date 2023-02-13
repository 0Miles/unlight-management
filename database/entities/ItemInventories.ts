import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("item_inventories_avatar_id_index", ["avatarId"], {})
@Entity("item_inventories", { schema: "unlight_db" })
export class ItemInventories {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "avatar_id", nullable: true })
  avatarId: number | null;

  @Column("int", { name: "avatar_item_id", nullable: true })
  avatarItemId: number | null;

  @Column("int", { name: "state", nullable: true, default: () => "'0'" })
  state: number | null;

  @Column("int", { name: "server_type", nullable: true, default: () => "'0'" })
  serverType: number | null;

  @Column("datetime", { name: "use_at", nullable: true })
  useAt: Date | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
