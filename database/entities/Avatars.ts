import type { Relation } from "typeorm";
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PartInventories } from "./PartInventories";

@Index("avatars_name_index", ["name"], {})
@Entity("avatars", { schema: "unlight_db" })
export class Avatars {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("varchar", { name: "name", nullable: true, length: 255 })
    name: string | null;

    @Column("int", { name: "player_id", nullable: true })
    playerId: number | null;

    @Column("int", { name: "gems", nullable: true, default: () => "'0'" })
    gems: number | null;

    @Column("int", { name: "exp", nullable: true, default: () => "'0'" })
    exp: number | null;

    @Column("int", { name: "level", nullable: true, default: () => "'1'" })
    level: number | null;

    @Column("int", { name: "energy", nullable: true, default: () => "'5'" })
    energy: number | null;

    @Column("int", { name: "energy_max", nullable: true, default: () => "'5'" })
    energyMax: number | null;

    @Column("int", {
        name: "recovery_interval",
        nullable: true,
        default: () => "'1800'",
    })
    recoveryInterval: number | null;

    @Column("int", { name: "current_deck", nullable: true, default: () => "'1'" })
    currentDeck: number | null;

    @Column("int", { name: "win", nullable: true, default: () => "'0'" })
    win: number | null;

    @Column("int", { name: "lose", nullable: true, default: () => "'0'" })
    lose: number | null;

    @Column("int", { name: "draw", nullable: true, default: () => "'0'" })
    draw: number | null;

    @Column("int", { name: "point", nullable: true, default: () => "'1500'" })
    point: number | null;

    @Column("int", {
        name: "free_duel_count",
        nullable: true,
        default: () => "'3'",
    })
    freeDuelCount: number | null;

    @Column("int", { name: "friend_max", nullable: true, default: () => "'10'" })
    friendMax: number | null;

    @Column("int", {
        name: "part_inventory_max",
        nullable: true,
        default: () => "'30'",
    })
    partInventoryMax: number | null;

    @Column("int", {
        name: "quest_inventory_max",
        nullable: true,
        default: () => "'4'",
    })
    questInventoryMax: number | null;

    @Column("int", { name: "quest_flag", nullable: true, default: () => "'0'" })
    questFlag: number | null;

    @Column("int", {
        name: "quest_clear_num",
        nullable: true,
        default: () => "'0'",
    })
    questClearNum: number | null;

    @Column("int", { name: "exp_pow", nullable: true, default: () => "'100'" })
    expPow: number | null;

    @Column("int", { name: "gem_pow", nullable: true, default: () => "'100'" })
    gemPow: number | null;

    @Column("int", {
        name: "quest_find_pow",
        nullable: true,
        default: () => "'100'",
    })
    questFindPow: number | null;

    @Column("int", { name: "quest_point", nullable: true, default: () => "'0'" })
    questPoint: number | null;

    @Column("int", { name: "sale_type", nullable: true, default: () => "'0'" })
    saleType: number | null;

    @Column("datetime", { name: "sale_limit_at", nullable: true })
    saleLimitAt: Date | null;

    @Column("int", {
        name: "favorite_chara_id",
        nullable: true,
        default: () => "'1'",
    })
    favoriteCharaId: number | null;

    @Column("int", { name: "floor_count", nullable: true, default: () => "'1'" })
    floorCount: number | null;

    @Column("int", { name: "server_type", nullable: true, default: () => "'0'" })
    serverType: number | null;

    @Column("datetime", { name: "last_recovery_at", nullable: true })
    lastRecoveryAt: Date | null;

    @Column("datetime", { name: "created_at", nullable: true })
    createdAt: Date | null;

    @Column("datetime", { name: "updated_at", nullable: true })
    updatedAt: Date | null;

    @OneToMany(() => PartInventories, (partInventory: PartInventories) => partInventory.avatar)
    partInventories: Relation<PartInventories>[];
}
