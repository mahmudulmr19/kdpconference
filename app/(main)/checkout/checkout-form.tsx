"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import * as z from "zod";
import axios from "axios";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const schema = z.object({
  firstName: z
    .string({ required_error: "First name is required" })
    .min(1, { message: "First name is required" }),
  lastName: z
    .string({ required_error: "Last name is required" })
    .min(1, { message: "Last name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "invalid email" }),
  phoneNumber: z
    .string({ required_error: "Phone number is required" })
    .min(11, { message: "Please enter a valid phone number" }),
  tshirt_size: z.enum(["S", "M", "L", "XL", "XXL", "XXXL"], {
    required_error: "Please choose one of item",
  }),
  isAgree: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You have to agree with our terms and conditions!",
    }),
});

export default function CheckoutForm() {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/create-payment", data);
      window.location.href = response.data.GatewayPageURL;
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="col-span-6 md:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 md:col-span-2">
            Ticket Information
          </h4>
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <Label>First Name</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <Label>Last Name</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <Label>Email address</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <Label>Phone Number</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tshirt_size"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <Label> T-Shirt Size (Asian Measurement) </Label>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-row items-center gap-4"
                  >
                    {["S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
                      <FormItem
                        key={size}
                        className="flex items-center space-x-1 space-y-0"
                      >
                        <FormControl>
                          <RadioGroupItem value={size} />
                        </FormControl>
                        <FormLabel className="font-normal">{size}</FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h4 className="text-lg md:col-span-2 font-semibold text-gray-900 my-2">
            Ticket Price: 500tk
          </h4>
          <FormField
            control={form.control}
            name="isAgree"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center space-x-2 mt-2">
                      <Checkbox
                        id="agree"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <Label htmlFor="agree" className="text-gray-500">
                        I agree to all the{" "}
                        <Link
                          href="/privacy-policy"
                          className="text-gray-900"
                          target="_blank"
                        >
                          privacy policy
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/refund-policy"
                          className="text-gray-900"
                          target="_blank"
                        >
                          refund policy
                        </Link>
                      </Label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <div className="md:col-span-2 flex items-center justify-end">
            <div>
              <Button disabled={loading}>
                {loading ? "Loading..." : "Confirm Ticket"}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
