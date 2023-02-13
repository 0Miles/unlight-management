import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("rare_card_lots_lot_kind_index", ["lotKind"], {})
@Entity("rare_card_lots", { schema: "unlight_db" })
export class RareCardLots {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "lot_kind", nullable: true, default: () => "'0'" })
  lotKind: number | null;

  @Column("int", { name: "article_kind", nullable: true, default: () => "'0'" })
  articleKind: number | null;

  @Column("int", { name: "article_id", nullable: true })
  articleId: number | null;

  @Column("int", { name: "order", nullable: true, default: () => "'0'" })
  order: number | null;

  @Column("int", { name: "rarity", nullable: true, default: () => "'0'" })
  rarity: number | null;

  @Column("int", { name: "visible", nullable: true, default: () => "'0'" })
  visible: number | null;

  @Column("int", { name: "num", nullable: true, default: () => "'1'" })
  num: number | null;

  @Column("varchar", { name: "image_url", nullable: true, length: 255 })
  imageUrl: string | null;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
