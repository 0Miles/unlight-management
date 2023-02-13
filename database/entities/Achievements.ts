import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("achievements", { schema: "unlight_db" })
export class Achievements {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "kind", nullable: true, default: () => "'0'" })
  kind: number | null;

  @Column("int", { name: "cond", nullable: true })
  cond: number | null;

  @Column("varchar", { name: "items", nullable: true, length: 255 })
  items: string | null;

  @Column("int", { name: "prerequisite", nullable: true, default: () => "'0'" })
  prerequisite: number | null;

  @Column("varchar", { name: "exclusion", nullable: true, length: 255 })
  exclusion: string | null;

  @Column("int", { name: "loop", nullable: true, default: () => "'0'" })
  loop: number | null;

  @Column("varchar", { name: "caption", nullable: true, length: 255 })
  caption: string | null;

  @Column("int", { name: "success_cond", nullable: true, default: () => "'0'" })
  successCond: number | null;

  @Column("varchar", { name: "explanation", nullable: true, length: 255 })
  explanation: string | null;

  @Column("varchar", { name: "set_loop", nullable: true, length: 255 })
  setLoop: string | null;

  @Column("varchar", {
    name: "set_end_type",
    nullable: true,
    length: 255,
    default: () => "'0'",
  })
  setEndType: string | null;

  @Column("datetime", { name: "event_start_at", nullable: true })
  eventStartAt: Date | null;

  @Column("datetime", { name: "event_end_at", nullable: true })
  eventEndAt: Date | null;

  @Column("int", {
    name: "clear_code_type",
    nullable: true,
    default: () => "'0'",
  })
  clearCodeType: number | null;

  @Column("int", {
    name: "clear_code_max",
    nullable: true,
    default: () => "'0'",
  })
  clearCodeMax: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
