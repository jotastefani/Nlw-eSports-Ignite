/*
  Warnings:

  - A unique constraint covering the columns `[gameId]` on the table `Ad` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Ad_gameId_key" ON "Ad"("gameId");
