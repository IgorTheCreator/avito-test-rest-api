-- CreateTable
CREATE TABLE "adv" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cost" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "adv_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "picture" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "advId" INTEGER,

    CONSTRAINT "picture_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "picture" ADD CONSTRAINT "picture_advId_fkey" FOREIGN KEY ("advId") REFERENCES "adv"("id") ON DELETE SET NULL ON UPDATE CASCADE;
