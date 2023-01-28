/*
  Warnings:

  - You are about to drop the column `creatById` on the `Url` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[shorterUrl]` on the table `ShorterUrl` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shorterUrl` to the `ShorterUrl` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Url" DROP CONSTRAINT "Url_creatById_fkey";

-- AlterTable
ALTER TABLE "ShorterUrl" ADD COLUMN     "shorterUrl" STRING NOT NULL;

-- AlterTable
ALTER TABLE "Url" DROP COLUMN "creatById";
ALTER TABLE "Url" ADD COLUMN     "createById" STRING;

-- CreateIndex
CREATE UNIQUE INDEX "ShorterUrl_shorterUrl_key" ON "ShorterUrl"("shorterUrl");

-- AddForeignKey
ALTER TABLE "Url" ADD CONSTRAINT "Url_createById_fkey" FOREIGN KEY ("createById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
