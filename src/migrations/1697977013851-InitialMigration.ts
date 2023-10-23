import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1697977013851 implements MigrationInterface {
    name = 'InitialMigration1697977013851'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" ALTER COLUMN "description" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" ALTER COLUMN "description" SET NOT NULL`);
    }

}
