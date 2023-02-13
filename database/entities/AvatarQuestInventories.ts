import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("avatar_quest_inventories_avatar_id_index", ["avatarId"], {})
@Entity("avatar_quest_inventories", { schema: "unlight_db" })
export class AvatarQuestInventories {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "avatar_id", nullable: true })
  avatarId: number | null;

  @Column("int", { name: "quest_id", nullable: true })
  questId: number | null;

  @Column("int", { name: "status", nullable: true })
  status: number | null;

  @Column("int", { name: "progress", nullable: true, default: () => "'0'" })
  progress: number | null;

  @Column("int", { name: "deck_index", nullable: true, default: () => "'1'" })
  deckIndex: number | null;

  @Column("int", { name: "hp0", nullable: true, default: () => "'0'" })
  hp0: number | null;

  @Column("int", { name: "hp1", nullable: true, default: () => "'0'" })
  hp1: number | null;

  @Column("int", { name: "hp2", nullable: true, default: () => "'0'" })
  hp2: number | null;

  @Column("int", { name: "before_avatar_id", nullable: true })
  beforeAvatarId: number | null;

  @Column("datetime", { name: "find_at", nullable: true })
  findAt: Date | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
