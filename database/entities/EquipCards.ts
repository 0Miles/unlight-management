import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("equip_cards", { schema: "unlight_db" })
export class EquipCards {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("int", { name: "equip_no", nullable: true })
  equipNo: number | null;

  @Column("int", { name: "card_cost", nullable: true, default: () => "'0'" })
  cardCost: number | null;

  @Column("varchar", { name: "restriction", nullable: true, length: 255 })
  restriction: string | null;

  @Column("varchar", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("varchar", { name: "caption", nullable: true, length: 255 })
  caption: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
