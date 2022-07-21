-- CreateTable
CREATE TABLE "Ladder" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ladder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LadderPlayers" (
    "playerId" INTEGER NOT NULL,
    "ladderId" INTEGER NOT NULL,

    CONSTRAINT "LadderPlayers_pkey" PRIMARY KEY ("playerId","ladderId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ladder_name_key" ON "Ladder"("name");

-- AddForeignKey
ALTER TABLE "LadderPlayers" ADD CONSTRAINT "LadderPlayers_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LadderPlayers" ADD CONSTRAINT "LadderPlayers_ladderId_fkey" FOREIGN KEY ("ladderId") REFERENCES "Ladder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
