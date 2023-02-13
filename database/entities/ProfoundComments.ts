import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("profound_comments_profound_id_index", ["profoundId"], {})
@Index("profound_comments_avatar_id_index", ["avatarId"], {})
@Entity("profound_comments", { schema: "unlight_db" })
export class ProfoundComments {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "profound_id", nullable: true })
  profoundId: number | null;

  @Column("int", { name: "avatar_id", nullable: true })
  avatarId: number | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "comment", nullable: true, length: 255 })
  comment: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
