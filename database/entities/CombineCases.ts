import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("combine_cases_weapon_card_id_index", ["weaponCardId"], {})
@Entity("combine_cases", { schema: "unlight_db" })
export class CombineCases {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", {
    name: "weapon_card_id",
    nullable: true,
    default: () => "'0'",
  })
  weaponCardId: number | null;

  @Column("varchar", { name: "requirement", nullable: true, length: 255 })
  requirement: string | null;

  @Column("int", { name: "mod_type", nullable: true, default: () => "'0'" })
  modType: number | null;

  @Column("varchar", { name: "mod_args", nullable: true, length: 255 })
  modArgs: string | null;

  @Column("int", { name: "limited", nullable: true, default: () => "'0'" })
  limited: number | null;

  @Column("int", { name: "priority", nullable: true, default: () => "'0'" })
  priority: number | null;

  @Column("int", {
    name: "combined_w_id",
    nullable: true,
    default: () => "'0'",
  })
  combinedWId: number | null;

  @Column("int", { name: "pow", nullable: true, default: () => "'100'" })
  pow: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
