import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("code", ["code"], { unique: true })
@Index("clear_codes_code_index", ["code"], {})
@Entity("clear_codes", { schema: "unlight_db" })
export class ClearCodes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "code",
    nullable: true,
    unique: true,
    length: 255,
  })
  code: string | null;

  @Column("int", { name: "kind", nullable: true, default: () => "'0'" })
  kind: number | null;

  @Column("int", { name: "state", nullable: true, default: () => "'0'" })
  state: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
