/*
  Warnings:

  - You are about to drop the `LadderUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LadderUsers" DROP CONSTRAINT "LadderUsers_ladderId_fkey";

-- DropForeignKey
ALTER TABLE "LadderUsers" DROP CONSTRAINT "LadderUsers_userId_fkey";

-- DropTable
DROP TABLE "LadderUsers";

-- CreateTable
CREATE TABLE "_LadderToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LadderToUser_AB_unique" ON "_LadderToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_LadderToUser_B_index" ON "_LadderToUser"("B");

-- AddForeignKey
ALTER TABLE "_LadderToUser" ADD CONSTRAINT "_LadderToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Ladder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LadderToUser" ADD CONSTRAINT "_LadderToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
