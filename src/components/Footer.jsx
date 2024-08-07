import { Image, Link } from "@nextui-org/react";
import React from "react";
import Logo from "../assets/logo.png";

import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-screen py-2 flex justify-between items-start md:px-20 px-6  bg-[#163450]">
      <div className="flex flex-col gap-4">
        <Image src={Logo} height={90} width={90} />
        <p className="text-white md:text-sm text-xs">
          جميع الحقوق محفوظة لقائمة المستقلة | التطبيقي
        </p>
      </div>
      <div className="flex gap-8 pt-12">
        <Link
          href="https://www.instagram.com/grouppaaet0/"
          className="cursor-point"
        >
          <IoLogoInstagram color="white" size={20} />
        </Link>
        <Link
          href="https://www.youtube.com/@grouppaaet625"
          className="cursor-point"
        >
          <IoLogoYoutube color="white" size={16} />
        </Link>
        <Link href="https://x.com/Grouppaaet0" className="cursor-point">
          <FaXTwitter color="white" size={16} />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
