import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/prisma/db";
import { TicketCard } from "./ticket-card";

async function getOrderData(token: string) {
  const order = await prisma.order.findUnique({ where: { tran_id: token } });
  return order;
}

export default async function TicketDownloadPage({
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

  return <TicketCard order={order} qrCode={qrCode} />;
}
