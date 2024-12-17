import React from "react";
import Image from "next/image";
import BrandDefault from "@/public/assets/brand/BrandDefault.svg";
import BrandIconOnly from "@/public/assets/brand/BrandIconOnly.svg";
import BrandIconOnlyDark from "@/public/assets/brand/BrandIconOnlyDark.svg";
import BrandIconOnlyLight from "@/public/assets/brand/BrandIconOnlyLight.svg";
import { AspectRatio } from "../aspect-ratio";

interface BrandLogoProps {
  iconOnly?: boolean;
  theme?: "light" | "dark";
  className?: string;
}

const BrandLogo = ({ iconOnly, theme, className }: BrandLogoProps) => {
  return (
    <span className={className}>
      <AspectRatio ratio={1 / 1}>
        {iconOnly ? (
          theme === "light" ? (
            <Image
              src={BrandIconOnlyLight}
              alt="hackmates"
              className="h-full w-full object-cover select-none"
              draggable={false}
              loading="lazy"
            />
          ) : theme === "dark" ? (
            <Image
              src={BrandIconOnlyDark}
              alt="hackmates"
              className="h-full w-full object-cover select-none"
              draggable={false}
              loading="lazy"
            />
          ) : (
            <Image
              src={BrandIconOnly}
              alt="hackmates"
              className="h-full w-full object-cover select-none"
              draggable={false}
              loading="lazy"
            />
          )
        ) : (
          <Image
            src={BrandDefault}
            alt="hackmates"
            className="h-full w-full object-cover select-none"
            draggable={false}
            loading="lazy"
          />
        )}
      </AspectRatio>
    </span>
  );
};

export default BrandLogo;
