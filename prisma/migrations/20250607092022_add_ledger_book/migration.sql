/*
  Warnings:

  - You are about to drop the `KharchiStatus` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "KharchiStatus" DROP CONSTRAINT "KharchiStatus_projectId_fkey";

-- DropForeignKey
ALTER TABLE "KharchiStatus" DROP CONSTRAINT "KharchiStatus_userId_fkey";

-- DropTable
DROP TABLE "KharchiStatus";

-- CreateTable
CREATE TABLE "LedgerBook" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "amount" INTEGER NOT NULL,
    "type" "TransactionType" NOT NULL,
    "paymentMethod" "PaymentMethod" NOT NULL,
    "LabourName" TEXT NOT NULL,

    CONSTRAINT "LedgerBook_pkey" PRIMARY KEY ("id")
);
