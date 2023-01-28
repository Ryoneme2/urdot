/*
  Warnings:

  - You are about to drop the `Example` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Example";

-- CreateTable
CREATE TABLE "Url" (
    "id" STRING NOT NULL,
    "url" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clicks" INT4 NOT NULL DEFAULT 0,
    "creatById" STRING,

    CONSTRAINT "Url_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShorterUrl" (
    "id" STRING NOT NULL,
    "urlId" STRING NOT NULL,

    CONSTRAINT "ShorterUrl_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShorterUrl_urlId_key" ON "ShorterUrl"("urlId");

-- AddForeignKey
ALTER TABLE "Url" ADD CONSTRAINT "Url_creatById_fkey" FOREIGN KEY ("creatById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShorterUrl" ADD CONSTRAINT "ShorterUrl_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "Url"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
