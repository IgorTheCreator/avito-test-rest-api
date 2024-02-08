/*
  Warnings:

  - You are about to drop the column `desc` on the `adv` table. All the data in the column will be lost.
  - Added the required column `desciption` to the `adv` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "adv" DROP COLUMN "desc",
ADD COLUMN     "desciption" TEXT NOT NULL;
