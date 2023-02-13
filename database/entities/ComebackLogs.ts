import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("comeback_logs_send_player_id_index", ["sendPlayerId"], {})
@Index("comeback_logs_comebacked_player_id_index", ["comebackedPlayerId"], {})
@Entity("comeback_logs", { schema: "unlight_db" })
export class ComebackLogs {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "send_player_id", nullable: true })
  sendPlayerId: number | null;

  @Column("varchar", {
    name: "comebacked_player_id",
    nullable: true,
    length: 255,
  })
  comebackedPlayerId: string | null;

  @Column("tinyint", {
    name: "comebacked",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  comebacked: boolean | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
