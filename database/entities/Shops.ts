import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("shops_article_kind_index", ["articleKind"], {})
@Entity("shops", { schema: "unlight_db" })
export class Shops {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "shop_type", nullable: true })
  shopType: number | null;

  @Column("int", { name: "article_kind", nullable: true })
  articleKind: number | null;

  @Column("int", { name: "article_id", nullable: true })
  articleId: number | null;

  @Column("int", { name: "price", nullable: true, default: () => "'0'" })
  price: number | null;

  @Column("int", { name: "coin_0", nullable: true, default: () => "'0'" })
  coin_0: number | null;

  @Column("int", { name: "coin_1", nullable: true, default: () => "'0'" })
  coin_1: number | null;

  @Column("int", { name: "coin_2", nullable: true, default: () => "'0'" })
  coin_2: number | null;

  @Column("int", { name: "coin_3", nullable: true, default: () => "'0'" })
  coin_3: number | null;

  @Column("int", { name: "coin_4", nullable: true, default: () => "'0'" })
  coin_4: number | null;

  @Column("int", { name: "coin_ex", nullable: true, default: () => "'0'" })
  coinEx: number | null;

  @Column("int", { name: "view_frame", nullable: true, default: () => "'0'" })
  viewFrame: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
