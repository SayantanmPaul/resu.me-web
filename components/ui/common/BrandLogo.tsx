import React from "react";
import { AspectRatio } from "../aspect-ratio";
import Image from "next/image";
import BrandDefault from "@/public/brand/BrandDefault.svg";

const BrandLogo = () => {
  return (
    <AspectRatio ratio={1 / 1}>
      <Image
        src={BrandDefault}
        alt="hackmates"
        fill
        className="h-full w-full object-cover"
        draggable={false}
        loading="lazy"
      />
    </AspectRatio>
  );
};

export default BrandLogo;
