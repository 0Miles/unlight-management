import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("match_logs_winner_avatar_id_index", ["winnerAvatarId"], {})
@Entity("match_logs", { schema: "unlight_db" })
export class MatchLogs {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "channel_id", nullable: true })
  channelId: number | null;

  @Column("text", { name: "match_name", nullable: true })
  matchName: string | null;

  @Column("int", { name: "match_rule", nullable: true })
  matchRule: number | null;

  @Column("int", { name: "match_stage", nullable: true })
  matchStage: number | null;

  @Column("int", { name: "a_avatar_id", nullable: true })
  aAvatarId: number | null;

  @Column("int", { name: "b_avatar_id", nullable: true })
  bAvatarId: number | null;

  @Column("int", { name: "a_chara_card_id_0", nullable: true })
  aCharaCardId_0: number | null;

  @Column("int", { name: "a_chara_card_id_1", nullable: true })
  aCharaCardId_1: number | null;

  @Column("int", { name: "a_chara_card_id_2", nullable: true })
  aCharaCardId_2: number | null;

  @Column("int", { name: "b_chara_card_id_0", nullable: true })
  bCharaCardId_0: number | null;

  @Column("int", { name: "b_chara_card_id_1", nullable: true })
  bCharaCardId_1: number | null;

  @Column("int", { name: "b_chara_card_id_2", nullable: true })
  bCharaCardId_2: number | null;

  @Column("int", { name: "a_deck_cost", nullable: true })
  aDeckCost: number | null;

  @Column("int", { name: "b_deck_cost", nullable: true })
  bDeckCost: number | null;

  @Column("int", {
    name: "cpu_card_data_id",
    nullable: true,
    default: () => "'0'",
  })
  cpuCardDataId: number | null;

  @Column("int", { name: "state", nullable: true })
  state: number | null;

  @Column("int", { name: "match_option", nullable: true, default: () => "'0'" })
  matchOption: number | null;

  @Column("int", { name: "match_level", nullable: true })
  matchLevel: number | null;

  @Column("int", { name: "winner_avatar_id", nullable: true })
  winnerAvatarId: number | null;

  @Column("int", { name: "get_bp", nullable: true })
  getBp: number | null;

  @Column("int", { name: "lose_bp", nullable: true })
  loseBp: number | null;

  @Column("int", {
    name: "channel_set_rule",
    nullable: true,
    default: () => "'0'",
  })
  channelSetRule: number | null;

  @Column("varchar", { name: "a_remain_hp_set", nullable: true, length: 255 })
  aRemainHpSet: string | null;

  @Column("varchar", { name: "b_remain_hp_set", nullable: true, length: 255 })
  bRemainHpSet: string | null;

  @Column("int", { name: "turn_num", nullable: true, default: () => "'0'" })
  turnNum: number | null;

  @Column("int", { name: "warn", nullable: true, default: () => "'0'" })
  warn: number | null;

  @Column("int", { name: "watch_mode", nullable: true, default: () => "'0'" })
  watchMode: number | null;

  @Column("int", { name: "server_type", nullable: true, default: () => "'0'" })
  serverType: number | null;

  @Column("datetime", { name: "start_at", nullable: true })
  startAt: Date | null;

  @Column("datetime", { name: "finish_at", nullable: true })
  finishAt: Date | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
