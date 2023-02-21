-- CreateTable
CREATE TABLE "UstaInfo" (
    "id" SERIAL NOT NULL,
    "ustaNumber" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "ntrpRating" TEXT NOT NULL,

    CONSTRAINT "UstaInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UstaInfo_ustaNumber_key" ON "UstaInfo"("ustaNumber");

-- CreateIndex
CREATE UNIQUE INDEX "UstaInfo_userId_key" ON "UstaInfo"("userId");

-- AddForeignKey
ALTER TABLE "UstaInfo" ADD CONSTRAINT "UstaInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
