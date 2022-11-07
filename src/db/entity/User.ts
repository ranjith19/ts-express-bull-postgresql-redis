import {  Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { genXid } from "../../utils/genId";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid" )
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}
