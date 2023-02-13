import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("event_cards", { schema: "unlight_db" })
export class EventCards {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("int", { name: "event_no", nullable: true })
  eventNo: number | null;

  @Column("int", { name: "card_cost", nullable: true, default: () => "'0'" })
  cardCost: number | null;

  @Column("int", { name: "color", nullable: true, default: () => "'0'" })
  color: number | null;

  @Column("int", { name: "max_in_deck", nullable: true, default: () => "'0'" })
  maxInDeck: number | null;

  @Column("varchar", { name: "restriction", nullable: true, length: 255 })
  restriction: string | null;

  @Column("varchar", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("varchar", { name: "caption", nullable: true, length: 255 })
  caption: string | null;

  @Column("tinyint", {
    name: "filler",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  filler: boolean | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
