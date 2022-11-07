import { BeforeInsert,  Entity,  PrimaryGeneratedColumn } from "typeorm";
import { genXid } from "../../utils/genId";

@Entity()
export class TestModel {

    @PrimaryGeneratedColumn("uuid" )
    id: string

}
