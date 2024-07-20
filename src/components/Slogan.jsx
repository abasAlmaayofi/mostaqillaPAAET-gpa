import React from "react";

function Slogan() {
  return (
    <div className="flex flex-col items-end p-12 bg-gradient-to-r from-[#F8ED3A] to-[#D3CA12] md:w-[340px] w-[380px]">
      <p className="font-bold text-[#074F9F] md:pb-16 pb-6">٢٠٢٥/٢٠٢٤</p>{" "}
      <p className="md:text-5xl text-4xl font-bold leading-loose tracking-wide text-[#074F9F] text-right">
        ❝بعزائمنا سيُكتَب نصر المستقلة❞
      </p>{" "}
      <p className="text-[#074F9F] pt-6 text-xl tracking-wide text-right">
        القائمة المستقلة في التطبيقي
      </p>
    </div>
  );
}

export default Slogan;
