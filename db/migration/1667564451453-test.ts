import { MigrationInterface, QueryRunner } from "typeorm";

export class test1667564451453 implements MigrationInterface {
    name = 'test1667564451453'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "test_model" ("id" character varying(20) NOT NULL, CONSTRAINT "PK_474f40aa7fa5bd6c716285a2856" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "test_model"`);
    }

}
