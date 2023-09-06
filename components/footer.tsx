import React from "react";
import Image from "next/image";
import sslcomerzImage from "@/assets/sslcommerz.png";

export function Footer() {
  return (
    <footer className="container_section">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>
      <div className="text-center">
        <Image src={sslcomerzImage} alt="sslcomerz payment methods" />
        <p>
          &copy; {new Date().getFullYear()} by{" "}
          <span className="text-orange-500">KDP Conference</span> | All Right
          Reserved.
        </p>
      </div>
    </footer>
  );
}
