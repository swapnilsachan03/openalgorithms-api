/*
  Warnings:

  - Added the required column `name` to the `Status` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Status" ADD COLUMN     "name" TEXT NOT NULL;
