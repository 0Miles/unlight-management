import type { Relation } from "typeorm";
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AvatarParts } from "./AvatarParts";
import { Avatars } from "./Avatars";

@Index("part_inventories_avatar_id_index", ["avatarId"], {})
@Entity("part_inventories", { schema: "unlight_db" })
export class PartInventories {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("int", { name: "avatar_id", nullable: true })
    avatarId: number | null;

    @Column("int", { name: "avatar_part_id", nullable: true })
    avatarPartId: number | null;

    @Column("int", { name: "used", nullable: true, default: () => "'0'" })
    used: number | null;

    @Column("datetime", { name: "end_at", nullable: true })
    endAt: Date | null;

    @Column("int", {
        name: "before_avatar_id",
        nullable: true,
        default: () => "'0'",
    })
    beforeAvatarId: number | null;

    @Column("datetime", { name: "created_at", nullable: true })
    createdAt: Date | null;

    @Column("datetime", { name: "updated_at", nullable: true })
    updatedAt: Date | null;

    @ManyToOne(() => Avatars, (avatar) => avatar.partInventories)
    @JoinColumn({ name: "avatar_id" })
    avatar: Relation<Avatars>;

    @ManyToOne(() => AvatarParts, (avatarPart) => avatarPart.partInventories)
    @JoinColumn({ name: "avatar_part_id" })
    avatarPart: Relation<AvatarParts>;
}
