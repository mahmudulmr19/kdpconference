import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/prisma/db";
import { Separator } from "@/components/ui/separator";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

async function getOrderData(token: string) {
  const order = await prisma.order.findUnique({ where: { tran_id: token } });
  return order;
}

export default async function TicketDownload({
  searchParams,
}: {
  searchParams: { token: string };
}) {
  const token = searchParams.token;
  if (!token) redirect("/");
  const order = await getOrderData(token);

  if (!order || order.status !== "SUCCESS") {
    redirect("/");
  }

  const urlString = `${process.env.DOMAIN}/ticket-download?token=${token}`;
  const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${urlString}`;

  return (
    <main className="flex justify-center items-center h-screen">
      <div
        className={cn(
          poppins.className,
          `w-full max-w-screen-md mx-auto p-2 lg:p-0`
        )}
      >
        <div className="flex items-start justify-between w-full gap-x-8">
          <div className="w-3/12">
            <div className="flex flex-col items-center gap-4">
              <h2 className="font-bold text-gray-900">Scan the QR code:</h2>
              <Image
                className="bg-white rounded-xl p-3 border-2 border-gray-900"
                src={qrCode}
                alt={`${order.firstName} ${order.lastName} qrcode`}
                width={300}
                height={300}
              />
              <Separator />
            </div>
          </div>
          <div className="w-3/4 border-l pl-5">
            <h2 className="font-bold text-gray-900">{order.event.eventName}</h2>
            <div className="flex flex-col gap-4 mt-4 font-medium text-sm text-gray-800">
              <p>
                <span className="uppercase">Date</span> : &nbsp;
                {order.event.date}
              </p>
              <p>
                <span className="uppercase">Venue</span> : &nbsp;{" "}
                {order.event.venue}
              </p>
            </div>

            <div className="border border-dashed mt-4" />

            <div className="flex flex-col gap-4 mt-4 font-medium text-sm text-gray-800">
              <p>
                <span className="uppercase">Price</span> : &nbsp; ৳{" "}
                {order.event.price}
              </p>
              <p className="capitalize">
                <span className="uppercase">Attendee</span> : &nbsp;{" "}
                {order.firstName + " " + order.lastName}
              </p>
              <p>
                <span className="uppercase">Phone</span> : &nbsp;{" "}
                {order.phoneNumber}
              </p>
              <p>
                <span className="uppercase">Email</span> : &nbsp; {order.email}
              </p>
              <p>
                <span className="uppercase">Payment Status</span> : &nbsp;{" "}
                <span className="capitalize">{order.status.toLowerCase()}</span>
              </p>
              <p>
                <span className="uppercase">T-Shirt Size</span> : &nbsp;{" "}
                {order.tshirt_size}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center my-8">
          <Button>Download</Button>
        </div>
      </div>
    </main>
  );
}
