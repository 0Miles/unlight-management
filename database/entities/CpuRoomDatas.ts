import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cpu_room_datas", { schema: "unlight_db" })
export class CpuRoomDatas {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("int", { name: "level", nullable: true, default: () => "'0'" })
  level: number | null;

  @Column("int", {
    name: "cpu_card_data_no",
    nullable: true,
    default: () => "'0'",
  })
  cpuCardDataNo: number | null;

  @Column("int", { name: "rule", nullable: true, default: () => "'0'" })
  rule: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
