import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("avatar_items", { schema: "unlight_db" })
export class AvatarItems {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("int", { name: "item_no", nullable: true })
  itemNo: number | null;

  @Column("int", { name: "kind", nullable: true })
  kind: number | null;

  @Column("varchar", { name: "sub_kind", nullable: true, length: 255 })
  subKind: string | null;

  @Column("int", { name: "duration", nullable: true, default: () => "'0'" })
  duration: number | null;

  @Column("varchar", { name: "cond", nullable: true, length: 255 })
  cond: string | null;

  @Column("varchar", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("int", { name: "image_frame", nullable: true, default: () => "'0'" })
  imageFrame: number | null;

  @Column("varchar", { name: "effect_image", nullable: true, length: 255 })
  effectImage: string | null;

  @Column("varchar", { name: "caption", nullable: true, length: 255 })
  caption: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
