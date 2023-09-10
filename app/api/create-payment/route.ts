import { sslcommerz } from "@/lib/sslcommerz";
import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";

enum TShirtType {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
  XXXL = "XXXL",
}

interface BodyType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  tshirt_size: TShirtType;
}

function generateTransactionID(): string {
  const timestamp: string = Date.now().toString();
  const uniqueID: string = Math.random().toString(36).substring(2, 15);
  const transactionID: string = `${timestamp}${uniqueID}`;
  return transactionID;
}

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phoneNumber, tshirt_size }: BodyType =
      await req.json();

    if (!firstName || !lastName || !email || !phoneNumber || !tshirt_size) {
      return new NextResponse("Invalid data");
    }

    const event = {
      eventName: "KDP Conference 2023",
      price: 100,
      date: "20th October 2023",
      venue: "Western Cuisine Restaurant and Convention Center",
    };

    const tran_id = generateTransactionID();

    const data = {
      total_amount: event.price,
      product_amount: event.price,
      currency: "BDT",
      shipping_method: "NO",
      tran_id,
      success_url: `${process.env.DOMAIN}/api/payment-callback`,
      fail_url: `${process.env.DOMAIN}/api/payment-callback`,
      cancel_url: `${process.env.DOMAIN}/api/payment-callback`,
      cus_name: `${firstName} ${lastName}`,
      cus_email: email,
      cus_phone: phoneNumber,
      product_name: event.eventName,
      product_category: "event",
      product_profile: "non-physical-goods",
    };

    const response = await sslcommerz.init(data);
    await prisma.order.create({
      data: {
        tran_id,
        firstName,
        lastName,
        email,
        phoneNumber,
        event: {
          date: event.date,
          eventName: event.eventName,
          price: event.price.toString(),
          venue: event.venue,
        },
        tshirt_size: tshirt_size,
      },
    });

    return NextResponse.json({ GatewayPageURL: response.GatewayPageURL });
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "error",
        message: error.message,
      },
      { status: 400 }
    );
  }
}
