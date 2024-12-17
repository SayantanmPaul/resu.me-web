"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "../ui/common/BrandLogo";

interface viewType {
  view: "large" | "small";
}
const AuthHeader = ({ view }: viewType) => {
  const path = usePathname();

  return (
    <div
      className={`flex w-full items-center justify-between ${
        view === "large" ? "hidden lg:flex" : "lg:hidden"
      }`}
    >
      <div className={`self-start justify-self-start`}>
        <BrandLogo iconOnly />
      </div>
      {path === "/signup" ? (
        <Link href={"/signin"}>
          <span className="flex items-center gap-2 font-body text-sm font-medium text-muted-foreground">
            Sign in
            <ArrowRight size={14} strokeWidth={3} />
          </span>
        </Link>
      ) : path === "/signin" ? (
        <Link href={"/signup"}>
          <span className="flex items-center gap-2 font-body text-sm font-medium text-muted-foreground">
            Sign up
            <ArrowRight size={14} strokeWidth={3} />
          </span>
        </Link>
      ) : null}
    </div>
  );
};

export default AuthHeader;
