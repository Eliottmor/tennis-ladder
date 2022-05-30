/*
  Warnings:

  - You are about to drop the column `fullName` on the `Player` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Player" DROP COLUMN "fullName",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;
