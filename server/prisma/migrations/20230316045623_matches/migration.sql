-- CreateTable
CREATE TABLE "Match" (
    "id" SERIAL NOT NULL,
    "matchDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "winnerOneId" TEXT NOT NULL,
    "winnerTwoId" TEXT,
    "loserOneId" TEXT NOT NULL,
    "loserTwoId" TEXT,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Set" (
    "id" SERIAL NOT NULL,
    "matchId" INTEGER NOT NULL,
    "setNumber" INTEGER NOT NULL,
    "matchWinnerScore" INTEGER NOT NULL,
    "matchLoserScore" INTEGER NOT NULL,
    "matchWinnerTiebreakScore" INTEGER,
    "matchLoserTiebreakScore" INTEGER,

    CONSTRAINT "Set_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_winnerOneId_fkey" FOREIGN KEY ("winnerOneId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_winnerTwoId_fkey" FOREIGN KEY ("winnerTwoId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_loserOneId_fkey" FOREIGN KEY ("loserOneId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_loserTwoId_fkey" FOREIGN KEY ("loserTwoId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Set" ADD CONSTRAINT "Set_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
