import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("payment_logs", { schema: "unlight_db" })
export class PaymentLogs {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "player_id", nullable: true })
  playerId: number | null;

  @Column("int", { name: "real_money_item_id", nullable: true })
  realMoneyItemId: number | null;

  @Column("varchar", { name: "payment_id", nullable: true, length: 255 })
  paymentId: string | null;

  @Column("int", { name: "num", nullable: true, default: () => "'1'" })
  num: number | null;

  @Column("float", {
    name: "amount",
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  amount: number | null;

  @Column("int", { name: "result", nullable: true, default: () => "'0'" })
  result: number | null;

  @Column("text", { name: "buyer_data", nullable: true })
  buyerData: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
