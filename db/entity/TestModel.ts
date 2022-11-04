import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
import { genXid } from "./genId";

@Entity()
export class TestModel {

    @PrimaryColumn("varchar", {
        length: 20
    })
    id: string

    @BeforeInsert()
    setId() {
        this.id = genXid();
    }

}
