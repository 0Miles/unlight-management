import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("action_cards", { schema: "unlight_db" })
export class ActionCards {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "u_type", nullable: true, default: () => "'0'" })
  uType: number | null;

  @Column("int", { name: "u_value", nullable: true, default: () => "'1'" })
  uValue: number | null;

  @Column("int", { name: "b_type", nullable: true, default: () => "'0'" })
  bType: number | null;

  @Column("int", { name: "b_value", nullable: true, default: () => "'1'" })
  bValue: number | null;

  @Column("int", { name: "event_no", nullable: true, default: () => "'0'" })
  eventNo: number | null;

  @Column("varchar", { name: "caption", nullable: true, length: 255 })
  caption: string | null;

  @Column("varchar", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
