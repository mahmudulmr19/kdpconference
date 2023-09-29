import { prisma } from "@/prisma/db";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const path = req.nextUrl.searchParams.get("path") || "/";
  revalidatePath(path);

  const successTransaction = await prisma.order.findMany({
    where: {
      status: "SUCCESS",
    },
  });

  return NextResponse.json({
    success: true,
    status: 200,
    orderCount: successTransaction.length,
  });
}
