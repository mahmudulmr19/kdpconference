import { prisma } from "@/prisma/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const successTransaction = await prisma.order.findMany({
    where: {
      status: "SUCCESS",
    },
  });

  return NextResponse.json({
    success: true,
    status: 200,
    count: successTransaction.length,
    data: successTransaction,
  });
}
