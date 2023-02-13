import type { Relation } from "typeorm";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PartInventories } from "./PartInventories";

@Entity("avatar_parts", { schema: "unlight_db" })
export class AvatarParts {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("varchar", { name: "name", nullable: true, length: 255 })
    name: string | null;

    @Column("text", { name: "image", nullable: true })
    image: string | null;

    @Column("int", { name: "parts_type", nullable: true, default: () => "'0'" })
    partsType: number | null;

    @Column("int", { name: "power_type", nullable: true, default: () => "'0'" })
    powerType: number | null;

    @Column("int", { name: "power", nullable: true, default: () => "'0'" })
    power: number | null;

    @Column("int", { name: "duration", nullable: true, default: () => "'0'" })
    duration: number | null;

    @Column("text", { name: "caption", nullable: true })
    caption: string | null;

    @Column("int", { name: "color", nullable: true, default: () => "'0'" })
    color: number | null;

    @Column("int", { name: "offset_x", nullable: true, default: () => "'0'" })
    offsetX: number | null;

    @Column("int", { name: "offset_y", nullable: true, default: () => "'0'" })
    offsetY: number | null;

    @Column("int", {
        name: "offset_scale",
        nullable: true,
        default: () => "'100'",
    })
    offsetScale: number | null;

    @Column("datetime", { name: "created_at", nullable: true })
    createdAt: Date | null;

    @Column("datetime", { name: "updated_at", nullable: true })
    updatedAt: Date | null;

    @OneToMany(() => PartInventories, (partInventory: PartInventories) => partInventory.avatar)
    partInventories: Relation<PartInventories>[];
}
