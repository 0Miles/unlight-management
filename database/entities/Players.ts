import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("name", ["name"], { unique: true })
@Index("players_name_index", ["name"], {})
@Entity("players", { schema: "unlight_db" })
export class Players {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "name",
    nullable: true,
    unique: true,
    length: 255,
  })
  name: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("varchar", { name: "salt", nullable: true, length: 255 })
  salt: string | null;

  @Column("varchar", { name: "verifier", nullable: true, length: 255 })
  verifier: string | null;

  @Column("int", { name: "role", nullable: true, default: () => "'0'" })
  role: number | null;

  @Column("int", { name: "state", nullable: true, default: () => "'0'" })
  state: number | null;

  @Column("int", { name: "game_session", nullable: true })
  gameSession: number | null;

  @Column("datetime", { name: "login_at", nullable: true })
  loginAt: Date | null;

  @Column("datetime", { name: "logout_at", nullable: true })
  logoutAt: Date | null;

  @Column("int", { name: "total_time", nullable: true, default: () => "'0'" })
  totalTime: number | null;

  @Column("varchar", { name: "last_ip", nullable: true, length: 255 })
  lastIp: string | null;

  @Column("varchar", { name: "data_ver", nullable: true, length: 255 })
  dataVer: string | null;

  @Column("int", { name: "penalty", nullable: true, default: () => "'0'" })
  penalty: number | null;

  @Column("varchar", { name: "session_key", nullable: true, length: 255 })
  sessionKey: string | null;

  @Column("int", { name: "tutorial", nullable: true, default: () => "'0'" })
  tutorial: number | null;

  @Column("int", { name: "server_type", nullable: true, default: () => "'0'" })
  serverType: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
