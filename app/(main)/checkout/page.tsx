import React from "react";
import { Separator } from "@/components/ui/separator";
import CheckoutForm from "./checkout-form";

export default function CheckoutPage() {
  return (
    <main className="container_section py-[5rem!important]">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      <div className="grid grid-cols-6">
        <Separator className="mt-4 col-span-6 md:col-span-4" />
      </div>

      <CheckoutForm />
    </main>
  );
}
