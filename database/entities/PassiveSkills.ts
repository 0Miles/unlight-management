import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("passive_skills_name_index", ["name"], {})
@Entity("passive_skills", { schema: "unlight_db" })
export class PassiveSkills {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("int", { name: "passive_skill_no", nullable: true })
  passiveSkillNo: number | null;

  @Column("int", { name: "pow", nullable: true })
  pow: number | null;

  @Column("varchar", { name: "effect_image", nullable: true, length: 255 })
  effectImage: string | null;

  @Column("varchar", { name: "caption", nullable: true, length: 255 })
  caption: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
