import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("chara_records", { schema: "unlight_db" })
export class CharaRecords {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "avatar_id", nullable: true })
  avatarId: number | null;

  @Column("int", { name: "charactor_id", nullable: true })
  charactorId: number | null;

  @Column("int", { name: "chara_card_id", nullable: true })
  charaCardId: number | null;

  @Column("int", { name: "likability", nullable: true, default: () => "'0'" })
  likability: number | null;

  @Column("int", { name: "hit_point", nullable: true, default: () => "'0'" })
  hitPoint: number | null;

  @Column("int", { name: "tension", nullable: true, default: () => "'50'" })
  tension: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
