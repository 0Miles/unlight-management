import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("estimation_rankings", { schema: "unlight_db" })
export class EstimationRankings {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "rank_type", nullable: true })
  rankType: number | null;

  @Column("int", { name: "point", nullable: true, default: () => "'0'" })
  point: number | null;

  @Column("int", { name: "ranking", nullable: true, default: () => "'0'" })
  ranking: number | null;

  @Column("double", {
    name: "user_num",
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  userNum: number | null;

  @Column("int", { name: "rank_index", nullable: true })
  rankIndex: number | null;

  @Column("int", { name: "server_type", nullable: true, default: () => "'0'" })
  serverType: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
