import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("charactors", { schema: "unlight_db" })
export class Charactors {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("int", { name: "parent_id", nullable: true, default: () => "'0'" })
  parentId: number | null;

  @Column("varchar", { name: "chara_attribute", nullable: true, length: 255 })
  charaAttribute: string | null;

  @Column("varchar", { name: "lobby_image", nullable: true, length: 255 })
  lobbyImage: string | null;

  @Column("varchar", { name: "chara_voice", nullable: true, length: 255 })
  charaVoice: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
