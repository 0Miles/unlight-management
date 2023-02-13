import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("serial", ["serial"], { unique: true })
@Index("event_serials_serial_index", ["serial"], {})
@Entity("event_serials", { schema: "unlight_db" })
export class EventSerials {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "serial",
    nullable: true,
    unique: true,
    length: 255,
  })
  serial: string | null;

  @Column("varchar", {
    name: "pass",
    nullable: true,
    length: 255,
    default: () => "'pass'",
  })
  pass: string | null;

  @Column("int", { name: "rm_item_type", nullable: true, default: () => "'0'" })
  rmItemType: number | null;

  @Column("int", { name: "item_id", nullable: true, default: () => "'0'" })
  itemId: number | null;

  @Column("int", { name: "num", nullable: true, default: () => "'1'" })
  num: number | null;

  @Column("int", { name: "extra_id", nullable: true, default: () => "'0'" })
  extraId: number | null;

  @Column("int", { name: "state", nullable: true, default: () => "'0'" })
  state: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
