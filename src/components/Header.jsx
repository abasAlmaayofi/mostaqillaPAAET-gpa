import { Image, Link } from "@nextui-org/react";
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="w-screen py-1 flex justify-between items-center md:px-16 px-8  bg-[#163450]">
        <div>
          <Image src={Logo} height={130} width={130} />
        </div>
        <div onClick={() => setShowSidebar(true)} className="cursor-pointer">
          <HiOutlineMenuAlt4 color="white" size={25} />
        </div>
      </div>
      {/* sidebar */}
      <div
        className={`absolute inset-0 bg-[#163450] z-30 flex flex-col justify-start items-end md:pt-12 pt-1 md:pr-28 pr-12 gap-10 ${
          showSidebar ? "flex" : "hidden"
        }`}
      >
        <span
          onClick={() => setShowSidebar(false)}
          className="md:pb-8 pb-3 cursor-pointer"
        >
          <IoMdClose color="white" size={25} />
        </span>
        <Link
          href="http://mostaqillapaaet.com/#Welcome"
          className="text-white underline md:text-5xl text-3xl"
        >
          الصفحة الترحيبية
        </Link>
        <Link
          href="https://mostaqillapaaet.com/wp-content/uploads/2024/07/efbfbdefbfbdd8a5d986d8acd8a7d8b2d8a7d8aa-d8a7d984d982d8a7d8a6d985d8a9-d8a7d984d985d8b3d8aad982d984d8a9-d981d98a-d8a7d984d8aad8b7d8a8d98ad982d98aefbfbd.pdf"
          className="text-white underline md:text-5xl text-3xl"
        >
          إنجازات ومطالبات القائمة{" "}
        </Link>
        <Link href="#" className="text-white underline md:text-5xl text-3xl">
          حساب المعدل التراكمي
        </Link>
        <Link
          href="http://mostaqillapaaet.com/#generalInformation"
          className="text-white underline md:text-5xl text-3xl"
        >
          ملفات عامة
        </Link>
        <Link
          href="https://mostaqillapaaet.com/guidelines-videos/"
          className="text-white underline md:text-5xl text-3xl"
        >
          فيديوهات
        </Link>
      </div>
    </>
  );
}

export default Header;
