-- CreateTable
CREATE TABLE "d_player" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "email" TEXT,
    "height" SMALLINT NOT NULL,
    "weight" SMALLINT,
    "mainPosition" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "d_player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "d_team" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "d_team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "d_championship" (
    "id" SERIAL NOT NULL,
    "hold_on" DATE NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "d_championship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "d_match" (
    "id" SERIAL NOT NULL,
    "sex" TEXT NOT NULL,
    "championship_id" INTEGER NOT NULL,
    "oak_id" INTEGER NOT NULL,
    "oakScore" INTEGER NOT NULL,
    "willow_id" INTEGER NOT NULL,
    "willowScore" INTEGER NOT NULL,
    "nextMatchId" INTEGER,

    CONSTRAINT "d_match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "f_entry" (
    "id" SERIAL NOT NULL,
    "matchId" INTEGER NOT NULL,
    "uniform_number" SMALLINT NOT NULL,
    "player_id" INTEGER NOT NULL,
    "team_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "f_entry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "f_raid" (
    "id" SERIAL NOT NULL,
    "raider_id" INTEGER NOT NULL,
    "point_for" SMALLINT NOT NULL,
    "point_against" SMALLINT NOT NULL,
    "do_or_die_count" SMALLINT NOT NULL,
    "duration" SMALLINT NOT NULL,
    "opportunity" SMALLINT NOT NULL,
    "is_bonus" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "f_raid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "f_struggle" (
    "id" SERIAL NOT NULL,
    "raid_id" INTEGER NOT NULL,
    "tackle_by_id" INTEGER,
    "trick_code" TEXT NOT NULL,

    CONSTRAINT "f_struggle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "f_in_out_log" (
    "id" SERIAL NOT NULL,
    "raid_id" INTEGER NOT NULL,
    "oak_in_id" INTEGER,
    "oak_out_id" INTEGER,
    "willow_in_id" INTEGER,
    "willow_out_id" INTEGER,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "f_in_out_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "d_trick" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "raid_success" BOOLEAN NOT NULL,

    CONSTRAINT "d_trick_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "d_match_championship_id_oak_id_willow_id_key" ON "d_match"("championship_id", "oak_id", "willow_id");

-- CreateIndex
CREATE UNIQUE INDEX "f_entry_player_id_team_id_matchId_key" ON "f_entry"("player_id", "team_id", "matchId");

-- CreateIndex
CREATE UNIQUE INDEX "d_trick_code_key" ON "d_trick"("code");

-- CreateIndex
CREATE UNIQUE INDEX "d_trick_name_key" ON "d_trick"("name");

-- AddForeignKey
ALTER TABLE "d_match" ADD CONSTRAINT "d_match_championship_id_fkey" FOREIGN KEY ("championship_id") REFERENCES "d_championship"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "d_match" ADD CONSTRAINT "d_match_oak_id_fkey" FOREIGN KEY ("oak_id") REFERENCES "d_team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "d_match" ADD CONSTRAINT "d_match_willow_id_fkey" FOREIGN KEY ("willow_id") REFERENCES "d_team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "f_entry" ADD CONSTRAINT "f_entry_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "d_match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "f_entry" ADD CONSTRAINT "f_entry_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "d_player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "f_entry" ADD CONSTRAINT "f_entry_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "d_team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "f_raid" ADD CONSTRAINT "f_raid_raider_id_fkey" FOREIGN KEY ("raider_id") REFERENCES "f_entry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "f_struggle" ADD CONSTRAINT "f_struggle_raid_id_fkey" FOREIGN KEY ("raid_id") REFERENCES "f_raid"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "f_struggle" ADD CONSTRAINT "f_struggle_tackle_by_id_fkey" FOREIGN KEY ("tackle_by_id") REFERENCES "f_entry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "f_struggle" ADD CONSTRAINT "f_struggle_trick_code_fkey" FOREIGN KEY ("trick_code") REFERENCES "d_trick"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "f_in_out_log" ADD CONSTRAINT "f_in_out_log_raid_id_fkey" FOREIGN KEY ("raid_id") REFERENCES "f_raid"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "f_in_out_log" ADD CONSTRAINT "f_in_out_log_oak_in_id_fkey" FOREIGN KEY ("oak_in_id") REFERENCES "f_entry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "f_in_out_log" ADD CONSTRAINT "f_in_out_log_oak_out_id_fkey" FOREIGN KEY ("oak_out_id") REFERENCES "f_entry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "f_in_out_log" ADD CONSTRAINT "f_in_out_log_willow_in_id_fkey" FOREIGN KEY ("willow_in_id") REFERENCES "f_entry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "f_in_out_log" ADD CONSTRAINT "f_in_out_log_willow_out_id_fkey" FOREIGN KEY ("willow_out_id") REFERENCES "f_entry"("id") ON DELETE SET NULL ON UPDATE CASCADE;
