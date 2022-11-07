import { MigrationInterface, QueryRunner } from "typeorm";

export class test1667821292374 implements MigrationInterface {
    name = 'test1667821292374'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "test_model" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_474f40aa7fa5bd6c716285a2856" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "test_model"`);
    }

}
