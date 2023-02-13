import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("chara_card_decks_name_index", ["name"], {})
@Index("chara_card_decks_avatar_id_index", ["avatarId"], {})
@Entity("chara_card_decks", { schema: "unlight_db" })
export class CharaCardDecks {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "name",
    nullable: true,
    length: 255,
    default: () => "'No Name'",
  })
  name: string | null;

  @Column("int", { name: "avatar_id", nullable: true })
  avatarId: number | null;

  @Column("int", { name: "kind", nullable: true, default: () => "'0'" })
  kind: number | null;

  @Column("int", { name: "level", nullable: true, default: () => "'1'" })
  level: number | null;

  @Column("int", { name: "exp", nullable: true, default: () => "'0'" })
  exp: number | null;

  @Column("int", { name: "max_cost", nullable: true, default: () => "'45'" })
  maxCost: number | null;

  @Column("int", { name: "status", nullable: true, default: () => "'0'" })
  status: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
