import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("quest_maps", { schema: "unlight_db" })
export class QuestMaps {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "caption", nullable: true, length: 255 })
  caption: string | null;

  @Column("int", { name: "region", nullable: true, default: () => "'0'" })
  region: number | null;

  @Column("int", { name: "level", nullable: true, default: () => "'0'" })
  level: number | null;

  @Column("int", { name: "difficulty", nullable: true, default: () => "'1'" })
  difficulty: number | null;

  @Column("int", { name: "ap", nullable: true, default: () => "'0'" })
  ap: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
