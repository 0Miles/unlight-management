import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("event_quest_flag_inventories_avatar_id_index", ["avatarId"], {})
@Index(
  "event_quest_flag_inventories_event_quest_flag_id_index",
  ["eventQuestFlagId"],
  {}
)
@Index("event_quest_flag_inventories_event_id_index", ["eventId"], {})
@Entity("event_quest_flag_inventories", { schema: "unlight_db" })
export class EventQuestFlagInventories {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "avatar_id", nullable: true })
  avatarId: number | null;

  @Column("int", {
    name: "event_quest_flag_id",
    nullable: true,
    default: () => "'0'",
  })
  eventQuestFlagId: number | null;

  @Column("int", { name: "event_id", nullable: true })
  eventId: number | null;

  @Column("int", { name: "quest_flag", nullable: true })
  questFlag: number | null;

  @Column("int", {
    name: "quest_clear_num",
    nullable: true,
    default: () => "'0'",
  })
  questClearNum: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
