import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import GoogleLogo from "@/public/assets/socials/google-icon.svg";

const SignUpWithGoogle = () => {
  return (
    <div>
      <Button
        type="button"
        className="w-full rounded-[6px] bg-muted border border-border font-brand font-medium tracking-normal hover:bg-zinc-200 text-foreground duration-300 ease-in-out shadow-none"
      >
        <Image
          src={GoogleLogo}
          alt="github logo"
          width={24}
          height={24}
          draggable="false"
          className=" h-4 w-4"
        />
        Continue with Google
      </Button>
    </div>
  );
};

export default SignUpWithGoogle;
