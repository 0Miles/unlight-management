import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("scenarios", { schema: "unlight_db" })
export class Scenarios {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "chara_id", nullable: true })
  charaId: number | null;

  @Column("text", { name: "script", nullable: true })
  script: string | null;

  @Column("int", { name: "count", nullable: true })
  count: number | null;

  @Column("int", { name: "priority", nullable: true })
  priority: number | null;

  @Column("datetime", { name: "event_start_at", nullable: true })
  eventStartAt: Date | null;

  @Column("datetime", { name: "event_end_at", nullable: true })
  eventEndAt: Date | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
