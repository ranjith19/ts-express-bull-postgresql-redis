import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
import { genXid } from "./genId";

@Entity()
export class User {

    @PrimaryColumn("varchar", {
        length: 20
    })
    id: string

    @BeforeInsert()
    setId() {
        this.id = genXid();
    }

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}
