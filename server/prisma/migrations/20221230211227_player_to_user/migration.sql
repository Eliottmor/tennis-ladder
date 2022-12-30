/*
  Warnings:

  - You are about to drop the `LadderPlayers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Player` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LadderPlayers" DROP CONSTRAINT "LadderPlayers_ladderId_fkey";

-- DropForeignKey
ALTER TABLE "LadderPlayers" DROP CONSTRAINT "LadderPlayers_playerId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT;

-- DropTable
DROP TABLE "LadderPlayers";

-- DropTable
DROP TABLE "Player";

-- CreateTable
CREATE TABLE "LadderUsers" (
    "userId" TEXT NOT NULL,
    "ladderId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LadderUsers_pkey" PRIMARY KEY ("userId","ladderId")
);

-- AddForeignKey
ALTER TABLE "LadderUsers" ADD CONSTRAINT "LadderUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LadderUsers" ADD CONSTRAINT "LadderUsers_ladderId_fkey" FOREIGN KEY ("ladderId") REFERENCES "Ladder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
