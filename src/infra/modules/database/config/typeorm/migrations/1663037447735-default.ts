import { MigrationInterface, QueryRunner } from 'typeorm';

export class default1663037447735 implements MigrationInterface {
  name = 'default1663037447735';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "passwords" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "password" character varying NOT NULL, "crypto_key" character varying NOT NULL, "category" character varying(20) NOT NULL, "favorite" boolean NOT NULL, "user_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "UQ_d7a634160eebbc26812c5442591" UNIQUE ("name"), CONSTRAINT "PK_c5629066962a085dea3b605e49f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "passwords" ADD CONSTRAINT "FK_72ee375de524a1d87396f4f2a02" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "passwords" DROP CONSTRAINT "FK_72ee375de524a1d87396f4f2a02"`,
    );
    await queryRunner.query(`DROP TABLE "passwords"`);
  }
}
