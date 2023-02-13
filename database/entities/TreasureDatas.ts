import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("treasure_datas", { schema: "unlight_db" })
export class TreasureDatas {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "name",
    nullable: true,
    length: 255,
    default: () => "'treasure'",
  })
  name: string | null;

  @Column("int", {
    name: "allocation_type",
    nullable: true,
    default: () => "'0'",
  })
  allocationType: number | null;

  @Column("varchar", { name: "allocation_id", nullable: true, length: 255 })
  allocationId: string | null;

  @Column("int", {
    name: "treasure_type",
    nullable: true,
    default: () => "'0'",
  })
  treasureType: number | null;

  @Column("int", { name: "slot_type", nullable: true, default: () => "'0'" })
  slotType: number | null;

  @Column("int", { name: "value", nullable: true, default: () => "'0'" })
  value: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
