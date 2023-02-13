import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("lot_logs", { schema: "unlight_db" })
export class LotLogs {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "player_id", nullable: true })
  playerId: number | null;

  @Column("int", { name: "lot_type", nullable: true })
  lotType: number | null;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @Column("int", { name: "geted_lot_no", nullable: true })
  getedLotNo: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
