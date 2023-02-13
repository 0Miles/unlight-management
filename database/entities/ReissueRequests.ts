import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("reissue_requests_uniq_str_index", ["uniqStr"], {})
@Index("reissue_requests_email_index", ["email"], {})
@Entity("reissue_requests", { schema: "unlight_db" })
export class ReissueRequests {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "uniq_str", nullable: true, length: 255 })
  uniqStr: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("int", { name: "player_id", nullable: true, default: () => "'0'" })
  playerId: number | null;

  @Column("int", { name: "status", nullable: true, default: () => "'0'" })
  status: number | null;

  @Column("datetime", { name: "limit_at", nullable: true })
  limitAt: Date | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
