import React from "react";
import Image from "next/image";
import sslcomerzImage from "@/assets/sslcommerz.png";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import { HiPhone } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 md:justify-items-center lg:grid-cols-3 gap-4">
          <div className=" space-y-8">
            <div className="space-y-2.5">
              <Link href="/" className="font-bold text-xl block">
                <Image src={logo} alt="kdp conference" height={40} />
              </Link>
              <p className="text-[15px]">
                The main objective of KDP Conference is to establish the largest
                and most cooperative community with all the Authors in
                Bangladesh. KDP Conference- Authors Community is committed to
                working together as a family, working towards positive aspects
                of the community.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="inline-flex items-center gap-2">
                <HiPhone className="text-orange-500" />
                01647794706, 01767707216
              </p>
              <p className="inline-flex items-center gap-2">
                <HiEnvelope className="text-orange-500" />
                contact@kdpconference.com
              </p>
            </div>
          </div>

          <div className="">
            <h2 className="text-orange-500 font-semibold text-lg mb-5">
              Community
            </h2>

            <div className="mb-5 flex items-center gap-2">
              <Link
                href="https://www.facebook.com/groups/kdpconference"
                target="_blank"
                className={cn(
                  buttonVariants({ size: "icon" }),
                  "ring-offset-black"
                )}
              >
                <BsFacebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@kdpconference"
                target="_blank"
                className={cn(
                  buttonVariants({ size: "icon" }),
                  "ring-offset-black"
                )}
              >
                <BsYoutube className="w-5 h-5" />
              </Link>
            </div>

            <h2 className="text-orange-500 font-semibold text-lg">
              Useful Links
            </h2>

            <div className="mt-5 flex flex-col gap-2">
              <Link
                href="/privacy-policy"
                className="hover:text-orange-500 transition"
              >
                Privacy Policy
              </Link>
              <Link
                href="/refund-policy"
                className="hover:text-orange-500 transition"
              >
                Refund Policy
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-orange-500 font-semibold text-lg">Location</h2>
            <iframe
              className="rounded-md mt-5"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57514.7052418463!2d89.30873895797721!3d25.715378495062343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3337cdad94343%3A0xd582daefd946c062!2sWestern%20Cuisine%20Restaurant%20and%20Convention%20Center!5e0!3m2!1sen!2sus!4v1694026409142!5m2!1sen!2sus"
              width={350}
              height={250}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="text-center space-y-8 mt-10">
          <Image src={sslcomerzImage} alt="sslcomerz payment methods" />
          <p className=" text-sm font-medium">
            &copy; {new Date().getFullYear()} by{" "}
            <a href="https://www.kdpconference.com" className="text-orange-500">
              KDP Conference
            </a>{" "}
            | All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
