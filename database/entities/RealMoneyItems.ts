import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("real_money_items", { schema: "unlight_db" })
export class RealMoneyItems {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "name",
    nullable: true,
    length: 255,
    default: () => "'real_money_item'",
  })
  name: string | null;

  @Column("float", {
    name: "price",
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  price: number | null;

  @Column("int", { name: "rm_item_type", nullable: true, default: () => "'0'" })
  rmItemType: number | null;

  @Column("int", { name: "item_id", nullable: true, default: () => "'0'" })
  itemId: number | null;

  @Column("int", { name: "num", nullable: true, default: () => "'0'" })
  num: number | null;

  @Column("int", { name: "order", nullable: true, default: () => "'0'" })
  order: number | null;

  @Column("int", { name: "state", nullable: true, default: () => "'0'" })
  state: number | null;

  @Column("varchar", { name: "image_url", nullable: true, length: 255 })
  imageUrl: string | null;

  @Column("int", { name: "tab", nullable: true, default: () => "'0'" })
  tab: number | null;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @Column("int", { name: "extra_id", nullable: true, default: () => "'0'" })
  extraId: number | null;

  @Column("int", { name: "view_frame", nullable: true, default: () => "'0'" })
  viewFrame: number | null;

  @Column("int", { name: "sale_type", nullable: true, default: () => "'0'" })
  saleType: number | null;

  @Column("varchar", { name: "deck_image_url", nullable: true, length: 255 })
  deckImageUrl: string | null;

  @Column("float", {
    name: "twd",
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  twd: number | null;

  @Column("float", {
    name: "hkd",
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  hkd: number | null;

  @Column("float", {
    name: "usd",
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  usd: number | null;

  @Column("float", {
    name: "eur",
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  eur: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
