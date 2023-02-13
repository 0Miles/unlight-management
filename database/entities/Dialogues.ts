import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("dialogues", { schema: "unlight_db" })
export class Dialogues {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("text", { name: "content", nullable: true })
  content: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
