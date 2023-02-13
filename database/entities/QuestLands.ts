import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("quest_lands", { schema: "unlight_db" })
export class QuestLands {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("int", { name: "monstar_no", nullable: true, default: () => "'0'" })
  monstarNo: number | null;

  @Column("int", { name: "treasure_no", nullable: true, default: () => "'0'" })
  treasureNo: number | null;

  @Column("int", { name: "event_no", nullable: true, default: () => "'0'" })
  eventNo: number | null;

  @Column("int", { name: "stage", nullable: true, default: () => "'0'" })
  stage: number | null;

  @Column("varchar", { name: "caption", nullable: true, length: 255 })
  caption: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
