import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("invite_logs_invite_player_id_index", ["invitePlayerId"], {})
@Index("invite_logs_invited_user_id_index", ["invitedUserId"], {})
@Index("invite_logs_sns_log_id_index", ["snsLogId"], {})
@Entity("invite_logs", { schema: "unlight_db" })
export class InviteLogs {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "invite_player_id", nullable: true })
  invitePlayerId: number | null;

  @Column("varchar", { name: "invited_user_id", nullable: true, length: 255 })
  invitedUserId: string | null;

  @Column("tinyint", {
    name: "invited",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  invited: boolean | null;

  @Column("int", { name: "sns_log_id", nullable: true })
  snsLogId: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
