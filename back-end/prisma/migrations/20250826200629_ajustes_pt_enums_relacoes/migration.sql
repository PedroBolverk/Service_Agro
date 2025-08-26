/*
  Warnings:

  - The values [OPEN,ASSIGNED,CANCELLEND,DONE] on the enum `RequestStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [PENDING,ACCEPTED,REJECTED,CANCELLEND] on the enum `StatusAtribuicao` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `serviceRequestId` on the `AtribuicaoServicos` table. All the data in the column will be lost.
  - You are about to drop the column `serviceRequestId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `serviceRequestId` on the `Rating` table. All the data in the column will be lost.
  - Added the required column `solicitacaoServicoId` to the `AtribuicaoServicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `solicitacaoServicoId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `solicitacaoServicoId` to the `Rating` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."RequestStatus_new" AS ENUM ('ABERTA', 'ATRIBUIDA', 'CANCELADA', 'CONCLUIDA');
ALTER TABLE "public"."SolicitacaoServicos" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "public"."SolicitacaoServicos" ALTER COLUMN "status" TYPE "public"."RequestStatus_new" USING ("status"::text::"public"."RequestStatus_new");
ALTER TYPE "public"."RequestStatus" RENAME TO "RequestStatus_old";
ALTER TYPE "public"."RequestStatus_new" RENAME TO "RequestStatus";
DROP TYPE "public"."RequestStatus_old";
ALTER TABLE "public"."SolicitacaoServicos" ALTER COLUMN "status" SET DEFAULT 'ABERTA';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "public"."StatusAtribuicao_new" AS ENUM ('PENDENTE', 'ACEITA', 'RECUSADA', 'CANCELADA');
ALTER TABLE "public"."AtribuicaoServicos" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "public"."AtribuicaoServicos" ALTER COLUMN "status" TYPE "public"."StatusAtribuicao_new" USING ("status"::text::"public"."StatusAtribuicao_new");
ALTER TYPE "public"."StatusAtribuicao" RENAME TO "StatusAtribuicao_old";
ALTER TYPE "public"."StatusAtribuicao_new" RENAME TO "StatusAtribuicao";
DROP TYPE "public"."StatusAtribuicao_old";
ALTER TABLE "public"."AtribuicaoServicos" ALTER COLUMN "status" SET DEFAULT 'PENDENTE';
COMMIT;

-- DropForeignKey
ALTER TABLE "public"."AtribuicaoServicos" DROP CONSTRAINT "AtribuicaoServicos_serviceRequestId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Message" DROP CONSTRAINT "Message_serviceRequestId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Rating" DROP CONSTRAINT "Rating_serviceRequestId_fkey";

-- AlterTable
ALTER TABLE "public"."AtribuicaoServicos" DROP COLUMN "serviceRequestId",
ADD COLUMN     "solicitacaoServicoId" TEXT NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'PENDENTE';

-- AlterTable
ALTER TABLE "public"."Message" DROP COLUMN "serviceRequestId",
ADD COLUMN     "solicitacaoServicoId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Rating" DROP COLUMN "serviceRequestId",
ADD COLUMN     "solicitacaoServicoId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."SolicitacaoServicos" ALTER COLUMN "status" SET DEFAULT 'ABERTA';

-- AddForeignKey
ALTER TABLE "public"."AtribuicaoServicos" ADD CONSTRAINT "AtribuicaoServicos_solicitacaoServicoId_fkey" FOREIGN KEY ("solicitacaoServicoId") REFERENCES "public"."SolicitacaoServicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Message" ADD CONSTRAINT "Message_solicitacaoServicoId_fkey" FOREIGN KEY ("solicitacaoServicoId") REFERENCES "public"."SolicitacaoServicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Rating" ADD CONSTRAINT "Rating_solicitacaoServicoId_fkey" FOREIGN KEY ("solicitacaoServicoId") REFERENCES "public"."SolicitacaoServicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
