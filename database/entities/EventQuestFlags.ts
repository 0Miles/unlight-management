import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("event_quest_flags_avatar_id_index", ["avatarId"], {})
@Entity("event_quest_flags", { schema: "unlight_db" })
export class EventQuestFlags {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "avatar_id", nullable: true })
  avatarId: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
