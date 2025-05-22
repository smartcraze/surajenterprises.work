/*
  Warnings:

  - You are about to alter the column `totalAmount` on the `Project` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "totalAmount" SET DATA TYPE INTEGER;
