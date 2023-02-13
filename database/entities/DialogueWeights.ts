import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("dialogue_weights", { schema: "unlight_db" })
export class DialogueWeights {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", {
    name: "dialogue_type",
    nullable: true,
    default: () => "'0'",
  })
  dialogueType: number | null;

  @Column("int", { name: "chara_id", nullable: true })
  charaId: number | null;

  @Column("int", {
    name: "other_chara_id",
    nullable: true,
    default: () => "'0'",
  })
  otherCharaId: number | null;

  @Column("int", { name: "dialogue_id", nullable: true })
  dialogueId: number | null;

  @Column("int", { name: "weight", nullable: true, default: () => "'1'" })
  weight: number | null;

  @Column("int", { name: "level", nullable: true, default: () => "'1'" })
  level: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
