import { prisma } from "@/prisma/db";
import { transporter } from "@/lib/transporter";
import { getTicketEmail } from "@/emails/ticket-email";

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

    await prisma.order.update({
      data: {
        status: "SUCCESS",
      },
      where: {
        tran_id,
      },
    });
    const link = `${process.env.DOMAIN}/ticket-download?token=${order.tran_id}`;
    await transporter.sendMail({
      from: `KDP CONFERENCE <${process.env.NODEMAILER_EMAIL}>`,
      to: order.email,
      subject: "Congratulations on Your KDP Conference Ticket!",
      html: getTicketEmail(link, `${order.firstName} ${order.lastName}`),
    });

    return Response.redirect(link);
  } catch (error) {
    return Response.redirect(`${process.env.DOMAIN}/`);
  }
}
