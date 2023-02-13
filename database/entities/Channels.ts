import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("channels", { schema: "unlight_db" })
export class Channels {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "name",
    nullable: true,
    length: 255,
    default: () => "'新規サーバ'",
  })
  name: string | null;

  @Column("int", { name: "order", nullable: true, default: () => "'0'" })
  order: number | null;

  @Column("int", { name: "rule", nullable: true, default: () => "'0'" })
  rule: number | null;

  @Column("int", { name: "max", nullable: true, default: () => "'2000'" })
  max: number | null;

  @Column("varchar", { name: "host_name", nullable: true, length: 255 })
  hostName: string | null;

  @Column("varchar", { name: "host", nullable: true, length: 255 })
  host: string | null;

  @Column("int", { name: "port", nullable: true, default: () => "'0'" })
  port: number | null;

  @Column("varchar", { name: "chat_host", nullable: true, length: 255 })
  chatHost: string | null;

  @Column("int", { name: "chat_port", nullable: true, default: () => "'0'" })
  chatPort: number | null;

  @Column("varchar", { name: "duel_host", nullable: true, length: 255 })
  duelHost: string | null;

  @Column("int", { name: "duel_port", nullable: true, default: () => "'0'" })
  duelPort: number | null;

  @Column("varchar", { name: "watch_host", nullable: true, length: 255 })
  watchHost: string | null;

  @Column("int", { name: "watch_port", nullable: true, default: () => "'0'" })
  watchPort: number | null;

  @Column("int", { name: "state", nullable: true, default: () => "'1'" })
  state: number | null;

  @Column("varchar", { name: "caption", nullable: true, length: 255 })
  caption: string | null;

  @Column("int", { name: "count", nullable: true, default: () => "'0'" })
  count: number | null;

  @Column("int", { name: "penalty_type", nullable: true, default: () => "'0'" })
  penaltyType: number | null;

  @Column("int", { name: "watch_mode", nullable: true, default: () => "'0'" })
  watchMode: number | null;

  @Column("int", {
    name: "cost_limit_min",
    nullable: true,
    default: () => "'0'",
  })
  costLimitMin: number | null;

  @Column("int", {
    name: "cost_limit_max",
    nullable: true,
    default: () => "'0'",
  })
  costLimitMax: number | null;

  @Column("int", {
    name: "cpu_matching_type",
    nullable: true,
    default: () => "'0'",
  })
  cpuMatchingType: number | null;

  @Column("varchar", {
    name: "cpu_matching_condition",
    nullable: true,
    length: 255,
  })
  cpuMatchingCondition: string | null;

  @Column("int", { name: "server_type", nullable: true, default: () => "'0'" })
  serverType: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
