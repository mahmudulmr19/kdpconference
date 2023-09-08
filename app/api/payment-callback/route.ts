import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const extractedData: { [key: string]: string } = {};

    // Use forEach to iterate through formData entries
    formData.forEach((value, key) => {
      extractedData[key] = value.toString();
    });

    if (!extractedData.status || !extractedData.tran_id) {
      throw new Error("Invalid info");
    }

    const { tran_id, status } = extractedData;

    if (status !== "VALID" && status !== "VALIDATED") {
      throw new Error("Failed to payment");
    }

    const order = await prisma.order.findUnique({
      where: {
        tran_id: extractedData.tran_id,
      },
    });

    if (!order) {
      throw new Error("Order not found");
    }

    const updatedOrder = await prisma.order.update({
      data: {
        status: "SUCCESS",
      },
      where: {
        tran_id,
      },
    });

    return NextResponse.json({ extractedData, updatedOrder });
  } catch (error) {
    return Response.redirect(`${process.env.DOMAIN}/failed`);
  }
}
