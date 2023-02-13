import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("weapon_cards", { schema: "unlight_db" })
export class WeaponCards {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("int", { name: "weapon_no", nullable: true })
  weaponNo: number | null;

  @Column("varchar", { name: "passive_id", nullable: true, length: 255 })
  passiveId: string | null;

  @Column("int", { name: "card_cost", nullable: true, default: () => "'0'" })
  cardCost: number | null;

  @Column("varchar", { name: "restriction", nullable: true, length: 255 })
  restriction: string | null;

  @Column("varchar", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("varchar", { name: "caption", nullable: true, length: 255 })
  caption: string | null;

  @Column("int", { name: "weapon_type", nullable: true, default: () => "'0'" })
  weaponType: number | null;

  @Column("int", {
    name: "material_use_cnt",
    nullable: true,
    default: () => "'0'",
  })
  materialUseCnt: number | null;

  @Column("int", {
    name: "material_add_param",
    nullable: true,
    default: () => "'0'",
  })
  materialAddParam: number | null;

  @Column("int", { name: "material_exp", nullable: true, default: () => "'0'" })
  materialExp: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
