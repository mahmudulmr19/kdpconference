import React from "react";

export default function RefundPolicy() {
  return (
    <section className="container_section py-[5rem!important]">
      <h1 className="text-2xl font-bold text-gray-900">Refund Policy</h1>

      <div className="space-y-4 mt-4 text-gray-800">
        <p>we have refund policies for the following:</p>
        <ul className="space-y-2">
          <li>
            • In case of payment failure or deduction from the user&apos;s
            wallet but didn&apos;t receive the organizer&apos;s panel or,
            deducted twice for net connectivity/ server error, then you have to
            contact with valid screenshots to the SSLCOMMERZ operations team and
            the Kdpconference organizer&apos;s team!
          </li>

          <li>
            • Refunds for rescheduled events are up to the organizers, team,
            venue, or promoter. If they allow it, you&apos;ll get a refund.
          </li>

          <li>
            • We will review and inform you of the approval status within 7
            official working days of your refund request.{" "}
            <span className="font-bold">
              We will not approve and allow any refund request after 1 October
              2023.
            </span>
          </li>
        </ul>
        <p>You may at any time contact Management Events through contact.</p>
      </div>
    </section>
  );
}
