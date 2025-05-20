-- CreateTable
CREATE TABLE "KharchiStatus" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KharchiStatus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "KharchiStatus" ADD CONSTRAINT "KharchiStatus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KharchiStatus" ADD CONSTRAINT "KharchiStatus_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
