/*
  Warnings:

  - You are about to drop the column `payment` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "payment",
ADD COLUMN     "paymentMethod" TEXT;
