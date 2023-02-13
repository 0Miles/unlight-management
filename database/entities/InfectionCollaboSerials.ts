import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("serial", ["serial"], { unique: true })
@Index("player_id", ["playerId"], { unique: true })
@Index("infection_collabo_serials_serial_index", ["serial"], {})
@Index("infection_collabo_serials_player_id_index", ["playerId"], {})
@Entity("infection_collabo_serials", { schema: "unlight_db" })
export class InfectionCollaboSerials {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "serial",
    nullable: true,
    unique: true,
    length: 255,
  })
  serial: string | null;

  @Column("int", { name: "player_id", nullable: true, unique: true })
  playerId: number | null;

  @Column("int", { name: "server_type", nullable: true, default: () => "'0'" })
  serverType: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
