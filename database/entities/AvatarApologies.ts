import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("avatar_apologies_avatar_id_index", ["avatarId"], {})
@Entity("avatar_apologies", { schema: "unlight_db" })
export class AvatarApologies {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "avatar_id", nullable: true })
  avatarId: number | null;

  @Column("text", { name: "body", nullable: true })
  body: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
