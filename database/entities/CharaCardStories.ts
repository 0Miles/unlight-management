import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("chara_card_stories", { schema: "unlight_db" })
export class CharaCardStories {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "chara_card_id", nullable: true })
  charaCardId: number | null;

  @Column("int", { name: "book_type", nullable: true })
  bookType: number | null;

  @Column("text", { name: "title", nullable: true })
  title: string | null;

  @Column("text", { name: "content", nullable: true })
  content: string | null;

  @Column("varchar", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("varchar", { name: "age_no", nullable: true, length: 255 })
  ageNo: string | null;

  @Column("int", { name: "text_id", nullable: true })
  textId: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
