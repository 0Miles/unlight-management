import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("feats_name_index", ["name"], {})
@Entity("feats", { schema: "unlight_db" })
export class Feats {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("int", { name: "feat_no", nullable: true })
  featNo: number | null;

  @Column("int", { name: "pow", nullable: true })
  pow: number | null;

  @Column("varchar", { name: "dice_attribute", nullable: true, length: 255 })
  diceAttribute: string | null;

  @Column("varchar", { name: "effect_image", nullable: true, length: 255 })
  effectImage: string | null;

  @Column("varchar", { name: "caption", nullable: true, length: 255 })
  caption: string | null;

  @Column("text", { name: "condition", nullable: true })
  condition: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
